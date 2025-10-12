import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features: FeatureProps[];
  className?: string;
}

export default function Features({
  title = "Everything you need",
  description = "All the features you need to succeed",
  features,
  className,
}: FeaturesProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[600px] text-lg text-white/50">
            {description}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
