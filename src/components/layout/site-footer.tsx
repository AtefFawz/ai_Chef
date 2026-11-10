import { Icon } from "@/components/ui/icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__main">
        <div className="site-footer__brand-block">
          <a className="brand brand--footer" href="#home" aria-label="AI Chef Mate home">
            <span className="brand__mark"><Icon name="chef-hat" size={21} /></span>
            <span className="brand__name">ai chef<span>mate.</span></span>
          </a>
          <p>Good food starts with a good idea. Make room for both.</p>
        </div>

        <div className="site-footer__links">
          <span className="footer-label">Explore</span>
          <a href="#approach">The approach</a>
          <a href="#ideas">Recipe ideas</a>
          <a href="#studio">Recipe studio</a>
        </div>

        <div className="site-footer__links">
          <span className="footer-label">A note</span>
          <p>This website is a front-end experience. Live AI generation and account features are not connected in this build.</p>
          <a href="#faq">Read the FAQ <Icon name="arrow-up-right" size={14} /></a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© AI Chef Mate</span>
        <a href="#home">Back to top <Icon name="arrow-up-right" size={14} /></a>
        <span>Made for curious home cooks.</span>
      </div>
    </footer>
  );
}
