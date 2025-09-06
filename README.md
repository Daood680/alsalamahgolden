# شركة السلامة الذهبية للمقاولات – واجهة الموقع (Next.js)

## نظرة عامة
بنية مبدئية احترافية تعتمد Next.js 14 + TailwindCSS + Framer Motion + Three.js.

## الأوامر
```bash
npm install
npm run dev
```

## المجلدات
- app/  صفحات (App Router)
- components/ مكونات (مشاريع + 3D)
- data/projects.ts بيانات المشاريع (يمكن التوسع لاحقاً إلى CMS)
- public/images/ مسار الصور (أضف مجلدات مثل projects/villas/...) 

## إضافة مشروع جديد
انسخ كائن داخل المصفوفة في data/projects.ts وعدل القيم. تأكد من رفع الصور إلى المسار الصحيح.

## القادم
- Lightbox للصور
- نموذج 3D حقيقي (GLB)
- صفحة About / Contact
- تحسين SEO المتقدم + OG Images
- i18n (عربي/إنجليزي)

---
(جاري التطوير)