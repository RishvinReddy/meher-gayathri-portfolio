import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  kicker,
  title,
  subtitle,
  breadcrumbs,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`border-b border-[#ECE6DC] pb-10 sm:pb-12 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-4xl space-y-3">
          {kicker && (
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-5 bg-[#849987]"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                {kicker}
              </span>
            </div>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292D2A] leading-[1.15]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#575E59] leading-relaxed font-normal pt-1">
              {subtitle}
            </p>
          )}
        </div>

        {actions && (
          <div className="shrink-0 self-start md:self-end">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}

