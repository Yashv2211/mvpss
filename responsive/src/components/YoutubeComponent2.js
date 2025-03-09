import { useState } from 'react';
import ReactPlayer from 'react-player';
import { ChevronLeft, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import YouTube from 'react-youtube';


export default function YoutubeComponent2() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = 'LjWNW9o9Bqs'; // e.g., "n8Q9qeiiU_k"
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
                <button
                                    onClick={() => navigate('/subjects2.0')}
                                    className='flex items-center relative z-[99] text-lg text-gray-500 underline cursor-pointer my-4'
                                >
                                    <ChevronLeft className="mr-2" />Subjects
                </button>
                <h2 className="text-5xl font-bold mb-6">Non Cooperation Movement</h2>
                <p className="text-gray-400 text-xl mb-6">Step into the era when Indians united to reject British rule through non-violent resistance. Learn how boycotts, protests, and self-reliance became the foundation of India's fight for independence.</p>

                <div className="flex justify-center items-center w-full">
                                           <YouTube videoId={videoId} opts={opts} />

                </div>
                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl ">Launched in 1920, the Non-Cooperation Movement urged Indians to boycott British institutions, goods, and services. Led by Mahatma Gandhi, it became a mass movement, uniting people across the country in peaceful resistance. Though suspended after the Chauri Chaura incident in 1922, it laid the foundation for future struggles against colonial rule.</p>

            </div>
        </div>
    );
}