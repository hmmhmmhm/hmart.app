import { proxy, useSnapshot } from "valtio";

export const splineState = proxy({
  isPenToolSplineLoaded: false,
});

export const splineActions = {
  setIsPenToolSplineLoaded: (isPenToolSplineLoaded: boolean) => {
    splineState.isPenToolSplineLoaded = isPenToolSplineLoaded;
  },
};

export const useSplineState = () => useSnapshot(splineState);
