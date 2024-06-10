import { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  message: string;
  direction?: "top" | "right" | "bottom" | "left";
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  message,
  direction = "top",
  delay = 400,
}) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper z-[9999]"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`Tooltip-Tip ${direction}`}>{message}</div>}
    </div>
  );
};
