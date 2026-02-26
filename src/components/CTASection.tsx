import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Grazie per la tua richiesta! Ti contatteremo presto.");
    setName("");
    setEmail("");
  };

  return (
    <section id="contatti" className="relative py-20 md:py-28 overflow-hidden">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-surface-card">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pronto a Sentirti{" "}
            <span className="font-serif-italic font-normal">Sicuro?</span>
          </h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8">
            Ordina il tuo AntiMaranz oggi e non uscire mai più senza protezione.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Il tuo nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-5 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
          <input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-5 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
          <Button variant="hero" size="lg" type="submit">
            Richiedi Info
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;
