import { motion } from "framer-motion";

const brands = Array.from({ length: 6 }, (_, i) => `Brand Partner ${i + 1}`);

const MarqueeSection = () => {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <p className="text-center text-sm text-text-secondary uppercase tracking-widest mb-8">
        Scelto da chi vuole sentirsi sicuro
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 px-8 py-3 bg-surface-card rounded-lg border border-border/30 min-w-[160px]"
            >
              <span className="text-sm font-medium text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
