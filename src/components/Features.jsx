// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function FeaturesSection() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  // 3. استخدام الترجمة داخل البيانات
  const features = [
    {
      icon: 'add_circle',
      bgColor: 'bg-primary-fixed',
      title: t('feature_add_income_title'),
      description: t('feature_add_income_desc'),
      featured: false
    },
    {
      icon: 'remove_circle',
      bgColor: 'bg-secondary-fixed',
      title: t('feature_add_expense_title'),
      description: t('feature_add_expense_desc'),
      featured: true
    },
    {
      icon: 'category',
      bgColor: 'bg-surface-variant',
      title: t('feature_categories_title'),
      description: t('feature_categories_desc'),
      featured: false
    },
    {
      icon: 'calendar_today',
      bgColor: 'bg-primary-fixed',
      title: t('feature_daily_reports_title'),
      description: t('feature_daily_reports_desc'),
      featured: false
    },
    {
      icon: 'date_range',
      bgColor: 'bg-secondary-fixed',
      title: t('feature_weekly_reports_title'),
      description: t('feature_weekly_reports_desc'),
      featured: false
    },
    {
      icon: 'monitoring',
      bgColor: 'bg-surface-variant',
      title: t('feature_monthly_reports_title'),
      description: t('feature_monthly_reports_desc'),
      featured: false
    }
  ]

  return (
    <section className="py-32 bg-surface" id="features">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/20 border border-secondary-fixed/30 mb-6">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-sm">verified</span>
            <span className="text-secondary-fixed-dim text-sm uppercase tracking-wider font-semibold">
              {t('features_badge')}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {t('features_heading_1')} <span className="gold-gradient-text">{t('features_heading_2')}</span>
          </h2>
          
          <p className="text-lg text-on-surface-variant/80">
            {t('features_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-surface p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden ${
                /* تم تعديل هذا السطر ليدعم الاتجاهين */
                feature.featured ? 'rtl:border-r-4 ltr:border-l-4 rtl:border-r-secondary-fixed-dim ltr:border-l-secondary-fixed-dim' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-2 group-hover:scale-105 transition-transform`}>
                <span className="material-symbols-outlined text-navy" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-on-background">{feature.title}</h3>
              <p className="text-base text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection