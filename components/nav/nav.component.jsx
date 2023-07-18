import "./nav.styles.scss";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" href="/">
        <Image src={navLogo} alt="Logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" href="/shop">
          SHOP
        </Link>
        <Link className="nav-link" href="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
