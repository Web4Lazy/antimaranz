import { motion } from "framer-motion";
import { ShieldAlert, Scan } from "lucide-react";
import defenseImg from "@/assets/defense-uv.jpg";

const DefenseSection = () => {
  return (
    <section className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Difesa immediata +{" "}
              <span className="text-primary">Identificazione garantita</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I nostri spray al peperoncino hanno una doppia funzione: neutralizzano l'aggressore sul momento e lo marchiano con inchiostro rosso indelebile.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0 mt-1">
                  <ShieldAlert size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Effetto immediato</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Lo spray provoca chiusura involontaria degli occhi, lacrimazione intensa, tosse, difficoltà respiratoria e disorientamento totale. L'aggressore è incapacitato per 20-40 minuti, dandoti il tempo di metterti in sicurezza. Gli effetti sono temporanei e non provocano danni permanenti.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0 mt-1">
                  <Scan size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Inchiostro identificativo rosso</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Insieme allo spray, un inchiostro rosso indelebile si deposita sulla pelle e sui vestiti dell'aggressore. È visibile immediatamente, resiste ai lavaggi per giorni e permette alle forze dell'ordine di collegare l'aggressore alla scena anche a distanza di tempo.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg font-bold">
              Ti difendi oggi.{" "}
              <span className="text-primary">Lo identificano domani.</span>
            </p>
          </motion.div>

          {/* Right column – image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/50">
              <img
                src={defenseImg}
                alt="Spray al peperoncino con inchiostro rosso per difesa e identificazione"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DefenseSection;
