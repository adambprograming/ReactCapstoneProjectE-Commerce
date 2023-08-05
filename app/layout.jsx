// import '../styles/reset.css';
import "../styles/style.scss";
import { Children } from "react";
import Nav from "../components/nav/nav.component";
import { UserProvider } from "../contexts/user.context";
import { CategoriesProvider } from "../contexts/categories.context";
import { CartProvider } from "../contexts/cart.context";

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
      <body suppressHydrationWarning={true}>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <div className="main">
                <div className="gradient" />
              </div>
              <main className="app">
                <Nav />
                {children}
              </main>
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
