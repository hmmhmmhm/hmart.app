"use client";

import { useRef } from "react";
import { Application as SplineApplication } from "@splinetool/runtime";
import { CircularProgress } from "@mui/material";
import { useSplineState } from "@/lib/state/spline";
import { PenToolSpline } from "@/components/PenToolSpline";

export default function Home() {
  const splineRef = useRef<SplineApplication | null>(null);
  const splineState = useSplineState();

  return (
    <main className="bg-[#e3efff] size-full mobile-full overflow-hidden">
      <div className="absolute size-full mobile-full flex justify-center items-center">
        {!splineState.isPenToolSplineLoaded && (
          <div className="flex justify-center items-center w-full h-full bg-black">
            <CircularProgress className="text-white" size={64} />
          </div>
        )}
      </div>

      <PenToolSpline splineRef={splineRef} />
    </main>
  );
}
