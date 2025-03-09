import SubjectBrowser from "./SubjectBrowser";
import SubjectHero from "./SubjectHero";
import StarBackground from "./StarBackground";

export default function SubjectTwo() {
  return (
    <div className="relative w-full h-full text-white">
      {/* Animated background is now confined to the parent's full height */}
      <StarBackground />
      {/* Main content on top */}
      <div className="relative h-full bg-transparent text-white">
        <div className="pt-14 px-8 flex flex-col items-center h-full overflow-y-auto">
          <SubjectHero />
          <SubjectBrowser />
        </div>
      </div>
    </div>
    );
}