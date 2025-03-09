import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ReactPlayer from 'react-player';
import { ChevronLeft } from 'lucide-react';
import YouTube from 'react-youtube';

export default function YoutubeComponent6() {
    const navigate = useNavigate(); // Initialize navigate function
    const videoId = '3MgZ8TUFrNc'; // e.g., "n8Q9qeiiU_k"
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

                <h2 className="text-5xl font-bold mb-6">Boiling River</h2>
                <p className="text-gray-400 text-xl mb-6">
                </p>

                <div className="flex justify-center items-center w-full">
                        <YouTube videoId={videoId} opts={opts} />
                </div>

                <h2 className="text-3xl font-bold mb-3 mt-6">Summary</h2>
                <p className="text-gray-400 text-xl">
                Deep within the Amazon rainforest, archaeologist Maya and her team uncover a phenomenon once thought to be mere legend—a river so hot it boils, hidden within the jungle’s heart. As they investigate its geothermal origins, mineral-rich formations, and heat-thriving microbes, they realize this river holds more than just scientific intrigue—it could offer clues about life beyond Earth. What secrets does this ancient waterway conceal? Join us as we journey into the unknown, where myth meets science in The Boiling River: A Lost Legend Unearthed     </p>
            </div>
        </div>
    );
}
