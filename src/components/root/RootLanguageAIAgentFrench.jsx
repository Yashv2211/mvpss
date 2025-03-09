import { FrenchAI } from "../AI/LanguageAIAgentFrench";
import StarBackground from "../StarBackground.js";

export default function FrenchLayout() {
  return (
    <div className="relative h-full">
      <StarBackground  position="absolute"/>
      <div
        className="relative z-10 flex flex-col h-full justify-center items-center"
        style={{ height: "100%" }}
      >
        <FrenchAI />
      </div>
    </div>
  );
}
