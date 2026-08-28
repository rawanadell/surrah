import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next' 

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const location = useLocation()

  const navLinks = [
    { name: t('home'), id: 'home', path: '/' },
    { name: t('features'), id: 'features', path: '/features' },
    { name: t('how_it_works'), id: 'how-it-works', path: '/how-it-works' },
    { name: t('reports'), id: 'reports', path: '/reports' },
    { name: t('faq'), id: 'faq', path: '/faq' },
    { name: t('contact'), id: 'contact', path: '/contact' },
    { name: t('privacy'), id: 'privacy', path: '/privacy-policy' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    
    // حفظ اللغة في المتصفح
    localStorage.setItem('app_lang', newLang);
    
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 ${
        scrolled ? 'shadow-md border-outline-variant/20' : ''
      }`}
      id="main-nav"
    >
      <div className="flex justify-between items-center w-full px-5 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <Link className="flex items-center gap-2 group" to="/">
          <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform">
            account_balance_wallet
          </span>
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
            {t('app_name')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              // التعديل هنا: المقارنة أصبحت بين مسار الصفحة والـ path مباشرة
              className={`${
                location.pathname === link.path
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1 transition-all'
                  : 'text-on-surface-variant hover:text-primary transition-colors font-medium tracking-wide'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            
            {/* زر التبديل للدارك مود */}
            <button 
              aria-label="Toggle Dark Mode" 
              onClick={toggleTheme}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>

            {/* زر تبديل اللغة */}
            <button 
              aria-label="Language" 
              onClick={toggleLanguage}
              className="p-2 flex items-center gap-1 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all font-bold text-sm"
            >
              <span className="material-symbols-outlined">language</span>
              <span>{i18n.language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            
          </div>
          <a 
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg active:scale-[0.98] transition-all hidden sm:block" 
            href="#download"
          >
            {t('start_now')}
          </a>
          {/* Mobile Menu Button */}
          <button 
            aria-label="Menu" 
            className="md:hidden p-2 text-on-surface"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar