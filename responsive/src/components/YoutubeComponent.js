import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ReactPlayer from 'react-player';
import { ChevronLeft } from 'lucide-react';
import YouTube from 'react-youtube';

export default function YoutubeComponent() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = 'RD5Q-GVd5bs'; // e.g., "n8Q9qeiiU_k"
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

                <h2 className="text-5xl font-bold mb-6">Nationalism in India</h2>
                <p className="text-gray-400 text-xl mb-6">
                    Experience the stirring journey of Indian nationalism—a movement that united diverse communities in the fight for freedom. Explore key events, inspiring leaders, and the enduring legacy that shaped modern India.
                </p>

                <div className="flex justify-center items-center w-full">
                        <YouTube videoId={videoId} opts={opts} />
                </div>

                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl">
                    The rise of nationalism in India was fueled by colonial oppression and the growing demand for self-rule. Inspired by leaders like Mahatma Gandhi, people from all walks of life united to challenge British rule. Movements like Non-Cooperation and Civil Disobedience played a crucial role in shaping India's path to independence.     </p>
            </div>
        </div>
    );
}
