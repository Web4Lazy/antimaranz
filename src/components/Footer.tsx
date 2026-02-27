const footerLinks = {
  Prodotti: ["AntiMaranz", "Viper"],
  Informazioni: ["Chi Siamo", "Come Funziona", "FAQ"],
  Legale: ["Privacy Policy", "Termini e Condizioni", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-surface-card border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold tracking-tight">
              Anti<span className="text-primary">Maranz</span>
            </span>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              Spray al peperoncino professionale per la tua difesa personale. Legale, compatto, efficace.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 AntiMaranz. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
