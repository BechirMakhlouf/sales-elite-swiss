import type { Metadata } from "next";
import "@/app/globals.css";

import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Sales Elite Swiss",
  description: "Your Success, Our Expertise.",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html>
//       <body>{children}</body>
//     </html>
//   );
// }

// Can be imported from a shared config
const locales = ["en", "de"] as any;

export default function LocaleLayout({ children, params: { locale } }: any) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
