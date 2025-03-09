import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ReactPlayer from 'react-player';
import { ChevronLeft } from 'lucide-react';
import YouTube from 'react-youtube';

export default function YoutubeComponent4() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = 'R5C3FbelHG0'; // e.g., "n8Q9qeiiU_k"
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

                <h2 className="text-5xl font-bold mb-6">Matter in our Surroundings</h2>
                <p className="text-gray-400 text-xl mb-6">
                Unveiling Matter: The Science of Everything Around Us
                </p>

                <div className="flex justify-center items-center w-full">
                        <YouTube videoId={videoId} opts={opts} />
                </div>

                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl">
                "Unveiling Matter: The Science of Everything Around Us" takes you on a journey through the fundamental building blocks of our universe. From the tiniest particles to the vast states of matter, explore how solids, liquids, and gases interact, change, and shape the world around us. Discover the hidden forces that hold matter together, the mysteries of diffusion, and the surprising ways temperature and pressure influence everything we see and touch. Whether you're a curious learner or a science enthusiast, this episode will change the way you perceive the very fabric of your surroundings!     </p>
            </div>
        </div>
    );
}
