"use client";
import React from "react";
import Sidebar from "@/components/ui/layout/Sidebar";
import Canvas from "@/components/ui/layout/Canvas";
import Event from "@/components/ui/Event";
import ColorContext, { ColorProvider } from "../context/ColorContext";
import { ModeSwitcher } from "@/components/ui/ModeSwitcher";

export default function Home() {
  const { activeColor } = React.useContext(ColorContext);
  return (
    <div className="grid grid-cols-12 h-screen">
      <Canvas>
        <Event
          customColor={activeColor.custom}
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
  );
}
