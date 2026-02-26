import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Truck, ShieldCheck } from "lucide-react";

const steps = [
{
  num: "01",
  title: "Scegli",
  description: "Seleziona il prodotto adatto alle tue esigenze",
  icon: MousePointerClick
},
{
  num: "02",
  title: "Ordina",
  description: "Acquisto sicuro e spedizione rapida in tutta Italia",
  icon: Truck
},
{
  num: "03",
  title: "Proteggiti",
  description: "Tieni il tuo spray sempre a portata di mano",
  icon: ShieldCheck
}];


const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-28 bg-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl font-extrabold mb-4 text-secondary md:text-5xl">
            Come <span className="font-serif-italic font-normal">Funziona</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-input">
            <motion.div
              className="h-full bg-input origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} />

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) =>
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center relative">

                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-accent bg-input">
                  <step.icon size={22} className="text-primary-foreground" />
                </div>
                <span className="text-5xl font-extrabold text-surface-elevated block mb-2 text-secondary">{step.num}</span>
                <h3 className="text-xl font-bold mb-2 text-secondary">{step.title}</h3>
                <p className="text-sm text-text-secondary text-secondary">{step.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HowItWorksSection;