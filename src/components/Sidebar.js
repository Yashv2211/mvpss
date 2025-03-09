// Sidebar.jsx
import React, { useState } from 'react';
import { Bars, Times } from '../assets/svg/SidebarIcons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openChapters, setOpenChapters] = useState({});

  const chapters = [
    {
      title: 'Chapter 1',
      subMenu: ['Introduction', 'Getting Started', 'Basics'],
    },
    {
      title: 'Chapter 2',
      subMenu: ['Advanced Topics', 'Patterns', 'Optimization'],
    },
    {
      title: 'Chapter 3',
      subMenu: ['Deployment', 'Testing', 'Monitoring'],
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubmenuClick = (chapterIndex) => {
    setOpenChapters({});
  };

  return (
    <div className="flex h-full relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 border-r border-white left-0 z-1 transform bg-black text-white transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 w-80' : '-translate-x-full w-20'}`}
      >
        {/* Sidebar Header */}
        <div className="mt-20 flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold whitespace-nowrap">Chapters</h2>
          <div className="flex justify-end w-full">
            {/* Uncomment if you want the button inside header */}
            {/* <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-700"
            >
              <Bars />
            </button> */}
          </div>
        </div>

        {/* Sidebar Content */}
        <nav className="overflow-y-auto h-[calc(100%-150px)]">
          {chapters.map((chapter, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleChapter(index)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
              >
                <span className={`${!isOpen && 'truncate'} text-left`}>
                  {chapter.title}
                </span>
                {(isOpen || openChapters[index]) && (
                  <span
                    className={`transform transition-transform duration-200 ${
                      openChapters[index] ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                )}
              </button>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openChapters[index] && isOpen
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="pl-6 bg-gray-900">
                  {chapter.subMenu.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleSubmenuClick(index)}
                      className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 p-2 bg-black text-white rounded-md"
      >
        {isOpen ? <Times /> : <Bars />}
      </button> */}

      {/* Main Content Overlay */}
      {/* {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
        ></div>
      )} */}
    </div>
  );
};

export default Sidebar;