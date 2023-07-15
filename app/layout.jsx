// import '../styles/reset.css';
import { Children } from 'react';

export const metadata = {
    title: "CAPSTONE PROJECT",
    description: 'My capstone project'
}

const RootLayout = ( {children} ) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' /> 
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout