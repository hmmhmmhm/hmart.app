"use client";

import Spline from "@splinetool/react-spline";
import { splineActions } from "@/lib/state/spline";
import { Application as SplineApplication } from "@splinetool/runtime";

export interface PenToolSplineProps {
  splineRef: React.MutableRefObject<SplineApplication | null>;
}

export const PenToolSpline = (props: PenToolSplineProps) => {
  const { splineRef } = props;
  return (
    <Spline
      scene="/pen-tool.splinecode"
      className="absolute"
      onLoad={(spline: SplineApplication) => {
        if (spline) splineRef.current = spline;
      }}
      onMouseMove={() => {
        splineActions.setIsPenToolSplineLoaded(true);
      }}
    />
  );
};
