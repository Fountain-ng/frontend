import React from "react";
import "../styles/Navbar.modules.css";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return ( 
    <header>
      <a href="#" className="header__logo">
        <Image
          src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
          alt="Fountain FMCG Logo"
          width={200}
          height={40}
        />
      </a>

      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#products" className="navbar__link">SHOP</a>
        </li>
        <li className="navbar__item">
          <a href="#footer" className="navbar__link">STORES</a>
        </li>
        <li className="navbar__item">
          <a href="#footer" className="navbar__link">PRODUCTS</a>
        </li>
      </ul>

      <div className="navbar__cta">
        <a href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-search.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a>
        <a href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-cart.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a>
        <a href="" className="navbar__cta-btn">
          <Image 
          src="/bx-user.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a>
        <a href="" className="navbar__cta-btn">
          <Image 
          src="/bx-menu.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a>
      </div>
    </header>
  
  )
};








//   <nav className="navbar">
//     <div className="navbar__container">
//       <div className="navbar__logo">
//         <Image
//           src="/Fountain official logo dark txtAsset 4@4x-8 (1).png" // Path to your image relative to the public directory
//           alt="Fountain FMCG Logo" // Alt text for the image
//           width={300} // Set the width of the image
//           height={50} // Set the height of the image
//         />
//       </div>
//       <ul className="navbar__menu">
//         <li className="navbar__item products">
//           <div className="products">
//           <a href="#services" className="navbar__link">PRODUCTS </a>
//           <a href="#services" className="navbar__link">
//           <Image 
//             className="dropdown-icon"
//             src="/chevron-left.png"
//             width={20}
//             height={20}
//           /> 
//           </a>
//           </div>
//           {/* <div className="dropdown-content">
//             <a href="#services">Beverages</a>
//             <a href="#services">Food</a>
//             <a href="#services">Personal Care</a>
//             <a href="#services">Home Care</a>
//             </div> */}
//         </li>
//         <li className="navbar__item">
//           <a href="#products" className="navbar__link">ABOUT</a>
//         </li>
//         <li className="navbar__item">
//           <a href="#footer" className="navbar__link">SHOP</a>
//         </li>
//       </ul>
//       <div className="navbar__cta">
//         <a href="" className="navbar__cta-btn">
//           <Image 
//             src="/user.png"
//             alt="Fountain FMCG Logo"
//             width={70}
//           height={50}
//           />
//         </a>
//         <a href="" className="navbar__cta-btn-2">
//           SHOP NOW
//         </a>
//       </div>
//     </div>
//   </nav>
//   );
// }   

export default Navbar;