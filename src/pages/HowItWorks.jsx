import screen2 from '../assets/screen2-input.png'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function HowItWorks() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-surface font-body-md antialiased flex flex-col">
      {/* Header Section */}
      <header className="text-center max-w-2xl mx-auto px-5 md:px-12 py-12 md:py-24">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          {t('hiw_page_title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('hiw_page_subtitle')}
        </p>
      </header>

      {/* Steps Journey (Bento-ish asymmetric layout) */}
      <div className="flex-grow px-5 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-24">
          
          {/* Step 1: Add */}
          <div className="md:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group border border-outline-variant/10">
            <div className="z-10 mb-8 md:mb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#001233] text-[#E5B84A] flex items-center justify-center font-display-lg-mobile text-display-lg-mobile">1</div>
                <h2 className="font-headline-md text-headline-md text-primary">{t('hiw_page_step1_title')}</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                {t('hiw_page_step1_desc')}
              </p>
            </div>
            
            {/* Mockup visual area - تعديل الاتجاهات هنا */}
            <div className="mt-8 rtl:md:-mr-12 ltr:md:-ml-12 md:-mb-12 relative w-full h-[300px] md:h-[400px] rtl:rounded-tl-xl ltr:rounded-tr-xl overflow-hidden shadow-[0_20px_40px_rgba(0,18,51,0.12)]">
              <div className="absolute inset-0 bg-[#001233] p-6 flex flex-col">
                <div className="text-center text-white mb-6 font-headline-md text-headline-md">{t('hiw_page_mock_title')}</div>
                <div className="bg-[#E5B84A] rounded-lg p-4 text-[#001233] text-left ltr:text-right num-font text-[24px] font-bold mb-6 flex justify-between flex-row-reverse">
                  <span>0.00 <span className="font-body-md text-sm font-normal">{t('hiw_page_currency')}</span></span>
                </div>
                <div className="grid grid-cols-3 gap-4 flex-1">
                  {/* Numpad mock */}
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">1</div>
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">2</div>
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">3</div>
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">4</div>
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">5</div>
                  <div className="bg-[#E5B84A]/80 rounded-full flex items-center justify-center num-font font-bold text-xl text-[#001233]">6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Organize */}
          <div className="md:col-span-5 bg-[#001233] text-white rounded-xl p-8 md:p-12 flex flex-col border border-[#E5B84A]/20">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E5B84A] text-[#001233] flex items-center justify-center font-display-lg-mobile text-display-lg-mobile">2</div>
                <h2 className="font-headline-md text-headline-md text-white">{t('hiw_page_step2_title')}</h2>
              </div>
              <p className="font-body-lg text-body-lg text-outline-variant">
                {t('hiw_page_step2_desc')}
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="bg-[#00152B] border border-[#E5B84A]/10 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-[#E5B84A]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#E5B84A]/20 flex items-center justify-center text-[#E5B84A]">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="font-body-lg text-body-lg">{t('hiw_page_cat1')}</span>
              </div>
              
              {/* تعديل حدود البطاقة النشطة للاتجاهين */}
              <div className="bg-[#00152B] border border-[#E5B84A]/50 rtl:border-r-[4px] ltr:border-l-[4px] rtl:border-r-[#E5B84A] ltr:border-l-[#E5B84A] rounded-lg p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5B84A] flex items-center justify-center text-[#001233]">
                  <span className="material-symbols-outlined">local_gas_station</span>
                </div>
                <span className="font-body-lg text-body-lg">{t('hiw_page_cat2')}</span>
                <span className="material-symbols-outlined rtl:mr-auto ltr:ml-auto text-[#E5B84A]">check</span>
              </div>
              
              <div className="bg-[#00152B] border border-[#E5B84A]/10 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-[#E5B84A]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#E5B84A]/20 flex items-center justify-center text-[#E5B84A]">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <span className="font-body-lg text-body-lg">{t('hiw_page_cat3')}</span>
              </div>
            </div>
          </div>

          {/* Step 3: Track */}
          <div className="md:col-span-12 bg-surface-container-high rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10 overflow-hidden">
            {/* تعديل الهوامش بين النص والصورة للاتجاهين */}
            <div className="w-full md:w-1/2 rtl:md:pl-8 ltr:md:pr-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#001233] text-[#E5B84A] flex items-center justify-center font-display-lg-mobile text-display-lg-mobile">3</div>
                <h2 className="font-headline-md text-headline-md text-primary">{t('hiw_page_step3_title')}</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                {t('hiw_page_step3_desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-[#E5B84A]">pie_chart</span>
                  <span className="font-body-md text-body-md">{t('hiw_page_bullet1')}</span>
                </li>
                <li className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-[#E5B84A]">trending_up</span>
                  <span className="font-body-md text-body-md">{t('hiw_page_bullet2')}</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,18,51,0.12)] bg-white p-4">
              <img 
                className="w-full h-auto object-cover rounded-lg border border-outline-variant/10" 
                alt="A clean, modern financial dashboard app mockup showing a bar chart comparing income and expenses over several months."
                src={screen2}
              />
            </div>
          </div>
        </div>

        {/* Simplicity Focus Section */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            {t('hiw_page_simplicity_title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {t('hiw_page_simplicity_desc')}
          </p>
        </div>

        {/* End CTA */}
        <div className="bg-[#001233] rounded-xl p-12 text-center text-white relative overflow-hidden mb-12">
          {/* Decorative gradient */}
          <div className="absolute top-0 rtl:right-0 ltr:left-0 w-64 h-64 bg-[#E5B84A] opacity-10 blur-[80px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-0 rtl:left-0 ltr:right-0 w-64 h-64 bg-[#E5B84A] opacity-10 blur-[80px] rounded-full mix-blend-screen"></div>
          
          <div className="relative z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
              {t('hiw_page_cta_title')}
            </h2>
            <p className="font-body-lg text-body-lg text-outline-variant mb-8 max-w-md mx-auto">
              {t('hiw_page_cta_desc')}
            </p>
            <button className="bg-[#E5B84A] text-[#001233] px-8 py-4 rounded-[24px] font-headline-md text-[20px] font-semibold hover:bg-[#E5B84A]/90 transition-colors shadow-lg">
              {t('start_now')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks