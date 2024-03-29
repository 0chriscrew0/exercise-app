import './globals.css'
import { Roboto_Mono } from '@next/font/google'

const roboto = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${roboto.className} mx-8 my-12`}>{children}</body>
    </html>
  )
}
