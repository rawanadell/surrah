// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function ContactSection() {
  // 2. تشغيل أداة الترجمة
  const { t } = useTranslation()

  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Right Side: Contact Details */}
          <div className="order-2 lg:order-2 space-y-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
                {/* 3. استبدال الكلمات */}
                {t('contact_with')} <span className="gold-gradient-text">{t('surrah_experts')}</span>
              </h2>
              <p className="text-lg text-on-surface-variant/80 leading-relaxed max-w-md">
                {t('contact_desc')}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed-dim/20 border border-secondary-fixed-dim/30 flex items-center justify-center transition-colors group-hover:bg-secondary-fixed-dim/30">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy mb-1">{t('official_email')}</p>
                  <p className="text-on-surface-variant font-medium">support@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed-dim/20 border border-secondary-fixed-dim/30 flex items-center justify-center transition-colors group-hover:bg-secondary-fixed-dim/30">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy mb-1">{t('headquarters')}</p>
                  <p className="text-on-surface-variant font-medium">{t('riyadh_ksa')}</p>
                  <p className="text-xs text-on-surface-variant/60 mt-1 uppercase tracking-widest">{t('kafd')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed-dim/20 border border-secondary-fixed-dim/30 flex items-center justify-center transition-colors group-hover:bg-secondary-fixed-dim/30">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">schedule</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy mb-1">{t('working_hours')}</p>
                  <p className="text-on-surface-variant font-medium">{t('working_days_times')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Premium Contact Form */}
          <div className="order-1 lg:order-1 bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm text-navy px-1">{t('full_name')}</label>
                  <input 
                    className="w-full px-6 py-4 rounded-xl border border-outline-variant/30 focus:border-secondary-fixed-dim focus:ring-1 focus:ring-secondary-fixed-dim outline-none transition-all bg-surface/50 backdrop-blur-sm placeholder:text-on-surface-variant/40" 
                    placeholder={t('enter_full_name')} 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-navy px-1">{t('email_address')}</label>
                  <input 
                    className="w-full px-6 py-4 rounded-xl border border-outline-variant/30 focus:border-secondary-fixed-dim focus:ring-1 focus:ring-secondary-fixed-dim outline-none transition-all bg-surface/50 backdrop-blur-sm placeholder:text-on-surface-variant/40" 
                    placeholder="name@example.com" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm text-navy px-1">{t('subject')}</label>
                <input 
                  className="w-full px-6 py-4 rounded-xl border border-outline-variant/30 focus:border-secondary-fixed-dim focus:ring-1 focus:ring-secondary-fixed-dim outline-none transition-all bg-surface/50 backdrop-blur-sm placeholder:text-on-surface-variant/40" 
                  placeholder={t('how_can_we_help')} 
                  type="text"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm text-navy px-1">{t('message')}</label>
                <textarea 
                  className="w-full px-6 py-4 rounded-xl border border-outline-variant/30 focus:border-secondary-fixed-dim focus:ring-1 focus:ring-secondary-fixed-dim outline-none transition-all bg-surface/50 backdrop-blur-sm placeholder:text-on-surface-variant/40 resize-none" 
                  placeholder={t('write_details_here')} 
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                className="w-full bg-navy text-on-primary py-5 rounded-xl text-sm font-medium hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group" 
                type="submit"
              >
                <span>{t('send_message')}</span>
                <span className="material-symbols-outlined text-secondary-fixed-dim rtl:group-hover:translate-x-[-4px] ltr:group-hover:translate-x-[4px] transition-transform">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection