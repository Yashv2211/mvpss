import { Route, Routes } from "react-router-dom";
import YoutubeComponent4 from "./YoutubeComponent4";
import YoutubeComponent5 from "./YoutubeComponent5";
import YoutubeComponent6 from "./YoutubeComponent6";
import Sidebar from "./Sidebar.js";
import UpdatedSidebar2 from "./UpdatedSidebar2.js"
import RootLayout1 from "./root/RootAi2";

export default function ContentContainer1() {
    return (
        <>
            <UpdatedSidebar2 />
            <main className="md:left-20 lg:left-80 md:w-[calc(100%)] lg:w-[calc(100%-320px)] fixed inset-y-0 bg-gray-950 p-4 text-white z-2 overflow-y-auto">
                <Routes>
                    <Route path="/youtube4" element={<YoutubeComponent4 />} />
                    <Route path="/youtube5" element={<YoutubeComponent5 />} />
                    <Route path="/youtube6" element={<YoutubeComponent6 />} />
                    <Route path="/ai" element={<RootLayout1 />} />
                    {/* Create Routes for conversational ai below */}
                </Routes>
            </main>
        </>
            
    );
}