import '../styles/globals.css'
import {Nav} from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>  
        <title>My Frist app with Next 13</title>
      </head>
      <body className='App'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
