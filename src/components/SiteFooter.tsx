const SiteFooter = () => (
  <footer id="contact" className="border-t border-border bg-card py-10">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-foreground mb-2">Mogadishu Hotels</p>
          <p className="text-muted-foreground leading-relaxed">
            Helping visitors discover trusted hotels across Mogadishu, Somalia.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Links</p>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="/" className="hover:text-foreground transition-colors">Hotels</a></li>
            <li><a href="/#map" className="hover:text-foreground transition-colors">Map</a></li>
            <li><a href="/#about" className="hover:text-foreground transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Legal</p>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Mogadishu Hotel Directory
      </div>
    </div>
  </footer>
);

export default SiteFooter;
