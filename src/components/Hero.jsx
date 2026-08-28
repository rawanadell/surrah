import screen1 from '../assets/screen1-account.jpg'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function Hero() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  return (
    <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-fixed/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface shadow-sm border border-outline-variant/30 mb-8">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-sm">stars</span>
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">
              {t('hero_badge')}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {t('hero_title_1')} <span className="gold-gradient-text">{t('hero_title_2')}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-on-surface-variant mb-6 font-medium tracking-tight">
            {t('hero_subtitle')}
          </h2>
          
          <p className="text-lg text-on-surface-variant/80 mb-12 max-w-xl">
            {t('hero_description')}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a className="btn-primary px-8 py-4 text-sm font-medium flex items-center gap-2 hover:-translate-y-1 transition-all" href="#download">
              <span className="material-symbols-outlined">download</span>
              {t('hero_download_btn')}
            </a>
            <a className="bg-transparent text-primary px-8 py-4 rounded-[16px] text-sm font-medium border border-outline-variant/50 hover:border-primary hover:bg-surface-container transition-all" href="/features">
              {t('hero_features_btn')}
            </a>
          </div>
        </div>

        {/* Right: Single Screen */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md border border-secondary-fixed-dim bg-surface/60 backdrop-blur-3xl rounded-[40px] p-4 shadow-lg">
            <div className="bg-surface rounded-[32px] overflow-hidden border border-outline-variant/20 shadow-inner flex flex-col h-[650px]">
              <img 
                alt={t('hero_image_alt')} 
                className="w-full h-full object-cover rounded-[32px]" 
                src={screen1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero