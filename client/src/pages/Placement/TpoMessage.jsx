import React, { useState } from "react";

const PlacementDashboard = () => {
  const menuItems = [
    {
      id: "about",
      label: "About Placement Cell",
      content: `
      The Placement Cell aims to create career opportunities for students by inviting top organizations for campus placements.
      It also conducts career guidance workshops, industry interaction sessions, and specialized training programs.

      <h2 class="text-3xl font-bold mt-6">Overview</h2>  
      <p>The Cell was established with a prime objective of creating career opportunities in reputed corporates towards meeting aspirations of all the stakeholders. 
      The Cell is devoted to cater to the needs of the organizations in conducting campus interviews for placements. 
      Interactions with organizations are regularly done for placement requirements. 
      The Placement Cell also conducts career guidance workshops for final and pre-final year students to help them face their future with confidence.  
      The cell utilizes the facilities of the college like conference halls equipped with home theatres, LCD projectors, PA system, laptops, desktops, laser printers, handy cams, and digital cameras.</p>

      <h2 class="text-3xl font-bold mt-6">Objectives</h2>  
      <ul class="list-disc pl-6">
        <li>Achieve 100% Placements.</li>
        <li>Invite the best companies from various industries for Campus Recruitment.</li>
        <li>Make students industry-ready with proper planning, focus, and targeted training programs.</li>
        <li>Promote career counseling by organizing guest lectures, awareness programs, and seminars.</li>
        <li>Conduct training programs, both in-house and outsourced via corporate trainers.</li>
        <li>Plan and organize more Industry-Institute Interactions to benefit both students and faculty.</li>
        <li>Introduce Video-Conferencing with Industry experts and alumni for career orientation and exploration.</li>
        <li>Build and enhance the institution’s brand value in the corporate world.</li>
      </ul>
      `,
      images: [
        "https://gvrs.ac.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-19-at-11.37.53_7879fbc4.jpg",
        "https://rvrjcce.ac.in/ximage/k.sureshbabu.jpg",
      ],
      contacts: [
        {
          name: "Coming Soon",
          position: "Training & Placement Officer",
          email: "Coming Soon.ac.in",
          mobile: "+91 Coming Soon",
          image: "/attachments/Q6ZGnhwT8uVNfmnk1XULA.png",
        },
        {
          name: "Coming Soon",
          position: "Placement Officer",
          email: "Coming Soon.ac.in",
          mobile: "+91 Coming Soon",
          image: "/attachments/WCtzjc398hQkU7e1DDotk.png",
        },
      ],
    },
    {
      id: "committee",
      label: "Placement Committee",
      content: `
        <div class="flex items-center justify-center min-h-screen bg-white">
  <table class="table-auto border border-gray-300 text-center">
    <thead class="bg-sky-200">
      <tr>
        <th class="border border-gray-300 px-4 py-2">S. No.</th>
        <th class="border border-gray-300 px-4 py-2">Name & Designation</th>
        <th class="border border-gray-300 px-4 py-2">Position</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white"><td class="border px-4 py-2">01.</td><td class="border px-4 py-2">Sri Ch. Srinivasa Rao, Training & Placement Officer</td><td class="border px-4 py-2">Convener</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">02.</td><td class="border px-4 py-2">Dr. K. Suresh Babu, Placement Officer</td><td class="border px-4 py-2">Co-Convener</td></tr>
      <tr class="bg-white"><td class="border px-4 py-2">03.</td><td class="border px-4 py-2">Dr. M.L.N. Krishna Sai, Assoc. Prof., CE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">04.</td><td class="border px-4 py-2">Sri M. Srikanth Kumar, Asst. Prof., CE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-white"><td class="border px-4 py-2">05.</td><td class="border px-4 py-2">Sri G. Sanijya, Asst. Prof., CE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">06.</td><td class="border px-4 py-2">Sri K. Siva Prasad, Asst. Prof., ChE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-white"><td class="border px-4 py-2">07.</td><td class="border px-4 py-2">Sri P. Rama Krishna, Asst. Prof., CSE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">08.</td><td class="border px-4 py-2">Dr. N. Bhagya Lakshmi, Asst. Prof., CSE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-white"><td class="border px-4 py-2">09.</td><td class="border px-4 py-2">Sri S. Karthik, Asst. Prof., CSE</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">10.</td><td class="border px-4 py-2">Dr. M. Srinivasa Rao, Asst. Prof., CSBS</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-white"><td class="border px-4 py-2">11.</td><td class="border px-4 py-2">Dr. G. Ramanjaiah, Assoc. Prof., CSD</td><td class="border px-4 py-2">Member</td></tr>
      <tr class="bg-gray-100"><td class="border px-4 py-2">12.</td><td class="border px-4 py-2">Sri B. Rama Krishna, Asst. Prof., CSD</td><td class="border px-4 py-2">Member</td></tr>
    </tbody>
  </table>
</div>

              `,
    },

    {
      id: "training",
      label: "Training Programmes",
      content: `<section id="training" class="py-10 px-4 text-center">
  <div class="flex flex-wrap justify-center gap-4 p-20">

    <a href="https://gvrs.ac.in/about-us/" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2024-2025</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2023-2024</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2022-2023</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2021-2022</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2020-2021</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2019-2020</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2018-2019</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2017-2018</a>
    <a href="#" class="no-underline bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">2016-2017</a>
  </div>
</section>
`,
    },
    {
      id: "statistics",
      label: "Placement Statistics",
      content: "Coming Soon ...",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className=" bg-gray-200 p-6">
        <h5 className="text-xl font-semibold mb-4 text-center">
          Training & Placements
        </h5>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`block w-full py-3 mb-3 text-center font-medium rounded-md transition duration-300 ${
              selectedItem.id === item.id
                ? "bg-red-800 text-white"
                : "bg-gray-300 hover:bg-red-400"
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 overflow-auto w-3/4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {selectedItem.label}
        </h2>
        <div
          className="text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: selectedItem.content }}
        />

        {/* Optional Images Section */}
        {Array.isArray(selectedItem.images) &&
          selectedItem.images.length > 0 && (
            <div className="grid grid-cols-2 gap-6 mt-6">
              {selectedItem.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Section Image ${index + 1}`}
                  className="w-[300px] h-[350px] object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}

        {/* Contacts Section */}
        {Array.isArray(selectedItem.contacts) &&
          selectedItem.contacts.length > 0 && (
            <div className="grid grid-cols-2 gap-6 mt-6">
              {selectedItem.contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-4  rounded-lg shadow-md w-[300px]"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{contact.name}</h3>
                    <p className="text-gray-600">{contact.position}</p>
                    <p className="text-blue-500">{contact.email}</p>
                    <p className="text-gray-700">{contact.mobile}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default PlacementDashboard;
