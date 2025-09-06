'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('الجميع')

  const projects = [
    {
      title: 'مدارس الخندق',
      location: 'المدينة المنورة',
      image: '/images/Screenshot 2024-01-06 192438.png',
      description: 'مشروع تعليمي متميز يضم مدارس حديثة ومرافق تعليمية متطورة',
      category: 'تعليمي'
    },
    {
      title: 'مسرح ابو بكر سالم',
      location: 'الرياض',
      image: '/images/Screenshot 2024-01-06 193130.png',
      description: 'مسرح ثقافي حديث مجهز بأحدث التقنيات الصوتية والمرئية',
      category: 'ثقافي'
    },
    {
      title: 'قرية موجان',
      location: 'جدة',
      image: '/images/Screenshot 2024-01-07 000608.png',
      description: 'مشروع سكني متكامل على الواجهة البحرية مع كافة الخدمات',
      category: 'سكني'
    },
    {
      title: 'مشروع البناء الحديث',
      location: 'الرياض',
      image: '/images/Screenshot 2024-01-14 145303.png',
      description: 'مجمع تجاري حديث في قلب العاصمة',
      category: 'تجاري'
    },
    {
      title: 'المجمع السكني الذهبي',
      location: 'جدة',
      image: '/images/Screenshot 2024-01-14 145437.png',
      description: 'مجمع سكني فاخر مع مرافق ترفيهية متنوعة',
      category: 'سكني'
    },
    {
      title: 'مركز التطوير التقني',
      location: 'الدمام',
      image: '/images/Screenshot 2024-01-14 151024.png',
      description: 'مركز حديث للتدريب والتطوير التقني',
      category: 'تعليمي'
    }
  ]

  const categories = ['الجميع', 'سكني', 'تجاري', 'تعليمي', 'ثقافي']

  const filteredProjects = activeFilter === 'الجميع' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-golden-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">مشاريعنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            استكشف مجموعة من أبرز المشاريع التي نفذناها بنجاح في مختلف أنحاء المملكة
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-golden-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title}
                location={project.location}
                image={project.image}
                description={project.description}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">لا توجد مشاريع في هذه الفئة حالياً</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-golden-secondary mb-4">
            هل لديك مشروع تود تنفيذه؟
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            نحن مستعدون لمساعدتك في تحويل رؤيتك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية
          </p>
          <a href="/contact" className="github-button text-lg px-8 py-3">
            ابدأ مشروعك الآن
          </a>
        </div>
      </section>
    </div>
  )
}