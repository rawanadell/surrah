import screen3 from '../assets/merged.png'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function HowItWorksSection() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  return (
    <section className="py-32 bg-surface-container-low" id="how-it-works">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {t('hiw_title_1')} <span className="gold-gradient-text">{t('hiw_title_2')}</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('hiw_subtitle')}
          </p>
        </div>

        {/* Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-24">
          
          {/* Step 1: Add */}
          <div className="md:col-span-7 bg-surface-container rounded-xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group border border-outline-variant/20 transition-all duration-300 shadow-sm">
            <div className="z-10 mb-8 md:mb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold">1</div>
                <h3 className="text-xl font-semibold text-primary">{t('hiw_step1_title')}</h3>
              </div>
              <p className="text-lg text-on-surface-variant max-w-md">
                {t('hiw_step1_desc')}
              </p>
            </div>
            
            {/* Mockup visual area - تم ضبط الهوامش لدعم الاتجاهين */}
            <div className="mt-8 rtl:md:-mr-12 ltr:md:-ml-12 md:-mb-12 relative w-full h-[300px] md:h-[400px] rtl:rounded-tl-xl ltr:rounded-tr-xl overflow-hidden shadow-navy-extra border border-outline-variant/20">
              <div className="absolute inset-0 bg-navy p-6 flex flex-col">
                <div className="text-center text-white mb-6 text-xl font-semibold">{t('hiw_step1_mock_title')}</div>
                <div className="bg-secondary-fixed-dim rounded-lg p-4 text-navy text-left ltr:text-right text-[24px] font-bold mb-6 flex justify-between flex-row-reverse">
                  <span>0.00 <span className="text-sm font-normal">{t('hiw_currency')}</span></span>
                </div>
                <div className="grid grid-cols-3 gap-4 flex-1">
                  {/* Numpad mock */}
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">1</div>
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">2</div>
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">3</div>
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">4</div>
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">5</div>
                  <div className="bg-secondary-fixed-dim/80 rounded-full flex items-center justify-center font-bold text-xl text-navy">6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Organize */}
          <div className="md:col-span-5 bg-navy text-on-primary rounded-xl p-8 md:p-12 flex flex-col border border-secondary-fixed-dim/20 shadow-lg">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim text-navy flex items-center justify-center text-xl font-semibold">2</div>
                <h3 className="text-xl font-semibold text-on-primary">{t('hiw_step2_title')}</h3>
              </div>
              <p className="text-lg text-on-primary/80">
                {t('hiw_step2_desc')}
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="bg-surface/10 border border-secondary-fixed-dim/10 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-secondary-fixed-dim/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim/20 flex items-center justify-center text-secondary-fixed-dim">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="text-lg">{t('hiw_step2_cat1')}</span>
              </div>
              
              {/* تم ضبط حدود البطاقة النشطة لدعم الاتجاهين */}
              <div className="bg-surface/10 border border-secondary-fixed-dim/50 rtl:border-r-[4px] ltr:border-l-[4px] rtl:border-r-secondary-fixed-dim ltr:border-l-secondary-fixed-dim rounded-lg p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-navy">
                  <span className="material-symbols-outlined">local_gas_station</span>
                </div>
                <span className="text-lg">{t('hiw_step2_cat2')}</span>
                <span className="material-symbols-outlined rtl:mr-auto ltr:ml-auto text-secondary-fixed-dim">check</span>
              </div>
              
              <div className="bg-surface/10 border border-secondary-fixed-dim/10 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-secondary-fixed-dim/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim/20 flex items-center justify-center text-secondary-fixed-dim">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <span className="text-lg">{t('hiw_step2_cat3')}</span>
              </div>
            </div>
          </div>

          {/* Step 3: Track */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/20 shadow-sm transition-all duration-300 overflow-hidden">
            {/* تم ضبط الـ padding ليفصل بين النص والصورة في الاتجاهين */}
            <div className="w-full md:w-1/2 rtl:md:pl-8 ltr:md:pr-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold">3</div>
                <h3 className="text-xl font-semibold text-primary">{t('hiw_step3_title')}</h3>
              </div>
              <p className="text-lg text-on-surface-variant mb-6">
                {t('hiw_step3_desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-secondary-fixed-dim">pie_chart</span>
                  <span className="text-base">{t('hiw_step3_bullet1')}</span>
                </li>
                <li className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-secondary-fixed-dim">trending_up</span>
                  <span className="text-base">{t('hiw_step3_bullet2')}</span>
                </li>
              </ul>
            </div>
            
            {/* Three phones image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full rounded-2xl border border-outline-variant/20 bg-surface-container p-4 shadow-lg overflow-hidden">
                <img
                  src={screen3}
                  alt="screen dashboard"
                  className="w-full h-auto object-contain block"
                  style={{ aspectRatio: '337/188' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection