import { ScienceConvAI } from "../AI/ScienceAiAgent";
import StarBackground from "../StarBackground.js";

export default function RootLayout1() {
  return (
    <div className="relative h-full">
      <StarBackground  position="absolute"/>
      <div
        className="relative z-10 flex flex-col h-full justify-center items-center"
        style={{ height: "100%" }}
      >
        <ScienceConvAI />
      </div>
    </div>
  );
}
