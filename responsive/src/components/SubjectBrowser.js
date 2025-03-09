//"use client";
//
//import { useRef, useState, useEffect, useCallback } from "react";
//import { ChevronLeft, ChevronRight } from "lucide-react";
//import { subjects } from "../utils/cards";
//import { Link } from "react-router-dom";
//
//export default function SubjectBrowser() {
//  const scrollRef = useRef(null);
//  const [canScrollLeft, setCanScrollLeft] = useState(false);
//  const [canScrollRight, setCanScrollRight] = useState(false);
//  const [isScrolling, setIsScrolling] = useState(false);
//  let scrollTimeout;
//
//  const checkScroll = useCallback(() => {
//    if (scrollRef.current) {
//      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//      setCanScrollLeft(scrollLeft > 0);
//      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//    }
//  }, []);
//
//  useEffect(() => {
//    checkScroll();
//    window.addEventListener("resize", checkScroll);
//    return () => window.removeEventListener("resize", checkScroll);
//  }, [checkScroll]);
//
//  const scroll = (direction) => {
//    if (scrollRef.current) {
//      const scrollAmount = direction === "left" ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
//      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//    }
//  };
//
//  const handleScroll = () => {
//    checkScroll();
//    setIsScrolling(true);
//    clearTimeout(scrollTimeout);
//    scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
//  };
//
//  return (
//    <section className="w-full px-6 mt-16 relative">
//      <h2 className="text-4xl font-bold mb-8">Browse by Subject</h2>
//      <div className="relative">
//        <div
//          ref={scrollRef}
//          className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide"
//          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//          onScroll={handleScroll}
//        >
//          {subjects.map((subject, index) => (
//          <Link className="block w-full h-full" to={`/content/youtube`} key={index}>
//            <div
//              key={index}
//              className="bg-gray-900 p-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 flex-shrink-0"
//              style={{ width: "calc(16.666% - 1.25rem)" }}
//            >
//              <div className="flex items-center mb-6">
//                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${subject.bgColor} ${subject.iconColor}`}>
//                  {subject.icon}
//                </div>
//                <h3 className="text-2xl font-bold ml-4">{subject.name}</h3>
//              </div>
//              <p className="text-gray-300 mb-6 text-lg">{subject.description}</p>
//              <p className="text-lg text-gray-400">{subject.courses} chapters</p>
//            </div>
//            </Link>
//          ))}
//        </div>
//        {canScrollLeft && (
//          <button
//            onClick={() => scroll("left")}
//            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-200 z-10"
//          >
//            <ChevronLeft className="w-8 h-8 text-white" />
//          </button>
//        )}
//        {canScrollRight && (
//          <button
//            onClick={() => scroll("right")}
//            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-200 z-10"
//          >
//            <ChevronRight className="w-8 h-8 text-white" />
//          </button>
//        )}
//        <div
//          className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 transition-opacity duration-300 ${isScrolling ? "opacity-100" : "opacity-0"}`}
//        >
//          <div
//            className="h-full bg-white"
//            style={{
//              width: scrollRef.current
//                ? `${(scrollRef.current.clientWidth / scrollRef.current.scrollWidth) * 100}%`
//                : "0%",
//              transform: scrollRef.current
//                ? `translateX(${(scrollRef.current.scrollLeft / scrollRef.current.scrollWidth) * 100}%)`
//                : "translateX(0%)",
//            }}
//          ></div>
//        </div>
//      </div>
//    </section>
//  );
//}
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { subjects } from "../utils/cards";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom" // Import custom CSS for the scrollbar


export default function SubjectBrowser() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;
  const navigate = useNavigate();


  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    checkScroll();
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
  };

  function redirect(subject){
    const subjectRoutes = {
        History: "/content/ai",
        Science: "/content/science/ai",
        Activities: "/content/activities/recite",
      };
      console.log(subject.name);
      return subject.name?navigate(subjectRoutes[subject.name]):navigate("/content/history");
  }

  return (
    <section className="w-full px-6 mt-16 relative">
      <h2 className="text-4xl font-bold mb-8">Browse by Subject</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          {subjects.map((subject, index) => (
            <div  onClick={() => redirect(subject)} key={index} className="flex-shrink-0" style={{ width: "calc(16.666% - 1.25rem)" }}>
                <div
                  className="bg-gray-900 p-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 h-full cursor-pointer"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${subject.bgColor} ${subject.iconColor}`}>
                      {subject.icon}
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{subject.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{subject.description}</p>
                  <p className="text-lg text-gray-400">{subject.courses} chapters</p>
                </div>
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 transition-opacity duration-300 ${isScrolling ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="h-full bg-white"
            style={{
              width: scrollRef.current
                ? `${(scrollRef.current.clientWidth / scrollRef.current.scrollWidth) * 100}%`
                : "0%",
              transform: scrollRef.current
                ? `translateX(${(scrollRef.current.scrollLeft / scrollRef.current.scrollWidth) * 100}%)`
                : "translateX(0%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
