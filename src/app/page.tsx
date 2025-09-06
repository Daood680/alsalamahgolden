import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = [
    {
      title: 'مدارس الخندق',
      location: 'المدينة المنورة',
      image: '/images/Screenshot 2024-01-06 192438.png',
      description: 'مشروع تعليمي متميز في المدينة المنورة'
    },
    {
      title: 'مسرح ابو بكر سالم',
      location: 'الرياض',
      image: '/images/Screenshot 2024-01-06 193130.png',
      description: 'مسرح ثقافي حديث في قلب العاصمة'
    },
    {
      title: 'قرية موجان',
      location: 'جدة',
      image: '/images/Screenshot 2024-01-07 000608.png',
      description: 'مشروع سكني متكامل على الواجهة البحرية'
    }
  ]

  const services = [
    {
      icon: '🏗️',
      title: 'أعمال التشييد والإكساء',
      description: 'تنفيذ أعمال البناء والتشييد وفق أعلى المعايير'
    },
    {
      icon: '🛣️',
      title: 'أعمال الطرق والسدود',
      description: 'إنشاء وصيانة الطرق والسدود والأعمال الإنشائية'
    },
    {
      icon: '💡',
      title: 'أعمال الإنارة والكهرباء',
      description: 'تركيب وصيانة أنظمة الإنارة والكهرباء'
    },
    {
      icon: '💧',
      title: 'أعمال الصرف الصحي والمياه',
      description: 'تطوير أنظمة المياه والصرف الصحي'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-golden-primary to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/transparent-soil-icon-under-construction-icon-construction-ico-60482ac43bfab1.8933593816153422762457-removebg-preview.png"
                alt="Construction Icon"
                width={80}
                height={80}
                className="opacity-90"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              شركة السلامة الذهبية
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              تأسست عام 1430 هجري الموافق 2009 ميلادي لتكون رائدة في مجال المقاولات والتطوير العمراني
            </p>
            <div className="space-x-4 space-x-reverse">
              <Link href="/projects" className="github-button text-lg px-6 py-3">
                استعرض مشاريعنا
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-golden-primary px-6 py-3 rounded-md transition-colors duration-200">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-golden-secondary mb-6">من نحن</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                بفضل الله تعالى تأسست شركة السلامة الذهبية للمقاولات في عام 1430 هجري الموافق 2009 ميلادي 
                كاستجابة لتطورات العصر والنمو الملحوظ الذي شهدته النهضة العمرانية وقطاع المقاولات في 
                المملكة العربية السعودية.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                يقع المقر الرئيسي للشركة في المدينة المنورة المملكة العربية السعودية، وقد تم تحقيق 
                معدلات نمو قياسية ووضعت الشركة في مصاف الشركات الكبرى المصنفة بسبب احترام العمل 
                والخدمة الممتازة المعترف بها.
              </p>
              <Link href="/about" className="github-button">
                اقرأ المزيد
              </Link>
            </div>
            <div className="mt-8 lg:mt-0">
              <Image
                src="/images/9e209fbb-7c01-43dd-b6f9-6eb399a610f2.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golden-secondary mb-4">خدماتنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات في مجال المقاولات والإنشاءات
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="github-card text-center p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-golden-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golden-secondary mb-4">أبرز المشاريع المنجزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نفخر بتقديم مجموعة من أبرز المشاريع التي نفذناها بنجاح
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="github-button">
              عرض جميع المشاريع
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}