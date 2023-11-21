import type { Metadata } from "next";
import "./globals.css";
import {notFound} from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'de'];

export const metadata: Metadata = {
  title: "Sales Elite Swiss",
  description: "Your Success, Our Expertise.",
};

export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
//  
//  
