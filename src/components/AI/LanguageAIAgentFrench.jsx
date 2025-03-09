"use client";

import { useState, useCallback } from "react";
import { useConversation } from "@11labs/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import Orb from "../animation/AnimationOrb";
import StarBackground from "../StarBackground";
import { useNavigate } from 'react-router-dom';

export function FrenchAI() {
  const navigate = useNavigate();
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      // Get agent ID from environment variable
      const agentId =  process.env.HISTORY_AGENT_ID; ;
      const apiKey =  process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
      if (!apiKey ) {
        console.error("Agent ID is not defined.");
        return;
      }
      if (!agentId ) {
        console.error("Agent ID is not defined.");
        return;
      }
      await conversation.startSession({ agentId,
      apiKey});
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const endConversation = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error("Failed to end conversation:", error);
    }
  }, [conversation]);

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  return (
    <div className="w-full h-full bg-transparent flex items-center rounded-lg shadow-lg text-white py-6 overflow-y-auto custom-scrollbar relative">
      <StarBackground position="absolute" />
      <div className="w-[70%] mx-auto flex flex-col gap-2">
      <button
                          onClick={() => navigate('/subjects2.0')}
                          className='flex items-center relative z-[99] text-lg text-gray-500 underline cursor-pointer my-4'
                      >
                          <ChevronLeft className="mr-2" />Subjects
      </button>       
        <h2 className="text-5xl font-bold mb-6">Hi, I am Talkative</h2>
        <p className="text-gray-400 text-2xl mb-12">
          Engage in an interactive French AI teacher Activity Click{" "}
          <span className="text-white">Start Conversation</span> to begin!
        </p>
        <div className="flex justify-center items-center w-full">
          <Card className="rounded-3xl bg-gray-900 shadow-md w-full max-w-md">
            <CardContent className="p-6">
              <CardHeader>
                <CardTitle className="text-center text-white text-2xl font-semibold">
                  {isConnected
                    ? isSpeaking
                      ? "Agent is speaking"
                      : "Agent is listening"
                    : "Disconnected"}
                </CardTitle>
              </CardHeader>
              <div className="flex flex-col gap-y-6 items-center text-center">
                <Orb />
                <Button
                  variant="outline"
                  className="rounded-full text-lg px-6 py-3 text-white border-gray-500 hover:bg-gray-700"
                  size="lg"
                  disabled={isConnected}
                  onClick={startConversation}
                >
                  Start conversation
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full text-lg px-6 py-3 text-white border-gray-500 hover:bg-gray-700"
                  size="lg"
                  disabled={!isConnected}
                  onClick={endConversation}
                >
                  End conversation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-center text-gray-400 text-2xl mb-6 mt-12">
          <span className="font-bold text-white">Note: </span>
          Once you're done, make sure to click on{" "}
          <span className="text-white">End Conversation</span> to finish your discussion.
        </p>
      </div>
    </div>
  );
}

export default FrenchAI;
