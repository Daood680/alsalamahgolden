import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
const cairo = Cairo({ subsets:['arabic'], weight:['400','500','600','700'] });
export const metadata: Metadata = { title:'شركة السلامة الذهبية للمقاولات', description:'مقاولات – تنفيذ مشاريع سكنية وتجارية وبنية تحتية بمعايير عالية', openGraph:{ title:'شركة السلامة الذهبية للمقاولات', type:'website', locale:'ar_SA', siteName:'Alsalamah Golden' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="ar" dir="rtl"><body className={`${cairo.className} bg-slateDeep text-white antialiased`}>{children}</body></html>); }