"use client";
import "./nav.styles.scss";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <div className="navigation">
      <Link className="logo-container" href="/">
        <Image src={navLogo} alt="Logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" href="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
        ) : (
          <Link className="nav-link" href="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
