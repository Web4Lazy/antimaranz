import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productAntimaranz from "@/assets/product-antimaranz.png";
import productViper from "@/assets/product-viper.png";

const products = [
  {
    name: "AntiMaranz Compact",
    description: "Spray compatto da borsa, 15ml, gittata 3 metri. Perfetto per chi vuole protezione discreta e sempre a portata di mano.",
    icon: Shield,
    image: productAntimaranz,
  },
  {
    name: "AntiMaranz Pro",
    description: "Spray professionale, 40ml, gittata 5 metri, con clip cintura. La scelta per chi non scende a compromessi sulla sicurezza.",
    icon: Shield,
    image: productViper,
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
      className="relative aspect-[3/4] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder image bg */}
      <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Overlay panel - hidden by default, slides up on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#36362e]/95 px-6 transition-all duration-400 ease-out overflow-hidden ${
          hovered ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="py-6">
          <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
          <p className="text-sm text-white/80 mb-5 leading-relaxed">
            {product.description}
          </p>
          <div className="flex gap-3">
            <Button variant="pill" size="sm" className="bg-white text-black hover:bg-white/90">
              Dettagli <ArrowRight size={14} />
            </Button>
            <Button variant="pill" size="sm" className="bg-primary text-white hover:bg-primary/90">
              Compra Ora
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
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
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
