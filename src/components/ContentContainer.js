import { Route, Routes } from "react-router-dom";
import YoutubeComponent from "./YoutubeComponent";
import YoutubeComponent2 from "./YoutubeComponent2";
import YoutubeComponent3 from "./YoutubeComponent3";
import Sidebar from "./Sidebar.js";
import UpdatedSidebar from "./UpdatedSidebar.js"
import RootLayout from "./root/RootAi";
import ReciteLayout from "./root/RootRecite";

export default function ContentContainer() {
    return (
        <>
            <UpdatedSidebar />
            <main className="md:left-20 lg:left-80 md:w-[calc(100%)] lg:w-[calc(100%-320px)] fixed inset-y-0 bg-gray-950 p-4 text-white z-2 overflow-y-auto">
                <Routes>
                    <Route path="/youtube" element={<YoutubeComponent />} />
                    <Route path="/youtube2" element={<YoutubeComponent2 />} />
                    <Route path="/youtube3" element={<YoutubeComponent3 />} />
                    <Route path="/ai" element={<RootLayout />} />
                    {/* Create Routes for conversational ai below */}
                </Routes>
            </main>
        </>
            
    );
}
//                    <Route path="/recite" element={<ReciteLayout />} />
