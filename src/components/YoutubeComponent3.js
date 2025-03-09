import { useState } from 'react';
import ReactPlayer from 'react-player';
import { ChevronLeft, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import YouTube from 'react-youtube';


export default function YoutubeComponent3() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = 'n8Q9qeiiU_k'; // e.g., "n8Q9qeiiU_k"
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
                <h2 className="text-5xl font-bold mb-6">Civil Disobedience Movement</h2>
                <p className="text-gray-400 text-xl mb-6">Discover the powerful movement that shook British rule—when ordinary Indians defied unjust laws with peaceful resistance. Explore key events, bold leaders, and the unwavering spirit that led India closer to freedom.</p>

                <div className="flex justify-center items-center w-full">
                                            <YouTube videoId={videoId} opts={opts} />

                </div>
                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl ">The Civil Disobedience Movement, starting with the historic Salt March in 1930, marked a direct challenge to British laws. Indians across the country defied unjust colonial policies by refusing to pay taxes and participating in protests. This movement intensified the freedom struggle, showcasing India's determination for complete independence.</p>

            </div>
        </div>
    );
}