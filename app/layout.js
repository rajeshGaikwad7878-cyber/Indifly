import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
export const metadata = {
  title: 'IndiFly',
  description: 'Demo landing page '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header/>
        <Navbar />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
