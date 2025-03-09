import { ReciteConvAI } from "../AI/ReciteAiAgent";
import StarBackground from "../StarBackground";

export default function ReciteLayout() {
  return (
    <div className="relative h-full">
      <StarBackground  position="absolute"/>
      <div
        className="relative z-10 flex flex-col h-full justify-center items-center"
        style={{ height: "100%" }}
      >
        <ReciteConvAI />
      </div>
    </div>
  );
}
