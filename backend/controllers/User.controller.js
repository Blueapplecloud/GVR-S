const bcrypt = require("bcryptjs");
const User = require("../DB/models/User.model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  //check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  const { name, password } = req.body;

  //check if all fields are provided
  if (!name || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  // Check if user already exists
  const existingUser = await User.findOne({ name });
  if (!existingUser) {
    return res.status(400).json({
      success: false,
      message: "User does not exist",
    });
  } else {
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const enCryptedToken = jwt.sign({ id: existingUser._id }, JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set the token in the response header

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token: enCryptedToken,
      },
    });
  }
};

// Validate user
const validateUser = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Please provide a token",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    res.status(200).json({
      success: true,
      message: "User validated successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error validating user",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  validateUser,
};
