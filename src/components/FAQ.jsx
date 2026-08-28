import { useState } from 'react'
// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function FAQSection() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  // 3. استخدام الترجمة داخل البيانات
  const faqs = [
    {
      question: t('section_faq_q1'),
      answer: t('section_faq_a1')
    },
    {
      question: t('section_faq_q2'),
      answer: t('section_faq_a2')
    },
    {
      question: t('section_faq_q3'),
      answer: t('section_faq_a3')
    },
    {
      question: t('section_faq_q4'),
      answer: t('section_faq_a4')
    },
    {
      question: t('section_faq_q5'),
      answer: t('section_faq_a5')
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-surface-container-low py-16" id="faq">
      <div className="max-w-3xl mx-auto px-5 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-16 text-center tracking-tight">
          {/* استبدال عنوان القسم */}
          {t('faq_section_title')}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              open={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-navy">{faq.question}</span>
                <span className={`material-symbols-outlined transition-transform text-navy ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection