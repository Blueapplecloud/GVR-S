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
    },
    {
      id: "committee",
      label: "Placement Committee",
      content: `
      <div class="flex items-center justify-center  bg-white"> 
  <div class="text-left mt-2">
            <h2 class="text-2xl font-bold text-black-600">DEDICATED PLACEMENT COMMITTEE</h2>
            <p class="text-gray-700 mt-2 text-lg font-medium">Initiation</p>
            <p class="text-gray-600 text-base mt-3">The Training & Placement Committee is dedicated to preparing students and connecting them with appropriate opportunities.</p>
            <ul class="text-gray-600 text-base mt-2 list-disc list-inside">
              <li>Develop specific recruiting strategies to maximize your success</li>
              <li>Provide assistance to facilitate your recruitment process</li>
            </ul>
            <p class="text-gray-600 text-base mt-3">More than awards and rankings, the strength of our employer relations depends upon our graduates. Employers return to recruit at GVR&S because of the real-world skills our students develop through an applied, hands-on curriculum—producing highly success-oriented graduates.</p>

            <h3 class="text-xl font-bold text-black-600 mt-5">FACILITIES FOR RECRUITERS</h3>
            <ul class="text-gray-600 text-base mt-2 list-disc list-inside">
              <li>Auditorium with capacity for the entire batch, equipped with a projector for Pre-Placement Talks (PPT).</li>
              <li>Group Discussion and Personal Interview rooms for a seamless recruitment process.</li>
            </ul>
          </div>
        </div>
      `,
    },
    {
      id: "Procedure",
      label: "Placements Procedure",
      content: `  <div className="p-6 bg-white">
  <h1 class="text-2xl font-bold text-black-600">PLACEMENT PROCEDURE</h1>
  <div>
     <p class="text-gray-700 mt-2 text-lg font-medium">Initiation</p>
    <ol class="text-gray-600 text-base mt-2 list-disc list-inside">
      <li>The Placement Office sends invitations to companies/organizations along with relevant information.</li>
      <li>The company/organization reverts with filled JD containing information about company/organization, recruitment procedure, job description, package (CTC) offered, place of posting, allowances & other bonuses.</li>
      <li>JD’s can be sent either by post or email to Training and Placement Cell, GVR&S College of Engineering and Technology, Guntur, AP (Placements@gvrands.com).</li>
      <li>Slot for the company's recruitment visit is decided upon a mutual agreement.</li>
      <li>If the company is interested in conducting a Pre-Placement Talk (PPT), they can send a request along with preferred dates.</li>
    </ol>
  </div>
  <div className="mt-6">
    <h2 class="text-xl font-bold text-black-600 mt-5">Selection</h2>
    <ol class="text-gray-600 text-base mt-2 list-disc list-inside">
      <li>The JD is made available online to eligible students, along with any other information furnished by the company.</li>
      <li>Interested and eligible students (as per the criteria specified by the organizations) show their willingness to appear for the recruitment process. Verified resumes of such students become available to the company.</li>
      <li>Resumes of the students are made available before the visit of the company/organization.</li>
    </ol>
  </div>
</div>

`,
    },
    {
      id: "Gallery",
      label: "Placements Gallery",
      content: `<div class="flex flex-col items-center justify-center bg-white p-6">
 
  <div class="grid grid-cols-3 gap-6">
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/1-2-272x182.jpeg" alt="Placement Activity 1" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/2-1-272x182.jpeg" alt="Placement Activity 2" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/3-1-272x182.jpeg" alt="Placement Activity 3" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/P5-272x182.jpg" alt="Placement Activity 4" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/P9-272x182.jpg" alt="Placement Activity 5" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/P7-272x182.jpg" alt="Placement Activity 6" class="rounded-lg shadow-md w-full h-auto" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/P11-272x182.jpg" alt="Placement Activity 7" class="rounded-lg shadow-md w-full h-auto" />
  </div>
</div>

<div class="flex flex-col items-center justify-center bg-white p-6">
  <h2 class="text-2xl font-bold text-black mb-6">PLACEMENT ACTIVITIES</h2>
  <div class="grid grid-cols-2 gap-6 w-full">
    <img src="https://gvrs.ac.in/wp-content/uploads/2023/12/IMG-20231220-WA0016.jpg" alt="Placement Activity 1" class="rounded-lg shadow-md w-full h-64 object-cover" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2023/12/IMG-20231220-WA0013.jpg" alt="Placement Activity 2" class="rounded-lg shadow-md w-full h-64 object-cover" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/placement3.jpg" alt="Placement Activity 3" class="rounded-lg shadow-md w-full h-64 object-cover" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/placement5.jpg" alt="Placement Activity 4" class="rounded-lg shadow-md w-full h-64 object-cover" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/placement6.jpg" alt="Placement Activity 5" class="rounded-lg shadow-md w-full h-64 object-cover" />
    <img src="https://gvrs.ac.in/wp-content/uploads/2020/10/placemnet1.jpg" alt="Placement Activity 6" class="rounded-lg shadow-md w-full h-64 object-cover" />
  </div>
</div>




`,
    },

    {
      id: "Program",
      label: "Meet Industry Program",
      content: `
      <h2 class="text-2xl font-bold text-red-600 text-left mb-6 p-6">INDUSTRIAL VISIT</h2>

<div class="flex flex-col items-center justify-center bg-white p-6">
  <div>
    <img src="https://gvrs.ac.in/wp-content/uploads/2023/09/insvisit.jpg" alt="Placement Activity 1" class="rounded-lg shadow-md w-full h-auto object-cover" />
 
  </div>
</div>
`,
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
