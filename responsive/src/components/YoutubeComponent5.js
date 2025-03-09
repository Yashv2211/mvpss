import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ReactPlayer from 'react-player';
import { ChevronLeft } from 'lucide-react';
import YouTube from 'react-youtube';

export default function YoutubeComponent5() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = 'c5uOvJhlS8c'; // e.g., "n8Q9qeiiU_k"
  // Options for the YouTube player
  const opts = {
    height: '630px',
    width: '1000px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
    },
  };

    return (
        <div className="w-full h-full bg-black rounded-lg shadow-lg text-white py-6 overflow-y-auto custom-scrollbar">
            <div className="w-[70%] mx-auto flex flex-col gap-2">
                {/* Navigate back to /subjects2.0 when clicked */}
                <button
                                    onClick={() => navigate('/subjects2.0')}
                                    className='flex items-center relative z-[99] text-lg text-gray-500 underline cursor-pointer my-4'
                                >
                                    <ChevronLeft className="mr-2" />Subjects
                </button>

                <h2 className="text-5xl font-bold mb-6">The Frozen Abyss: A Desert’s Hidden Secret</h2>
                <p className="text-gray-400 text-xl mb-6">
                </p>

                <div className="flex justify-center items-center w-full">
                        <YouTube videoId={videoId} opts={opts} />
                </div>

                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl">
                Deep within the scorching desert, where the sun blazes mercilessly, explorers Alex and Lina stumble upon an impossible discovery—an ice-filled cavern, hidden in the canyon’s depths. As they venture inside, they uncover a breathtaking frozen world, defying the laws of nature. What mysterious forces keep this ice intact despite the desert heat? Could this natural phenomenon unlock secrets about climate change, ancient ecosystems, or even life on other planets? Join us as we unravel the chilling mysteries of The Frozen Abyss. </p>
            </div>
        </div>
    );
}
