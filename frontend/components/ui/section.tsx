import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative py-16 sm:py-24 md:py-32", className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };
