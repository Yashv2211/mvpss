import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import UpdatedSidebar3 from "./UpdatedSidebar3.js"
import ReciteLayout from "./root/RootRecite";
import DebLayout from "./root/RootDebate.jsx";
import FrenchLayout from "./root/RootLanguageAIAgentFrench.jsx";
import SpanishLayout from "./root/RootLanguageAIAgentSpanish.jsx";
import RecitespeechLayout from "./root/RootRecitespeech.jsx";

export default function ContentContainer2() {
    return (
        <>
            <UpdatedSidebar3 />
            <main className="md:left-20 lg:left-80 md:w-[calc(100%)] lg:w-[calc(100%-320px)] fixed inset-y-0 bg-gray-950 p-4 text-white z-2 overflow-y-auto">
                <Routes>
                    <Route path="/recite" element={<ReciteLayout />} />
                    <Route path="/recitespeech" element={<RecitespeechLayout />} />                    
                    <Route path="/french" element={<FrenchLayout />} />
                    <Route path="/debate" element={<DebLayout />} />
                    <Route path="/spanish" element={<SpanishLayout />} />                  
                    {/* Create Routes for conversational ai below */}
                </Routes>
            </main>
        </>
            
    );
}
//                    <Route path="/science/ai" element={<RootLayout2 />} />
