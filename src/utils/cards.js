import { Activities, Biology, Chemistry, English, Geography, History, Maths, Physics } from "../assets/svg/Subjects";
import {
  Book,
  Calculator,
  FlaskRoundIcon as Flask,
  GraduationCap,
  Leaf,
  Globe2,
  Atom,
  Users,
  ArrowUpRight,
  Globe,
} from "lucide-react"

const subjects = [
  {
    name: "Activities",
    description: "Engage in extracurricular and group learning",
    courses: 67,
    icon: <Users />,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-900/30",
    svg: <Users />,
  },
  {
    name: "English",
    description: "Improve language skills, literature, and writing",
    courses: 98,
    icon: <Book />,
    iconColor: "text-red-400",
    bgColor: "bg-red-900/30",
    svg: <Book />,
  },
  {
    name: "History",
    description: "Explore past events, civilizations, and cultures",
    courses: 76,
    icon: <GraduationCap />,
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-900/30",
    svg: <GraduationCap />,
  },
  {
    name: "Geography",
    description: "Study Earth’s landscapes, environments, and places",
    courses: 85,
    icon: <Globe />,
    iconColor: "text-teal-400",
    bgColor: "bg-teal-900/30",
    svg: <Globe />,
  },
   {
    name: "Science",
    description: "Understand chemical reactions and properties",
    courses: 92,
    icon: <Atom />,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-900/30",
    svg: <Atom />,
  },
  {
    name: "Maths",
    description: "Learn algebra, calculus, and problem-solving",
    courses: 112,
    icon: <Calculator />,
    iconColor: "text-green-400",
    bgColor: "bg-green-900/30",
    svg: <Calculator />,
  },


//  {
//    name: "Biology",
//    description: "Study living organisms and their functions",
//    courses: 104,
//    icon: <Leaf />,
//    iconColor: "text-green-500",
//    bgColor: "bg-green-900/30",
//    svg: <Leaf />,
//  },
//  {
//    name: "Physics",
//    description: "Explore the laws of nature and motion",
//    courses: 99,
//    icon: <ArrowUpRight />,
//    iconColor: "text-indigo-400",
//    bgColor: "bg-indigo-900/30",
//    svg: <ArrowUpRight />,
//  },

];

export { subjects}