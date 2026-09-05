import screen3 from '../assets/screen3-reports.png'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function Reports() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-surface font-body-lg antialiased flex flex-col">
      {/* Hero Section */}
      <header className="text-center py-16 md:py-24 space-y-6 px-5 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-navy tracking-tight max-w-3xl mx-auto">
          {t('reports_page_title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('reports_page_subtitle')}
        </p>
      </header>

      {/* Reports Grid */}
      <div className="flex-grow px-5 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          {/* Daily / Weekly Summary */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card flex flex-col gap-6 relative overflow-hidden">
            {/* ضبط الخط الجانبي للاتجاهين */}
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-gold"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-headline-md text-headline-md text-navy">{t('reports_page_weekly_summary')}</h3>
              <span className="material-symbols-outlined text-outline">calendar_today</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">{t('reports_page_income')}</span>
                <span className="font-numeric-data text-numeric-data text-gold">{t('reports_page_income_val')}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">{t('reports_page_expenses')}</span>
                <span className="font-numeric-data text-numeric-data text-navy">{t('reports_page_expenses_val')}</span>
              </div>
            </div>
            <div className="flex-1 min-h-[150px] relative border-t border-outline-variant/30 pt-4">
              {/* Simple CSS Bar Chart Representation */}
              <div className="absolute inset-0 flex items-end justify-between px-2 pt-4 pb-2">
                <div className="w-8 bg-gold/80 h-3/4 rounded-t-sm"></div>
                <div className="w-8 bg-navy/80 h-1/2 rounded-t-sm"></div>
                <div className="w-8 bg-gold/80 h-full rounded-t-sm"></div>
                <div className="w-8 bg-navy/80 h-2/3 rounded-t-sm"></div>
                <div className="w-8 bg-gold/80 h-1/3 rounded-t-sm"></div>
                <div className="w-8 bg-navy/80 h-5/6 rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-navy"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-headline-md text-headline-md text-navy">{t('reports_page_vs_title')}</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 font-label-sm text-label-sm"><span className="w-3 h-3 rounded-full bg-gold"></span> {t('reports_page_income')}</span>
                <span className="flex items-center gap-1 font-label-sm text-label-sm"><span className="w-3 h-3 rounded-full bg-navy"></span> {t('reports_page_expenses')}</span>
              </div>
            </div>
            <div className="flex-1 min-h-[200px] flex items-end justify-around pb-6 relative border-b border-outline-variant/30">
              {/* Fake Chart */}
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[80%] rounded-t-sm"></div>
                <div className="w-4 bg-navy h-[60%] rounded-t-sm"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[90%] rounded-t-sm"></div>
                <div className="w-4 bg-navy h-[40%] rounded-t-sm"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[70%] rounded-t-sm"></div>
                <div className="w-4 bg-navy h-[85%] rounded-t-sm"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[100%] rounded-t-sm"></div>
                <div className="w-4 bg-navy h-[50%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="flex justify-around text-label-sm text-on-surface-variant">
              <span className="">{t('reports_page_jan')}</span>
              <span className="">{t('reports_page_feb')}</span>
              <span className="">{t('reports_page_mar')}</span>
              <span className="">{t('reports_page_apr')}</span>
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card md:col-span-2 relative overflow-hidden">
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-gold"></div>
            <h3 className="font-headline-md text-headline-md text-navy mb-6">{t('reports_page_where_money_goes')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Circular Chart Placeholder - ضبط الحدود للاتجاهين */}
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center rounded-full border-[16px] border-navy border-t-gold rtl:border-r-gold/50 ltr:border-l-gold/50 shadow-inner">
                <div className="text-center">
                  <span className="block font-numeric-data text-numeric-data text-navy">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{t('reports_page_total')}</span>
                </div>
              </div>
              {/* Legend - ضبط الحدود للاتجاهين */}
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-gold ltr:border-l-gold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold">restaurant</span>
                    <span className="font-body-md text-body-md text-navy">{t('reports_page_cat_food')}</span>
                  </div>
                  <span className="font-numeric-data text-numeric-data">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-navy ltr:border-l-navy">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-navy">shopping_bag</span>
                    <span className="font-body-md text-body-md text-navy">{t('reports_page_cat_shopping')}</span>
                  </div>
                  <span className="font-numeric-data text-numeric-data">25%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-secondary-container ltr:border-l-secondary-container">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container">directions_car</span>
                    <span className="font-body-md text-body-md text-navy">{t('reports_page_cat_transport')}</span>
                  </div>
                  <span className="font-numeric-data text-numeric-data">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-outline ltr:border-l-outline">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">receipt_long</span>
                    <span className="font-body-md text-body-md text-navy">{t('reports_page_cat_bills')}</span>
                  </div>
                  <span className="font-numeric-data text-numeric-data">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Large Mockup */}
          <div className="md:col-span-2 mt-6 rounded-2xl overflow-hidden shadow-navy-large border border-outline-variant/20">
            <img 
              className="w-full h-auto object-cover" 
              alt="A highly detailed mockup of a premium digital financial dashboard displayed on a large screen or tablet."
              src={screen3}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16 bg-navy text-surface rounded-2xl relative overflow-hidden mb-12">
          <div className="relative z-10 px-5 md:px-12">
            <h2 className="font-headline-md text-headline-md mb-6 text-gold">{t('reports_page_cta_title')}</h2>
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-label-sm text-label-sm font-semibold hover:bg-white transition-colors duration-200">
              {t('reports_page_cta_btn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports