import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-surface-card">
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>

              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-accent-soft text-primary mb-6">
                Difesa Personale
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">

              La Tua Sicurezza,{" "}
              <span className="font-serif-italic font-normal">Sempre con Te</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-lg mb-8">

              Spray al peperoncino professionale per la tua protezione quotidiana.
              Legale, compatto, efficace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4">

              <Button
                variant="hero"
                size="lg"
                onClick={() => document.querySelector("#prodotti")?.scrollIntoView({ behavior: "smooth" })}>

                Scopri i Prodotti
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => document.querySelector("#chi-siamo")?.scrollIntoView({ behavior: "smooth" })}>

                Chi Siamo →
              </Button>
            </motion.div>
          </div>

          {/* Right stats card */}
          
















        </div>
      </div>
    </section>);

};

export default HeroSection;