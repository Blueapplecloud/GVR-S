import React, { useState } from 'react';

function DVV() {
  const [activeTab, setActiveTab] = useState('Extended Profile');
  const tabs = [
    {
      name: 'Extended Profile',
      data: [
        {
          title: '1: Students',
          link: "Link",
          rows: [
            { label: '1.1 – Proof', link: 'https://gvrs.ac.in/DVV/EXTENDED%20PROFILE/1.1/1.1%20INDEX.pdf' }
          ]
        },
        {
          title: '2: Teachers',
          link: "Link",
          rows: [
            { label: '2.1 – Proof 1', link: "https://gvrs.ac.in/DVV/EXTENDED%20PROFILE/2.1/2.1%20INDEX.pdf"  },
            { label: '2.1 – Proof 2', link: "https://gvrs.ac.in/DVV/EXTENDED%20PROFILE/2.2/2.2%20index.pdf"  },
          ]
        },
        {
          title: '3: Institution',
          link: "Link",
          rows: [
            { label: '3.1 – Proof', link: "https://gvrs.ac.in/DVV/EXTENDED%20PROFILE/3.1/3.1%20INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 1',
      data: [
        {
          title: 'Criterion 1 – Curricular Aspects',
          link: "Link",
          rows: []
        },
        {
          title: '1.2 Academic Flexibility',
          rows: [
            { label: 'Metric: 1.2.1 – Proof', link: "https://gvrs.ac.in/DVV/C1/1.2.1/1.2.1 INDEX.pdf"  },
            { label: 'Metric: 1.2.2 – Proof', link: "https://gvrs.ac.in/DVV/C1/1.2.2/1.2.2 INDEX.pdf"  },
          ]
        },
        {
          title: '1.3 Curriculum Enrichment',
          link: "Link",
          rows: [
            { label: 'Metric: 1.3.2 – Proof', link: "https://gvrs.ac.in/DVV/C1/1.3.2/1.3.2 index.pdf"  },
          ]
        },
        {
          title: '1.4 Feedback System',
          link: "Link",
          rows: [
            { label: 'Metric: 1.4.1 – Proof', link: "https://gvrs.ac.in/DVV/C1/1.4.1/1.4.1 INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 2',
      data: [
        {
          title: 'Criterion 2 – Teaching-learning and Evaluation',
          link: "Link",
          rows: []
        },
        {
          title: '2.1: Student Enrollment and Profile',
          rows: [
            { label: 'Metric: 2.1.1 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.1.1/2.1.1 INDEX.pdf"  },
            { label: 'Metric: 2.1.2 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.1.2/2.1.2 INDEX.pdf"  },
          ]
        },
        {
          title: '2.2: Student Teacher Ratio',
          link: "Link",
          rows: [
            { label: 'Metric: 2.2.1 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.2.1/2.2.1 index.pdf"  },
          ]
        },
        {
          title: '2.4: Teacher Profile and Quality',
          link: "Link",
          rows: [
            { label: 'Metric: 2.4.1 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.4.1/2.4.1 INDEX.pdf"  },
            { label: 'Metric: 2.4.2 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.4.2/2.4.2 INDEX.pdf"  },
          ]
        },
        {
          title: '2.6: Student Performance and Learning Outcomes',
          link: "Link",
          rows: [
            { label: 'Metric: 2.6.3 – Proof', link: "https://gvrs.ac.in/DVV/C2/2.6.3/2.6.3 INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 3',
      data: [
        {
          title: 'Criterion 3 – Research, Innovation and Extension',
          link: "Link",
          rows: []
        },
        {
          title: '3.1: Resource Mobilization for Research',
          rows: [
            { label: 'Metric: 3.1.1 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.1.1/3.1.1%20INDEX.pdf"  },
          ]
        },
        {
          title: '3.2: Innovation Ecosystem',
          link: "Link",
          rows: [
            { label: 'Metric: 3.2.2 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.2.2/3.2.2%20INDEX.pdf"  },
          ]
        },
        {
          title: '3.3: Research Publications and Awards',
          link: "Link",
          rows: [
            { label: 'Metric: 3.3.1 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.3.1/3.3.1%20INDEX.pdf"  },
            { label: 'Metric: 3.3.2 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.3.2/3.3.2%20INDEX.pdf"  },
          ]
        },
        {
          title: '3.4: Extension Activities',
          link: "Link",
          rows: [
            { label: 'Metric: 3.4.3 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.4.3/3.4.3%20INDEX.pdf"  },
          ]
        },
        {
          title: '3.5: Collaboration',
          link: "Link",
          rows: [
            { label: 'Metric: 3.5.1 – Proof', link: "https://gvrs.ac.in/DVV/C3/3.5.1/3.5.1%20INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 4',
      data: [
        {
          title: 'Criterion 4 – Infrastructure and Learning Resources',
          link: "Link",
          rows: []
        },
        {
          title: '4.1 Physical Facilities',
          rows: [
            { label: 'Metric: 4.1.2 – Proof', link: "https://gvrs.ac.in/DVV/C4/4.1.2/4.1.2%20INDEX.pdf"  },
          ]
        },
        {
          title: '4.3: IT Infrastructure',
          link: "Link",
          rows: [
            { label: 'Metric: 4.3.2 – Proof', link: "https://gvrs.ac.in/DVV/C4/4.3.2/4.3.2%20INDEX.pdf"  },
          ]
        },
        {
          title: '4.4: Maintenance of Campus Infrastructure',
          link: "Link",
          rows: [
            { label: 'Metric: 4.4.1 – Proof', link: "https://gvrs.ac.in/DVV/C4/4.4.1/4.4.1%20INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 5',
      data: [
        {
          title: 'Criterion 5 – Student Support and Progression',
          link: "Link",
          rows: []
        },
        {
          title: '5.1: Student Support',
          rows: [
            { label: 'Metric: 5.1.1 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.1.1/5.1.1%20INDEX.pdf"  },
            { label: 'Metric: 5.1.2 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.1.2/5.1.2%20INDEX.pdf"  },
            { label: 'Metric: 5.1.3 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.1.3/5.1.3%20index.pdf"  },
            { label: 'Metric: 5.1.4 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.1.4/5.1.4%20index.pdf"  },
          ]
        },
        {
          title: '5.2: Student Progression',
          link: "Link",
          rows: [
            { label: 'Metric: 5.2.1 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.2.1/5.2.1%20INDEX%20FILE.pdf"  },
            { label: 'Metric: 5.2.2 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.2.2/5.2.2%20index.pdf"  },
          ]
        },
        {
          title: '5.3: Student Participation and Activities',
          link: "Link",
          rows: [
            { label: 'Metric: 5.3.1 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.3.1/5.3.1%20index.pdf"  },
            { label: 'Metric: 5.3.2 – Proof', link: "https://gvrs.ac.in/DVV/C5/5.3.2/5.3.2%20index.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 6',
      data: [
        {
          title: 'Criterion 6 – Governance, Leadership and Management',
          link: "Link",
          rows: []
        },
        {
          title: '6.2: Strategy Development and Deployment',
          rows: [
            { label: 'Metric: 6.2.2 – Proof', link: "https://gvrs.ac.in/DVV/C6/6.2.2%20new/6.2.2%20INDEX.pdf"  },
          ]
        },
        {
          title: '6.3: Faculty Empowerment Strategies',
          link: "Link",
          rows: [
            { label: 'Metric: 6.3.2 – Proof', link: "https://gvrs.ac.in/DVV/C6/6.3.2/6.3.2%20index.pdf"  },
            { label: 'Metric: 6.3.3 – Proof', link: "https://gvrs.ac.in/DVV/C6/6.3.3/LETTER%20HEAD.pdf"  },
          ]
        },
        {
          title: '6.5: Internal Quality Assurance System',
          link: "Link",
          rows: [
            { label: 'Metric: 6.5.2 – Proof', link: "https://gvrs.ac.in/DVV/C6/6.5.2/6.5.2%20INDEX.pdf"  },
          ]
        },
      ]
    },
    {
      name: 'Criterion 7',
      data: [
        {
          title: 'Criterion 7 – Institutional Values and Best Practices',
          link: "Link",
          rows: []
        },
        {
          title: '7.1: Institutional Values and Social Responsibilities',
          rows: [
            { label: 'Metric: 7.1.2 – Proof', link: "https://gvrs.ac.in/DVV/C7/7.1.2/7.1.2%20INDEX.pdf"  },
            { label: 'Metric: 7.1.3 – Proof', link: "https://gvrs.ac.in/DVV/C7/7.1.3/7.1.3%20INDEX.pdf"  },
          ]
        },
      ]
    },
  ];

  const currentTab = tabs.find(t => t.name === activeTab);
  const handleDownload = (event) => {
    const fileType = event.currentTarget.href.split('.').pop().toLowerCase();
    // console.log("File type:", fileType);
    if (fileType === 'xlsx') {
      const confirmed = window.confirm(`Are you sure you want to download the ${fileType} file?`);
      if (!confirmed) {
        event.preventDefault();
      }
    }
  };
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-lg rounded-md">
      {/* Tab Nav */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="-mb-px flex flex-nowrap space-x-4 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.name
                  ? 'border-primaryColor text-primaryColor'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {currentTab ? (
          <>
            <h3 className="text-xl font-semibold text-Red mb-4">
             DVV - {currentTab.name}
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                {/* We’ll loop each “section” (1.1, 1.2, …) as its own thead + tbody */}
                {currentTab.data.map((section, si) => (
                  <React.Fragment key={si}>
                    <thead>
                      <tr className="bg-gray-100 hover:bg-primaryColor transition">
                        <th
                          colSpan={1}
                          className="px-5 py-3 border-gray-300 text-left text-sm font-bold text-gray-800"
                        >
                          {section.title}
                        </th>
                        <th
                          colSpan={1}
                          className="px-5 py-3 border-gray-300 text-left text-sm font-bold text-gray-800"
                        >
                          {section.link}
                        </th>
                      </tr>
                      <tr>
                      </tr>
                    </thead>

                    <tbody>
                      {section.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className="border-b border-gray-300 hover:bg-primaryColor transition"
                        >
                          <td className="px-5 py-2 border-r border-gray-300 text-sm text-gray-700 hover:text-white transition">
                            {row.label}
                          </td>
                          <td className="px-5 py-2 border-r border-gray-300 text-sm text-gray-700 hover:text-white transition">
                          <a
                          href={row.link}
                          className="text-blue-500 no-underline hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleDownload}
                        >
                          Click Here
                        </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                ))}
              </table>
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default DVV;
