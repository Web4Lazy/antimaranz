import { motion } from "framer-motion";
import { Shield, Target, Hand, Package } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legale al 100%",
    description: "Conforme alle normative italiane vigenti in materia di difesa personale.",
  },
  {
    icon: Target,
    title: "Gittata Efficace",
    description: "Fino a 5 metri di distanza di sicurezza per la massima protezione.",
  },
  {
    icon: Hand,
    title: "Facile da Usare",
    description: "Attivazione rapida e design ergonomico per un utilizzo intuitivo.",
  },
  {
    icon: Package,
    title: "Compatto e Discreto",
    description: "Sta comodamente in tasca o in borsa, sempre pronto all'uso.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Perché Scegliere <span className="text-primary">AntiMaranz</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Qualità, legalità e affidabilità: tutto in un unico prodotto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4 group-hover:shadow-accent transition-shadow">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
