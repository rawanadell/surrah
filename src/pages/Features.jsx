// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function Features() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  // 3. استخدام الترجمة داخل البيانات
  const features = [
    {
      icon: 'account_balance_wallet',
      bgColor: 'bg-primary-fixed',
      title: t('feat_add_income_title'),
      description: t('feat_add_income_desc'),
      featured: false
    },
    {
      icon: 'payments',
      bgColor: 'bg-secondary-fixed',
      title: t('feat_add_expense_title'),
      description: t('feat_add_expense_desc'),
      featured: true
    },
    {
      icon: 'category',
      bgColor: 'bg-surface-variant',
      title: t('feat_add_category_title'),
      description: t('feat_add_category_desc'),
      featured: false
    },
    {
      icon: 'insert_chart',
      bgColor: 'bg-primary-fixed',
      title: t('feat_daily_reports_title'),
      description: t('feat_daily_reports_desc'),
      featured: false
    },
    {
      icon: 'monitoring',
      bgColor: 'bg-secondary-fixed',
      title: t('feat_weekly_reports_title'),
      description: t('feat_weekly_reports_desc'),
      featured: false
    },
    {
      icon: 'pie_chart',
      bgColor: 'bg-surface-variant',
      title: t('feat_monthly_reports_title'),
      description: t('feat_monthly_reports_desc'),
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-surface font-body-md antialiased flex flex-col">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto px-5 md:px-12 py-12 md:py-24">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4">
          {t('features_page_title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {t('features_page_subtitle')}
        </p>
      </header>

      {/* Features Grid */}
      <div className="flex-grow px-5 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-surface p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden ${
                feature.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {feature.featured && (
                /* تم ضبط الخط ليدعم الاتجاهين */
                <div className="absolute top-0 rtl:right-0 ltr:left-0 w-1 h-full bg-secondary-fixed-dim"></div>
              )}
              <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-2`}>
                <span className="material-symbols-outlined text-navy" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background">{feature.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
            </div>
          ))}

          {/* Offline Support Feature */}
          <div className="rounded-2xl p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-3 bg-slate-900 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* تم ضبط المحاذاة لتدعم الاتجاهين */}
              <div className="flex-grow rtl:text-right ltr:text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                    wifi_off
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-2">{t('feat_offline_title')}</h3>
                <p className="font-body-md text-body-md text-white/80">
                  {t('feat_offline_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-surface-container-low p-12 rounded-[24px] w-full max-w-3xl mx-auto mb-12 border border-outline-variant/20">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6">
            {t('features_cta_title')}
          </h2>
          <button className="btn-primary font-body-lg text-body-lg px-8 py-3 hover:scale-95 transition-transform duration-150">
            {t('start_now')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Features