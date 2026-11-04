import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? "text-center max-w-4xl mx-auto" : "max-w-4xl"} ${className}`}>
      {kicker && (
        <div className="inline-flex items-center space-x-2 mb-3">
          <span className="h-px w-5 bg-[#849987]"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
            {kicker}
          </span>
          {isCenter && <span className="h-px w-5 bg-[#849987]"></span>}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292D2A] leading-[1.14]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#575E59] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
