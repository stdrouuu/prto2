import './globals.css'

export const metadata = {
  title: 'Brandon Jeremiah Sutedja | UKRIDA Portfolio',
  description: 'Portfolio of Brandon Jeremiah Sutedja from UKRIDA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light sm:scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  )
}
