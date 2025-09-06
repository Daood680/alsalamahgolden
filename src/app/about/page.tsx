import Image from 'next/image'

export default function About() {
  const goals = [
    {
      title: 'الوقت والمواصفات',
      description: 'تنفيذ أعمال المقاولات وفق جداول زمنية محددة مسبقاً بالمواصفات والشروط المطلوبة من أي جهة'
    },
    {
      title: 'الدقة',
      description: 'الدقة في تنفيذ الأعمال وفق المخططات والرسومات المطلوبة'
    },
    {
      title: 'التدريب والتطوير',
      description: 'تدريب وتطوير الشباب السعودي والموظفين لرفد سوق العمل بالموظفين أصحاب الكفاءة'
    }
  ]

  const stats = [
    { number: '2009', label: 'سنة التأسيس' },
    { number: '15+', label: 'سنوات من الخبرة' },
    { number: '100+', label: 'مشروع منجز' },
    { number: '50+', label: 'عميل راضٍ' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-golden-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto">
            تعرف على قصة شركة السلامة الذهبية ورؤيتها ورسالتها
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-golden-secondary mb-6">قصة الشركة</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  بفضل الله تعالى تأسست شركة السلامة الذهبية للمقاولات في عام 1430 هجري الموافق 2009 ميلادي 
                  كاستجابة لتطورات العصر والنمو الملحوظ الذي شهدته النهضة العمرانية وقطاع المقاولات في 
                  المملكة العربية السعودية.
                </p>
                <p className="leading-relaxed">
                  يقع المقر الرئيسي للشركة في المدينة المنورة المملكة العربية السعودية، وقد تم تحقيق 
                  معدلات نمو قياسية ووضعت الشركة في مصاف الشركات الكبرى المصنفة بسبب احترام العمل 
                  والخدمة الممتازة المعترف بها والتي كانت مرادفة للسرعة والالتزام بالجداول الزمنية والمعايير المتبعة.
                </p>
                <p className="leading-relaxed">
                  وقبل كل ذلك كان توفيق الله السبب الرئيسي في نجاح الشركة والوصول إلى ما هي عليه اليوم 
                  من مكانة مرموقة في سوق المقاولات السعودي.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <Image
                src="/images/3bdefd7b-5a11-483c-bda9-4cf19fd63c5c.jpg"
                alt="Company Building"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-golden-primary bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golden-secondary mb-4">إنجازاتنا بالأرقام</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-golden-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golden-secondary mb-4">أهداف الشركة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نسعى لتحقيق أهداف طموحة تضعنا في المقدمة دائماً
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="github-card p-8 text-center">
                <div className="w-16 h-16 bg-golden-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-golden-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-golden-secondary mb-4">
                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="github-card p-8">
              <h3 className="text-2xl font-bold text-golden-secondary mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشركة الرائدة في مجال المقاولات والتطوير العمراني في المملكة العربية السعودية، 
                ونساهم في بناء مستقبل عمراني مستدام يواكب رؤية المملكة 2030.
              </p>
            </div>
            <div className="github-card p-8">
              <h3 className="text-2xl font-bold text-golden-secondary mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم خدمات مقاولات متميزة تتميز بالجودة والالتزام بالمواعيد والمعايير العالمية، 
                مع المساهمة في تطوير الكوادر السعودية وخدمة المجتمع.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}