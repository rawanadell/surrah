import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo without background.png';

function Footer() {
  const location = useLocation();
  
  // 2. تشغيل أداة الترجمة (حرف t هو اللي هيترجم لنا الكلمات)
  const { t } = useTranslation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    
    return `hover:translate-x-1 transition-transform duration-200 ${
      isActive 
        ? "text-secondary-fixed font-semibold" 
        : "text-on-tertiary-container/60 hover:text-secondary-fixed"
    }`;
  };

  return (
    <footer className="bg-[#000814] text-on-tertiary w-full py-16 mt-0 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-5 md:px-12 max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="md:col-span-1">
          <Link className="inline-flex items-center gap-2 mb-6" to="/">
            <img src={logo} alt="Surrah logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-secondary-fixed tracking-tight">{t('app_name')}</span>
          </Link>
          <p className="text-on-tertiary-container/60 text-sm mb-6 leading-relaxed">
            {t('copyright')}
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-secondary-fixed mb-2 tracking-wide">{t('quick_links')}</h4>
          <Link className={getLinkStyle("/")} to="/">{t('home')}</Link>
          <Link className={getLinkStyle("/features")} to="/features">{t('features')}</Link>
          <Link className={getLinkStyle("/how-it-works")} to="/how-it-works">{t('how_it_works')}</Link>
          <Link className={getLinkStyle("/reports")} to="/reports">{t('reports')}</Link>
        </div>
        
        {/* Support Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-secondary-fixed mb-2 tracking-wide">{t('support')}</h4>
          <Link className={getLinkStyle("/faq")} to="/faq">{t('faq')}</Link>
          <Link className={getLinkStyle("/contact")} to="/contact">{t('contact')}</Link>
          <Link className={getLinkStyle("/privacy-policy")} to="/privacy-policy">{t('privacy')}</Link>
        </div>
        
        {/* Download Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-secondary-fixed mb-2 tracking-wide">{t('download')}</h4>
          <a className="text-on-tertiary-container/60 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">phone_iphone</span>
            {t('ios_app')}
          </a>
          <a className="text-on-tertiary-container/60 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">android</span>
            {t('android_app')}
          </a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer;