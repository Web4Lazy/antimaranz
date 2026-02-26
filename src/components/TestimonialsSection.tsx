import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
{
  name: "Giulia R.",
  city: "Milano",
  initials: "GR",
  text: "Mi sento molto più sicura da quando porto l'AntiMaranz Compact nella borsa. Compatto e discreto, esattamente quello che cercavo."
},
{
  name: "Marco T.",
  city: "Roma",
  initials: "MT",
  text: "Ho regalato l'AntiMaranz Pro a mia moglie. La qualità è eccellente e sapere che è completamente legale ci dà tranquillità."
},
{
  name: "Alessia B.",
  city: "Torino",
  initials: "AB",
  text: "Prodotto di altissima qualità. Lo porto sempre con me durante le corse serali. Consiglio vivamente a tutte le donne!"
},
{
  name: "Lorenzo P.",
  city: "Napoli",
  initials: "LP",
  text: "Spedizione velocissima e prodotto conforme alla descrizione. La clip cintura del modello Pro è comodissima."
}];


const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl font-extrabold mb-4 text-secondary md:text-4xl">
            Cosa Dicono i Nostri <span className="font-serif-italic font-normal">Clienti</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-2xl p-8 border border-border/50 text-center">

              <Quote size={32} className="mx-auto mb-4 text-primary" />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
                <Star key={i} size={16} className="fill-primary text-primary" />
                )}
              </div>
              <p className="text-lg leading-relaxed mb-6 text-secondary">"{t.text}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">{t.initials}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">

              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />

              )}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">

              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;