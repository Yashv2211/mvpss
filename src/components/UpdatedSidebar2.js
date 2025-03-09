import React, { useState } from "react";
import {
  GraduationCap,
} from "lucide-react"
import {
  ChevronRight,
  Search,
  Video,
  Mic,
  Headphones,
  ExternalLink,
  Scroll,
  ChevronDown,
} from "lucide-react";
import "./Sidebar.css";
import {useNavigate} from "react-router-dom" // Import custom CSS for the scrollbar

export default function Sidebar2() {
  // State to track the active module by title
  const [activeModule, setActiveModule] = useState('Module One');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const navigate = useNavigate();

  const toggleModule = (title) => {
    setActiveModule((prev) => (prev === title ? null : title));
  };

  return (
    <div className="fixed inset-y-0 left-0 h-[calc(100vh-1px)] w-[320px] bg-black border-r border-gray-800 p-6">
      <div className="flex items-center gap-3 pb-6">
        <div className="rounded-lg p-1.5">
          <div className="h-6 w-6 rounded-md bg-black" />
        </div>
        {/* Optionally add a logo/text here */}
      </div>

      <div className="relative w-full mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          className="w-full pl-10 py-2 bg-gray-800 text-white text-base rounded-md border border-gray-700 focus:outline-none focus:border-gray-600"
          placeholder="Search"
        />
      </div>

      <button className="text-lg mb-6 w-full flex items-center justify-between bg-gray-800 px-2 text-white hover:bg-gray-700/20 py-2 text-base rounded-md transition-colors">
        Science
        <GraduationCap className="h-5 w-5" />
      </button>

      <div className="space-y-8 overflow-y-scroll custom-scrollbar max-h-[calc(100vh-220px)]">
        <div>
          <h2 className="mb-3 px-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
            Chapters
          </h2>
          {/* Scrollable Module Section with custom WebKit scrollbar */}
          <div className="space-y-1 pr-2">
            <ModuleItem
              title="Matter in our surrounding"
              active={activeModule === "Module One"}
              expanded={activeModule === "Module One"}
              onClick={() => toggleModule("Module One")}
            >
             <LessonItem
                title="Interactive AI"
                type="podcast"
                onClick={() => navigate("/content/science/ai")}
                isSelected={selectedLesson === "Introduction to design fundamentals"}
              />
              <LessonItem
                title="Podcast"
                duration="10:57"
                type="story"
                onClick={() => navigate("/content/science/youtube4")}
                isSelected={selectedLesson === "Understanding design layouts"}
              />
              <LessonItem
                title="The Frozen Abyss: A Desert’s Hidden Secret"
                duration="5:11"
                type="video"
                onClick={() =>  navigate("/content/science/youtube5")}
                isSelected={selectedLesson === "Foundations in design fundamentals"}
              />
              <LessonItem
                title="Boiling River"
                duration="4:49"
                type="video"
                onClick={() =>  navigate("/content/science/youtube6")}
                isSelected={selectedLesson === "Psychology in design fundamentals"}
              />
            </ModuleItem>
            <ModuleItem
              title="Chapter Two"
              active={activeModule === "Module Two"}
              expanded={activeModule === "Module Two"}
              onClick={() => toggleModule("Module Two")}
            >
              <LessonItem
                title="Introduction to design fundamentals"
                duration="6:18"
                type="video"
              />
              <LessonItem
                title="Foundations in design fundamentals"
                duration="2:02"
                type="podcast"
              />
              <LessonItem
                title="Psychology in design fundamentals"
                duration="3:56"
                type="story"
              />
            </ModuleItem>
            <ModuleItem
              title="Chapter Three"
              active={activeModule === "Module Three"}
              expanded={activeModule === "Module Three"}
              onClick={() => toggleModule("Module Three")}
            >
              <LessonItem
                title="Introduction to design fundamentals"
                duration="6:18"
                type="video"
              />
              <LessonItem
                title="Foundations in design fundamentals"
                duration="2:02"
                type="podcast"
              />
              <LessonItem
                title="Psychology in design fundamentals"
                duration="3:56"
                type="story"
              />
            </ModuleItem>
            <ModuleItem
              title="Chapter Four"
              active={activeModule === "Module Four"}
              expanded={activeModule === "Module Four"}
              onClick={() => toggleModule("Module Four")}
            >
              <LessonItem
                title="Introduction to design fundamentals"
                duration="6:18"
                type="video"
              />
              <LessonItem
                title="Foundations in design fundamentals"
                duration="2:02"
                type="podcast"
              />
              <LessonItem
                title="Psychology in design fundamentals"
                duration="3:56"
                type="story"
              />
            </ModuleItem>
          </div>
        </div>
        <div>
          <h2 className="mb-3 px-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
            Links
          </h2>
          <div className="space-y-1 pr-2 ml-2">
            <button className="w-full flex items-center justify-between px-2 text-gray-400 hover:bg-gray-700/50 py-2 text-base rounded-md transition-colors">
              Youtube
              <ExternalLink className="h-5 w-5" />
            </button>
            <button className="mb-4 w-full flex items-center justify-between px-2 text-gray-400 hover:bg-gray-700/50 py-2 text-base rounded-md transition-colors">
              Google
              <ExternalLink className="h-5 w-5" />
            </button>
            <button className="mb-4 w-full flex items-center justify-between px-2 text-gray-400 hover:bg-gray-700/50 py-2 text-base rounded-md transition-colors">
              Chatbot
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div>
          <h2 className="mb-3 px-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
            RESOURCES
          </h2>
          <div className="space-y-1 pr-2 ml-2">
            <button className="mb-4 w-full flex items-center justify-between px-2 text-gray-400 hover:bg-gray-700/50 py-2 text-base rounded-md transition-colors">
              Quiz
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleItem({ title, children, active, expanded, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base transition-colors ${
          active
            ? "bg-gray-700 text-white"
            : "text-gray-400 hover:bg-gray-700 hover:text-white"
        }`}
      >
        {title}
        {expanded ? (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out mt-1 pl-3 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function LessonItem({ title, duration, type, onClick, isSelected }) {
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4 text-gray-400" />;
      case "podcast":
        return <Mic className="h-4 w-4 text-gray-400" />;
      case "story":
        return <Headphones className="h-4 w-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base transition-colors ${
        isSelected ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <span className="flex-1 text-left truncate mr-3">{title}</span>
      <div className="flex items-center shrink-0 space-x-3">
        <span className="text-sm tabular-nums">{duration}</span>
        {getIcon()}
      </div>
    </button>
  );
}


function LinkItem({ title }) {
  return (
    <a
      href="#"
      className="flex items-center justify-between rounded-md px-3 py-2 text-base text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
    >
      {title}
      <ExternalLink className="h-5 w-5" />
    </a>
  );
}