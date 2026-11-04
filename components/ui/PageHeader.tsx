import React from "react";

interface PageHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  kicker,
  title,
  subtitle,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`pb-8 sm:pb-10 text-center flex flex-col items-center justify-center w-full ${className}`}>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4 w-full">
        {kicker && (
          <div className="inline-flex items-center justify-center space-x-2.5 mx-auto">
            <span className="h-px w-6 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              {kicker}
            </span>
            <span className="h-px w-6 bg-[#849987]"></span>
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292D2A] leading-[1.15] text-center w-full">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-[#575E59] leading-relaxed font-normal pt-1 max-w-3xl mx-auto text-center">
            {subtitle}
          </p>
        )}

        {actions && (
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 w-full">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}
