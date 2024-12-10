'use client';
import React from "react";
import "../../styles/Navbar.css"
import Image from "next/image";
import Link from "next/link";
import Search from "@/icons/search";
import Menu from "@/icons/menu";
import User from "@/icons/user";
import { whiteLogo } from "@/images";
import Cart from "@/icons/shoppingcart";

const Navbar = () => {

  return (
    <header className="land-navbar">
      <Link href="/">
        <Image
          src={whiteLogo}
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      </Link>

      <div className="navbar__cta">
        <Link href="/signIn" className="navbar__cta-btn">
          <Search/>
        </Link>
        <Link href="/Brand" className="navbar__cta-btn">
          <Cart />
        </Link>
        <Link href="/Brand" className="navbar__cta-btn">
          <User/>
        </Link>
        <Link href="" className="navbar__cta-btn">
          <Menu/>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
