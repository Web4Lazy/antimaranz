import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "AntiMaranz Compact",
    description: "Spray compatto da borsa, 15ml, gittata 3 metri. Perfetto per chi vuole protezione discreta e sempre a portata di mano.",
    icon: Shield,
    placeholder: "Immagine Prodotto 1",
  },
  {
    name: "AntiMaranz Pro",
    description: "Spray professionale, 40ml, gittata 5 metri, con clip cintura. La scelta per chi non scende a compromessi sulla sicurezza.",
    icon: Shield,
    placeholder: "Immagine Prodotto 2",
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder image bg */}
      <div className="absolute inset-0 bg-surface-elevated flex flex-col items-center justify-center gap-3">
        <product.icon size={48} className="text-muted-foreground/40" />
        <span className="text-sm text-muted-foreground/60">{product.placeholder}</span>
      </div>

      {/* Overlay panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-surface-dark/95 px-6 flex flex-col justify-end"
        initial={false}
        animate={{ height: hovered ? "75%" : "25%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="py-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center">
              <product.icon size={18} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: hovered ? 0.15 : 0 }}
          >
            <p className="text-sm text-text-secondary mb-5 leading-relaxed">
              {product.description}
            </p>
            <Button variant="pill" size="sm">
              Dettagli <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="prodotti" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-accent-soft text-primary mb-4">
            I Nostri Prodotti
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Scegli la Tua <span className="font-serif-italic font-normal">Protezione</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
