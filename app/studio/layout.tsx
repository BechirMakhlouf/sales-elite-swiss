export const metadata = {
  title: 'Sales Elite Swiss CMS',
  description: 'Sales Elite Swiss CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
