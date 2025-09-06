import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="github-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/660754e9-7d54-4ac3-8a1a-c4757edf013e-removebg-preview.png"
                alt="شركة السلامة الذهبية"
                width={50}
                height={40}
                className="h-10 w-auto"
              />
              <span className="mr-3 text-lg font-bold text-golden-secondary">
                السلامة الذهبية
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              شركة السلامة الذهبية للمقاولات - تأسست عام 1430 هجري الموافق 2009 ميلادي
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-golden-secondary mb-4">معلومات التواصل</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-golden-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 text-sm">السعودية - المدينة المنورة</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-golden-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600 text-sm">0534453479</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-golden-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-600 text-sm">a.s.hajali@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-golden-secondary mb-4">تابعنا</h3>
            <div className="space-y-2">
              <Link 
                href="https://www.facebook.com/alslamah.golden?mibextid=LQQJ4d"
                className="flex items-center text-gray-600 hover:text-golden-primary transition-colors duration-200"
                target="_blank"
              >
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Link>
              <Link 
                href="https://www.instagram.com/alslamah_golden?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex items-center text-gray-600 hover:text-golden-primary transition-colors duration-200"
                target="_blank"
              >
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.187-2.19-1.187-3.529 0-1.339.439-2.581 1.187-3.529.749-.948 1.9-1.559 3.197-1.559 1.297 0 2.448.611 3.197 1.559.748.948 1.187 2.19 1.187 3.529 0 1.339-.439 2.581-1.187 3.529-.749.948-1.9 1.559-3.197 1.559zm7.718-6.936h-2.956v-1.041h2.956v1.041zm0-2.082h-2.956V6.929h2.956v1.041z"/>
                </svg>
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 شركة السلامة الذهبية للمقاولات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}