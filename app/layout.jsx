// import '../styles/reset.css';
import '../styles/style.scss'
import { Children } from "react";
import Nav from '../components/nav/nav.component'

export const metadata = {
  title: "CAPSTONE PROJECT",
  description: "My capstone project",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true} >
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
