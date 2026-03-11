import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { text: "SICUREZZA", label: "Garanzia totale" },
  { value: 25, suffix: "+", label: "Anni di Esperienza" },
  { value: 98, suffix: "%", label: "Clienti soddisfatti" },
  { value: 100, suffix: "%", label: "Legale e certificato" },
] as const;

const AnimatedNumber = ({ value, suffix, className }: { value: number; suffix: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={`text-2xl sm:text-3xl md:text-4xl font-extrabold break-words ${className || "text-primary"}`}>
      {display}{suffix}
    </span>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const contexts = [
  "Abitazioni private",
  "Uffici e studi professionali",
  "Attività commerciali",
  "Aziende e ambienti di lavoro",
  "Utilizzo personale e familiare",
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-accent-soft text-primary">
            Chi Siamo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Sicurezza professionale,{" "}
            <span className="font-serif-italic font-normal">alla portata di tutti</span>
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed text-left md:text-center">
            <p>
              <strong className="text-foreground">AntiMaranz</strong> è un progetto di{" "}
              <strong className="text-foreground">Monty Soul</strong>, brand specializzato in tecnologie per la sicurezza personale nato dall'esperienza di{" "}
              <strong className="text-foreground">DECATRONIC</strong> — oltre 35 anni nel settore investigativo e della sicurezza professionale.
            </p>
            <p>
              Selezioniamo spray al peperoncino di qualità professionale, prodotti in Italia e 100% legali. Tutta la competenza di chi lavora nella sicurezza da decenni, in un prodotto semplice e alla portata di tutti.
            </p>
          </div>
          <blockquote className="text-xl md:text-2xl font-extrabold text-foreground border-l-4 border-primary pl-6 text-left">
            La tua difesa personale, concreta e senza complicazioni.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
