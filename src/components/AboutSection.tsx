import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
{ text: "SICUREZZA", label: "Garanzia totale" },
{ value: 25, suffix: "+", label: "Anni di Esperienza" },
{ value: 98, suffix: "%", label: "Clienti soddisfatti" },
{ value: 100, suffix: "%", label: "Legale e certificato" }] as
const;

const AnimatedNumber = ({ value, suffix, className }: {value: number;suffix: string;className?: string;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v))
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={`text-2xl sm:text-3xl md:text-4xl font-extrabold break-words ${className || "text-primary"}`}>
      {display}{suffix}
    </span>);

};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const contexts = [
"Abitazioni private",
"Uffici e studi professionali",
"Attività commerciali",
"Aziende e ambienti di lavoro",
"Utilizzo personale e familiare"];


const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-light py-20 md:py-32" data-v="2">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}>
            
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-accent-soft text-primary mb-4">
              Chi Siamo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              La Tua Protezione,{" "}
              <span className="font-serif-italic font-normal">La Nostra Missione</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-primary">AntiMaranz</strong> è un progetto di <strong className="text-primary">Monty Soul</strong>, brand specializzato in tecnologie per la sicurezza personale nato dall'esperienza di <strong className="text-primary">DECATRONIC</strong> — oltre 35 anni nel settore investigativo e della sicurezza professionale.
                <br />Selezioniamo spray al peperoncino di qualità professionale, prodotti in Italia e 100% legali. Tutta la competenza di chi lavora nella sicurezza da decenni, in un prodotto semplice e alla portata di tutti.
                <br />La tua difesa personale, concreta e senza complicazioni.
              </p>
              <p>
                Ogni prodotto viene scelto secondo criteri precisi: qualità, affidabilità, funzionalità e semplicità d'uso. Grazie all'esperienza maturata nel settore investigativo e tecnologico, siamo in grado di individuare le migliori soluzioni presenti sul mercato.
              </p>
            </div>
          </motion.div>

          {/* Right: stats + contexts + mission */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) =>
              <motion.div
                key={stat.label}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`rounded-2xl p-4 sm:p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden ${
                i === 0 ?
                "bg-secondary border-secondary/50 hover:border-secondary" :
                i === 1 ?
                "bg-primary border-primary/50 hover:border-primary" :
                "bg-surface-card border-border/50 hover:border-primary/30"}`
                }>
                
                  {'value' in stat ?
                <AnimatedNumber value={stat.value} suffix={stat.suffix} className={i < 2 ? "text-white" : undefined} /> :

                <span className={`text-lg sm:text-2xl md:text-4xl font-extrabold break-all ${i < 2 ? "text-white" : "text-primary"}`}>{stat.text}</span>
                }
                  <p className={`text-xs sm:text-sm mt-2 ${i < 2 ? "text-white/80" : "text-text-secondary"}`}>{stat.label}</p>
                </motion.div>
              )}
            </div>

            {/* Contexts */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-6 bg-surface-card border border-border/50">
              
              <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Contesti d'uso</h3>
              <ul className="space-y-2">
                {contexts.map((ctx) =>
                <li key={ctx} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {ctx}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </section>);

};

export default AboutSection;