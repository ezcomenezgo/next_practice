/*
 * @Author:Claire Li
 * @Date:2024-07-06 17:56:38
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-04 23:44:41
 * @Description:
 */
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
