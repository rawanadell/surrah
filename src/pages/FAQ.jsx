import { useState } from 'react'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function FAQ() {
  // 2. تهيئة الترجمة
  const { t } = useTranslation()
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id)
  }

  // 3. استخدام الترجمة داخل البيانات
  const faqData = {
    general: [
      {
        id: 'general-1',
        question: t('faq_q1'),
        answer: t('faq_a1')
      },
      {
        id: 'general-2',
        question: t('faq_q2'),
        answer: t('faq_a2')
      }
    ],
    features: [
      {
        id: 'features-1',
        question: t('faq_q3'),
        answer: t('faq_a3')
      },
      {
        id: 'features-2',
        question: t('faq_q4'),
        answer: t('faq_a4')
      },
      {
        id: 'features-3',
        question: t('faq_q5'),
        answer: t('faq_a5')
      }
    ],
    privacy: [
      {
        id: 'privacy-1',
        question: t('faq_q6'),
        answer: t('faq_a6')
      },
      {
        id: 'privacy-2',
        question: t('faq_q7'),
        answer: t('faq_a7')
      }
    ]
  }

  return (
    <div className="min-h-screen bg-surface font-body-md antialiased flex flex-col pt-[88px]">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto px-5 md:px-12 py-6 md:py-12 mb-12">
        <h1 className="font-headline-xl-manrope text-headline-xl-manrope text-primary mb-4">
          {t('faq_title')}
        </h1>
        <p className="font-body-lg-manrope text-body-lg-manrope text-on-surface-variant">
          {t('faq_subtitle')}
        </p>
      </header>

      {/* FAQ Categories & Accordions */}
      <div className="flex-grow px-5 md:px-12 max-w-4xl mx-auto mb-12">
        <div className="space-y-6">
          {/* Category: General */}
          <section>
            <h2 className="font-headline-md-manrope text-headline-md-manrope text-primary-container border-b border-outline-variant/50 pb-2 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">info</span>
              {t('faq_cat_general')}
            </h2>
            <div className="space-y-4">
              {faqData.general.map((faq) => (
                <div 
                  key={faq.id}
                  className={`bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden transition-all hover:border-secondary/50 ${
                    activeFaq === faq.id ? 'border-secondary/50' : ''
                  }`}
                >
                  <button 
                    className="w-full text-right ltr:text-left px-6 py-4 flex justify-between items-center font-label-lg-manrope text-label-lg-manrope text-on-surface focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="">{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                      activeFaq === faq.id ? 'rotate-180' : ''
                    }`}>expand_more</span>
                  </button>
                  <div className={`px-6 pb-4 pt-0 text-on-surface-variant font-body-md-manrope text-body-md-manrope border-t border-outline-variant/20 ${
                    activeFaq === faq.id ? 'block' : 'hidden'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Category: Features */}
          <section>
            <h2 className="font-headline-md-manrope text-headline-md-manrope text-primary-container border-b border-outline-variant/50 pb-2 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">featured_play_list</span>
              {t('faq_cat_features')}
            </h2>
            <div className="space-y-4">
              {faqData.features.map((faq) => (
                <div 
                  key={faq.id}
                  className={`bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden transition-all hover:border-secondary/50 ${
                    activeFaq === faq.id ? 'border-secondary/50' : ''
                  }`}
                >
                  <button 
                    className="w-full text-right ltr:text-left px-6 py-4 flex justify-between items-center font-label-lg-manrope text-label-lg-manrope text-on-surface focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="">{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                      activeFaq === faq.id ? 'rotate-180' : ''
                    }`}>expand_more</span>
                  </button>
                  <div className={`px-6 pb-4 pt-0 text-on-surface-variant font-body-md-manrope text-body-md-manrope border-t border-outline-variant/20 ${
                    activeFaq === faq.id ? 'block' : 'hidden'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Category: Offline & Privacy */}
          <section>
            <h2 className="font-headline-md-manrope text-headline-md-manrope text-primary-container border-b border-outline-variant/50 pb-2 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">shield_lock</span>
              {t('faq_cat_privacy')}
            </h2>
            <div className="space-y-4">
              {faqData.privacy.map((faq) => (
                <div 
                  key={faq.id}
                  className={`bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden transition-all hover:border-secondary/50 ${
                    activeFaq === faq.id ? 'border-secondary/50' : ''
                  }`}
                >
                  <button 
                    className="w-full text-right ltr:text-left px-6 py-4 flex justify-between items-center font-label-lg-manrope text-label-lg-manrope text-on-surface focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="">{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                      activeFaq === faq.id ? 'rotate-180' : ''
                    }`}>expand_more</span>
                  </button>
                  <div className={`px-6 pb-4 pt-0 text-on-surface-variant font-body-md-manrope text-body-md-manrope border-t border-outline-variant/20 ${
                    activeFaq === faq.id ? 'block' : 'hidden'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-container rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-secondary/20">
          <h3 className="font-headline-md-manrope text-headline-md-manrope text-on-primary-container mb-4">
            {t('faq_not_found')}
          </h3>
          <p className="font-body-md-manrope text-body-md-manrope text-on-primary-container/80 mb-6 max-w-md">
            {t('faq_support_desc')}
          </p>
          <a className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-8 py-3 rounded-xl font-label-lg-manrope text-label-lg-manrope hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md" href="/contact">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            {t('contact_us_btn')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ