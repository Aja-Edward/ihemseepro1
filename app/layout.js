// import { Roboto } from 'next/font/google'
// import './globals.css'
// import StyledJsxRegistry from './registry'
// import Navbar from '@components/Navbar'
// import Footer from '@components/Footer'

// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   variable: '--font-roboto',
// })

// export const metadata = {
//   title: 'Ihemseepros - Leading Electrical & Electronic Services in Nigeria',
//   description:
//     'Ihemseepros is a top-tier electrical and electronic company in Nigeria, providing exceptional services including solar installation, air conditioning repairs and installation, house wiring, and more. Our expert team ensures reliable solutions and top-notch customer satisfaction.',
//   keywords:
//     'electrical services, electronic services, solar installation, AC repairs, house wiring, Nigeria',
//   category: 'Electrical and Electronic Services',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={roboto.variable}>
//       <body className={roboto.className}>
//         <StyledJsxRegistry>
//           <Navbar />
//           {children}
//           <Footer />
//         </StyledJsxRegistry>
//       </body>
//     </html>
//   )
// }



import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Ihemseepros - Leading Electrical & Electronic Services in Nigeria',
  description:
    'Ihemseepros is a top-tier electrical and electronic company in Nigeria, providing exceptional services including solar installation, air conditioning repairs and installation, house wiring, and more. Our expert team ensures reliable solutions and top-notch customer satisfaction.',
  keywords:
    'electrical services, electronic services, solar installation, AC repairs, house wiring, Nigeria',
  category: 'Electrical and Electronic Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}