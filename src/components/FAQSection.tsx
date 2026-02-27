import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faqBg from "@/assets/faq-bg.png";

const faqs = [
  {
    q: "Lo spray al peperoncino è legale in Italia?",
    a: "Sì, lo spray al peperoncino è legale in Italia per la difesa personale, purché rispetti i requisiti di legge: concentrazione massima del 10% di oleoresin capsicum e capacità non superiore a 20ml per il modello Compact. I nostri prodotti sono tutti conformi alla normativa vigente.",
  },
  {
    q: "Qual è la differenza tra Compact e Pro?",
    a: "Il Compact è pensato per chi cerca un prodotto discreto e facilmente trasportabile in borsa (15ml, gittata 3 metri). Il Pro offre maggiore capacità (40ml), una gittata superiore (5 metri) e include una clip per cintura per un accesso rapido.",
  },
  {
    q: "Quanto dura una carica?",
    a: "Il modello Compact garantisce circa 6-8 erogazioni brevi, mentre il modello Pro arriva a 15-20 erogazioni. In entrambi i casi, ogni erogazione è sufficiente per fermare un aggressore.",
  },
  {
    q: "Come si usa correttamente?",
    a: "Impugna lo spray con fermezza, togli la sicura, punta verso il viso dell'aggressore a una distanza di 1-5 metri e premi il pulsante di erogazione per 1-2 secondi. Allontanati immediatamente dalla zona.",
  },
  {
    q: "Dove posso portarlo?",
    a: "Puoi portare lo spray al peperoncino nella borsa, in tasca o agganciato alla cintura (modello Pro). Non è consentito portarlo in aereo nel bagaglio a mano, in tribunali, stadi e altri luoghi dove è vietato il porto di oggetti di difesa.",
  },
  {
    q: "Quali sono i tempi di spedizione?",
    a: "Spediamo in tutta Italia con corriere espresso. I tempi di consegna sono di 2-4 giorni lavorativi dalla conferma dell'ordine. La spedizione è gratuita per ordini superiori a 30€.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${faqBg})` }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Domande <span className="font-serif-italic font-normal">Frequenti</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 bg-surface-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors text-left"
              >
                <span className="font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
