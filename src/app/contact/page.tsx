'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'العنوان',
      details: ['السعودية - المدينة المنورة']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'الهاتف',
      details: ['0534453479']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'البريد الإلكتروني',
      details: ['a.s.hajali@hotmail.com']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-golden-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في تحقيق مشاريعكم
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-golden-secondary mb-8">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden-primary focus:border-golden-primary"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden-primary focus:border-golden-primary"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden-primary focus:border-golden-primary"
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden-primary focus:border-golden-primary"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="مشروع جديد">مشروع جديد</option>
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="طلب عرض سعر">طلب عرض سعر</option>
                    <option value="شكوى">شكوى</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    نص الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden-primary focus:border-golden-primary"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="github-button w-full text-center"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold text-golden-secondary mb-8">معلومات التواصل</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-golden-primary bg-opacity-10 rounded-lg flex items-center justify-center text-golden-primary">
                      {info.icon}
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-semibold text-golden-secondary mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-golden-secondary mb-4">تابعنا على</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="https://www.facebook.com/alslamah.golden?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/alslamah_golden?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.187-2.19-1.187-3.529 0-1.339.439-2.581 1.187-3.529.749-.948 1.9-1.559 3.197-1.559 1.297 0 2.448.611 3.197 1.559.748.948 1.187 2.19 1.187 3.529 0 1.339-.439 2.581-1.187 3.529-.749.948-1.9 1.559-3.197 1.559zm7.718-6.936h-2.956v-1.041h2.956v1.041zm0-2.082h-2.956V6.929h2.956v1.041z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-12 github-card p-6">
                <h3 className="text-xl font-semibold text-golden-secondary mb-4">ساعات العمل</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>8:00 ص - 5:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span>السبت</span>
                    <span>9:00 ص - 2:00 م</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}