import { ConvAI } from "../AI/AiAgent";
import StarBackground from "../StarBackground";

export default function RootLayout() {
  return (
    <div className="relative h-full">
      <StarBackground  position="absolute"/>
      <div
        className="relative z-10 flex flex-col h-full justify-center items-center"
        style={{ height: "100%" }}
      >
        <ConvAI />
      </div>
    </div>
  );
}
