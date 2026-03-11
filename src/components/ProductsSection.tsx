import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, ArrowLeft, X, Droplets, Target, Ruler, Weight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import productAntimaranz from "@/assets/product-antimaranz.png";
import productViper from "@/assets/product-viper.png";

const products = [
  {
    name: "AntiMaranz",
    description: "Spray compatto da borsa, 15ml, gittata 3 metri. Perfetto per chi vuole protezione discreta e sempre a portata di mano.",
    icon: Shield,
    image: productAntimaranz,
    buyUrl: "https://montysoul.it/products/antimaranz-spray-peperoncino-difensivo-16ml",
    specs: [
      { icon: Droplets, label: "Capacità", value: "15 ml" },
      { icon: Target, label: "Gittata", value: "3 metri" },
      { icon: Ruler, label: "Dimensioni", value: "9 × 2,5 cm" },
      { icon: Weight, label: "Peso", value: "25 g" },
      { icon: Clock, label: "Durata effetto", value: "Fino a 72 ore" },
    ],
    details: [
      "Formula a base di OC (Oleoresin Capsicum) al 10%",
      "Inchiostro rosso indelebile per identificazione aggressore",
      "Meccanismo di sicurezza anti-attivazione accidentale",
      "Formato tascabile, ideale per borse e tasche",
      "Getto concentrato per massima precisione",
      "100% legale in Italia senza porto d'armi",
    ],
  },
  {
    name: "Viper",
    description: "Spray professionale, 40ml, gittata 5 metri, con clip cintura. La scelta per chi non scende a compromessi sulla sicurezza.",
    icon: Shield,
    image: productViper,
    buyUrl: "https://montysoul.it/products/viper-spray-peperoncino-antiaggressione-16ml?_pos=1&_sid=23d726085&_ss=r",
    specs: [
      { icon: Droplets, label: "Capacità", value: "40 ml" },
      { icon: Target, label: "Gittata", value: "5 metri" },
      { icon: Ruler, label: "Dimensioni", value: "14 × 3,5 cm" },
      { icon: Weight, label: "Peso", value: "55 g" },
      { icon: Clock, label: "Durata effetto", value: "Fino a 72 ore" },
    ],
    details: [
      "Formula a base di OC (Oleoresin Capsicum) al 10%",
      "Inchiostro rosso indelebile per identificazione aggressore",
      "Clip cintura integrata per accesso rapido",
      "Getto a cono largo per copertura massima",
      "Impugnatura ergonomica antiscivolo",
      "Meccanismo di sicurezza anti-attivazione accidentale",
      "100% legale in Italia senza porto d'armi",
    ],
  },
];

type Product = typeof products[0];

/* ─── Product Detail Overlay ─── */
const ProductDetail = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Torna al sito</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-elevated transition-colors text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "md:grid-cols-2 gap-12"} items-start`}>
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-surface-elevated rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-accent-soft/10 text-primary mb-3">
                Spray di Difesa
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                {product.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Specifiche Tecniche
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-surface-elevated rounded-xl p-3 flex flex-col items-center text-center gap-1.5"
                  >
                    <spec.icon size={20} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Caratteristiche
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Shield size={14} className="text-primary mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button variant="pill" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent-hover text-base py-6">
                Compra Ora <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Product Card ─── */
const ProductCard = ({ product, index, onDetail }: { product: Product; index: number; onDetail: () => void }) => {
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
      className="relative aspect-[3/4] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#36362e]/95 px-6 transition-all duration-400 ease-out overflow-hidden ${
          hovered ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="py-6">
          <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
          <p className="text-sm text-foreground/80 mb-5 leading-relaxed">
            {product.description}
          </p>
          <div className="flex gap-3">
            <Button
              variant="pill"
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={(e) => { e.stopPropagation(); onDetail(); }}
            >
              Dettagli <ArrowRight size={14} />
            </Button>
            <Button
              variant="pill"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-accent-hover"
              onClick={(e) => { e.stopPropagation(); window.open(product.buyUrl, "_blank"); }}
            >
              Compra Ora
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Products Section ─── */
const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="prodotti" className="py-20 md:py-32 bg-[#36362e]">
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
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Scegli la Tua <span className="font-serif-italic font-normal">Protezione</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                index={i}
                onDetail={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Overlay */}
      <AnimatePresenceWrapper selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

/* Wrapper to use AnimatePresence */
import { AnimatePresence } from "framer-motion";

const AnimatePresenceWrapper = ({ selectedProduct, onClose }: { selectedProduct: Product | null; onClose: () => void }) => (
  <AnimatePresence>
    {selectedProduct && <ProductDetail product={selectedProduct} onClose={onClose} />}
  </AnimatePresence>
);

export default ProductsSection;
