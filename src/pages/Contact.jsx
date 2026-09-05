import { useState } from 'react'
// 1. استدعاء Link من React Router
import { Link } from 'react-router-dom'
import mapImage from '../assets/Image+Background.png'
// 2. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function Contact() {
  // 3. تهيئة أداة الترجمة
  const { t } = useTranslation()

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-surface font-body-md-manrope antialiased flex flex-col pt-32">
      {/* Hero Section */}
      <div className="text-center mb-16 px-5 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-headline-xl-manrope text-headline-xl-manrope text-primary mb-4">
          {t('contact_page_title')}
        </h1>
        <p className="font-body-lg-manrope text-body-lg-manrope text-on-surface-variant max-w-2xl mx-auto">
          {t('contact_page_subtitle')}
        </p>
      </div>

      <div className="flex-grow px-5 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[16px] shadow-card-light border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-0 rtl:left-0 ltr:right-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary-fixed"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-headline-md-manrope text-headline-md-manrope text-primary">{t('contact_email')}</h3>
                  <p className="font-body-md-manrope text-body-md-manrope text-on-surface-variant">{t('contact_reply_time')}</p>
                </div>
              </div>
              <a className="font-label-lg-manrope text-label-lg-manrope text-primary hover:text-secondary transition-colors block rtl:text-right ltr:text-left" href="mailto:support@example.com">support@example.com</a>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-[16px] shadow-card-light border border-outline-variant/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline-md-manrope text-headline-md-manrope text-primary">{t('contact_hq')}</h3>
                  <p className="font-body-md-manrope text-body-md-manrope text-on-surface-variant">{t('contact_location')}</p>
                </div>
              </div>
              <div className="h-48 rounded-lg overflow-hidden relative bg-surface-container-high">
                <img 
                  src={mapImage} 
                  alt={t('contact_map_alt')} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-12 rounded-[16px] shadow-card-medium border border-outline-variant/20 relative">
            {/* Success State Overlay */}
            {formSubmitted && (
              <div className="absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-[16px]">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-headline-md-manrope text-headline-md-manrope text-primary mb-2">{t('contact_success_title')}</h3>
                <p className="font-body-md-manrope text-body-md-manrope text-on-surface-variant mb-6">{t('contact_success_msg')}</p>
                <button 
                  className="border-2 border-secondary text-secondary font-label-lg-manrope px-6 py-2 rounded-xl hover:bg-secondary/5 transition-colors"
                  onClick={resetForm}
                >
                  {t('contact_send_another')}
                </button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2 rtl:text-right ltr:text-left" htmlFor="name">{t('contact_form_name')}</label>
                  <div className="relative rounded-lg">
                    <span className="material-symbols-outlined absolute rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 text-outline">person</span>
                    <input 
                      className="w-full bg-[#F0F0F0] border-transparent rounded-lg py-3 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 font-body-md-manrope text-body-md-manrope text-primary focus:border-secondary focus:ring-0 transition-all placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-secondary" 
                      id="name" 
                      placeholder={t('contact_name_placeholder')} 
                      required 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2 rtl:text-right ltr:text-left" htmlFor="email">{t('contact_form_email')}</label>
                  <div className="relative rounded-lg">
                    <span className="material-symbols-outlined absolute rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input 
                      className="w-full bg-[#F0F0F0] border-transparent rounded-lg py-3 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 font-body-md-manrope text-body-md-manrope text-primary focus:border-secondary focus:ring-0 transition-all placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-secondary" 
                      id="email" 
                      placeholder="mohammed@example.com" 
                      required 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 rtl:text-right ltr:text-left" htmlFor="subject">{t('contact_form_subject')}</label>
                <div className="relative rounded-lg">
                  <span className="material-symbols-outlined absolute rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 text-outline">topic</span>
                  <select 
                    className="w-full bg-[#F0F0F0] border-transparent rounded-lg py-3 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 font-body-md-manrope text-body-md-manrope text-primary focus:border-secondary focus:ring-0 transition-all appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary rtl:text-right ltr:text-left" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="general">{t('contact_opt_general')}</option>
                    <option value="support">{t('contact_opt_support')}</option>
                    <option value="feedback">{t('contact_opt_feedback')}</option>
                    <option value="business">{t('contact_opt_business')}</option>
                  </select>
                  <span className="material-symbols-outlined absolute rtl:left-3 ltr:right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 rtl:text-right ltr:text-left" htmlFor="message">{t('contact_form_message')}</label>
                <div className="relative rounded-lg">
                  <textarea 
                    className="w-full bg-[#F0F0F0] border-transparent rounded-lg py-3 px-4 font-body-md-manrope text-body-md-manrope text-primary focus:border-secondary focus:ring-0 transition-all resize-none placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-secondary rtl:text-right ltr:text-left" 
                    id="message" 
                    placeholder={t('contact_msg_placeholder')} 
                    required 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <button className="w-full bg-primary text-on-primary font-label-lg-manrope px-6 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2 group" type="submit">
                <span className="">{t('contact_form_send_btn')}</span>
                <span className="material-symbols-outlined text-secondary rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform rtl:rotate-180 ltr:rotate-0">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Quick FAQ Section */}
        <div className="mt-12 bg-surface-container-low rounded-[24px] p-6 md:p-12 border border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="font-headline-lg-manrope text-headline-lg-manrope text-primary mb-2 rtl:text-right ltr:text-left">{t('quick_faq_title')}</h2>
              <p className="font-body-md-manrope text-body-md-manrope text-on-surface-variant rtl:text-right ltr:text-left">{t('quick_faq_subtitle')}</p>
            </div>
            
            {/* التعديل هنا: استخدام Link بدلاً من a */}
            <Link className="inline-flex items-center gap-2 text-secondary font-label-lg-manrope hover:text-secondary-fixed transition-colors" to="/faq">
              {t('view_all_faqs')}
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors cursor-pointer group">
              <h4 className="font-label-lg-manrope text-label-lg-manrope text-primary mb-2 group-hover:text-secondary transition-colors rtl:text-right ltr:text-left">{t('qfaq_q1')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 rtl:text-right ltr:text-left">{t('qfaq_a1')}</p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors cursor-pointer group">
              <h4 className="font-label-lg-manrope text-label-lg-manrope text-primary mb-2 group-hover:text-secondary transition-colors rtl:text-right ltr:text-left">{t('qfaq_q2')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 rtl:text-right ltr:text-left">{t('qfaq_a2')}</p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors cursor-pointer group">
              <h4 className="font-label-lg-manrope text-label-lg-manrope text-primary mb-2 group-hover:text-secondary transition-colors rtl:text-right ltr:text-left">{t('qfaq_q3')}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 rtl:text-right ltr:text-left">{t('qfaq_a3')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact