import { Search } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex-grow flex flex-col justify-center px-6">
      <h1 className="text-6xl font-bold mb-6 text-center">
         EVERY LESSON HAS A VOICE
            <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:0_4px_15px_rgba(255,165,0,0.8)]"> EVERY VOICE TELLS A STORY</span>
      </h1>
      <p className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto text-center">
        Unlock a world of knowledge with immersive podcasts, captivating stories<br/>
                and interactive AI tutors covering every subject.<br/>
                        Experience education redefined.
      </p>
      <div className="flex gap-1 max-w-2xl mx-auto mb-16">
        <input
          placeholder="Search for courses..."
          className="flex-grow bg-gray-900 text-white border-gray-700 rounded-r-none pl-8 rounded-l-xl text-lg py-4"
        />
        <button className="rounded-l-none bg-gray-700 hover:bg-gray-600 rounded-r-xl text-lg py-4 px-8">
          <Search />
        </button>
      </div>
    </main>
  );
}