import screen222 from '../assets/merged.png';
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next';

function ReportsSection() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-surface" id="reports">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {t('reports_title_1')} <span className="gold-gradient-text">{t('reports_title_2')}</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('reports_subtitle')}
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          {/* Daily / Weekly Summary */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card flex flex-col gap-4 relative overflow-hidden group">
            {/* تم ضبط الخط ليكون يميناً في العربي ويساراً في الإنجليزي */}
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-gold"></div>
            
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-navy">{t('reports_weekly_summary')}</h3>
              <span className="material-symbols-outlined text-outline">calendar_today</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20">
                <span className="text-sm text-on-surface-variant block mb-1">{t('reports_income')}</span>
                <span className="text-xl font-semibold text-gold">{t('reports_income_value')}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20">
                <span className="text-sm text-on-surface-variant block mb-1">{t('reports_expenses')}</span>
                <span className="text-xl font-semibold text-navy">{t('reports_expenses_value')}</span>
              </div>
            </div>
            
            <div className="flex-1 min-h-[150px] relative border-t border-outline-variant/30 pt-4">
              {/* Simple CSS Bar Chart Representation */}
              <div className="absolute inset-0 flex items-end justify-between px-2 pt-4 pb-2">
                <div className="w-8 bg-gold/80 h-3/4 rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-8 bg-navy/80 h-1/2 rounded-t-sm group-hover:bg-navy transition-colors"></div>
                <div className="w-8 bg-gold/80 h-full rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-8 bg-navy/80 h-2/3 rounded-t-sm group-hover:bg-navy transition-colors"></div>
                <div className="w-8 bg-gold/80 h-1/3 rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-8 bg-navy/80 h-5/6 rounded-t-sm group-hover:bg-navy transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-navy"></div>
            
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-navy">{t('reports_income_vs_expenses')}</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-sm"><span className="w-3 h-3 rounded-full bg-gold"></span> {t('reports_income')}</span>
                <span className="flex items-center gap-1 text-sm"><span className="w-3 h-3 rounded-full bg-navy"></span> {t('reports_expenses')}</span>
              </div>
            </div>
            
            <div className="flex-1 min-h-[200px] flex items-end justify-around pb-4 relative border-b border-outline-variant/30">
              {/* Fake Chart */}
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[80%] rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-4 bg-navy h-[60%] rounded-t-sm group-hover:bg-navy transition-colors"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[90%] rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-4 bg-navy h-[40%] rounded-t-sm group-hover:bg-navy transition-colors"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[70%] rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-4 bg-navy h-[85%] rounded-t-sm group-hover:bg-navy transition-colors"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-4 bg-gold h-[100%] rounded-t-sm group-hover:bg-gold transition-colors"></div>
                <div className="w-4 bg-navy h-[50%] rounded-t-sm group-hover:bg-navy transition-colors"></div>
              </div>
            </div>
            
            <div className="flex justify-around text-sm text-on-surface-variant">
              <span>{t('month_jan')}</span>
              <span>{t('month_feb')}</span>
              <span>{t('month_mar')}</span>
              <span>{t('month_apr')}</span>
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-navy-card md:col-span-2 relative overflow-hidden">
            <div className="absolute rtl:right-0 ltr:left-0 top-0 bottom-0 w-1 bg-gold"></div>
            
            <h3 className="text-xl font-semibold text-navy mb-6">{t('reports_where_money_goes')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Circular Chart Placeholder - تم ضبط الحدود للاتجاهين */}
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center rounded-full border-[16px] border-navy border-t-gold rtl:border-r-gold/50 ltr:border-l-gold/50 shadow-inner hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="block text-xl font-bold text-navy">100%</span>
                  <span className="text-sm text-on-surface-variant">{t('reports_total')}</span>
                </div>
              </div>
              
              {/* Legend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-gold ltr:border-l-gold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold">restaurant</span>
                    <span className="text-base text-navy">{t('reports_cat_food')}</span>
                  </div>
                  <span className="text-xl font-semibold">35%</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-navy ltr:border-l-navy">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-navy">shopping_bag</span>
                    <span className="text-base text-navy">{t('reports_cat_shopping')}</span>
                  </div>
                  <span className="text-xl font-semibold">25%</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-secondary-container ltr:border-l-secondary-container">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container">directions_car</span>
                    <span className="text-base text-navy">{t('reports_cat_transport')}</span>
                  </div>
                  <span className="text-xl font-semibold">20%</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors rtl:border-r-4 ltr:border-l-4 rtl:border-r-outline ltr:border-l-outline">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">receipt_long</span>
                    <span className="text-base text-navy">{t('reports_cat_bills')}</span>
                  </div>
                  <span className="text-xl font-semibold">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="md:col-span-2 mt-6 rounded-2xl shadow-navy-large border border-outline-variant/20 overflow-hidden w-full bg-surface-container-lowest" style={{ aspectRatio: '1182/661' }}>
            <img
              src={screen222}
              alt="screen dashboard"
              className="w-full h-full object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportsSection;