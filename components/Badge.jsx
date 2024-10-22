"use client";

import CountUp from "react-countup";

const Badge = ({ containerStyles, icon, endcountNum, endText, badgetext }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-2xl leading-none text-primary font-bold">
          <CountUp end={endcountNum} delay={1} duration={4} />
          {endText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
            {badgetext}
        </div>
      </div>
    </div>
  );
};

export default Badge;
