import Sidebar from "@/components/ui/layout/Sidebar";
import Canvas from "@/components/ui/layout/Canvas";
import Event from "@/components/ui/Event";
import { ColorProvider } from "../context/ColorContext";
import React from "react";
import { ModeSwitcher } from "@/components/ui/ModeSwitcher";

export default function Home() {
  return (
    <ColorProvider>
      <div className="grid grid-cols-12 h-screen">
        <Canvas>
          <Event
            data={{
              name: "Event 1",
              time: "10:00 - 11:00",
              service: "Service 1",
            }}
          />
          <ModeSwitcher className="fixed bottom-8 right-auto left-auto" />
        </Canvas>
        <Sidebar />
      </div>
    </ColorProvider>
  );
}
