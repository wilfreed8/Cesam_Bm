import { useEffect, useState } from "react";

function getDeviceType(width: number) {
  if (width < 640) return "mobile";
  if (width >= 640 && width < 1024) return "tablet";
  return "desktop";
}

export function useDeviceType() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      setDevice(getDeviceType(width));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
