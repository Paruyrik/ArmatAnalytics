import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveclassName: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the className in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveclassName: "is-active",
            })
          : this.setState({
              navBarActiveclassName: "",
            });
      }
    );
  };
  render() {
    return (
      <>
        <header
          id="header"
          className="u-header u-header--modern u-header--floating-lg"
        >
          <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
            <div id="logoAndNav" className="container">
              <div className="u-header__section u-header--floating-lg__inner">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item" title="Logo">
                    {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
                    Armat Logo
                  </Link>
                  {/* Hamburger menu */}
                  <div
                    className={`navbar-burger burger ${this.state.navBarActiveclassName}`}
                    data-target="navMenu"
                    onClick={() => this.toggleHamburger()}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveclassName}`}
              >
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to="/home">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/services">
                    Services
                  </Link>
                  <Link className="navbar-item" to="/ourWork">
                    Our Work
                  </Link>
                  <Link className="navbar-item" to="/jobs">
                    Jobs
                  </Link>
                  {/* <Link className="navbar-item" to="/blog">
                    Blog
                  </Link> */}
                  <Link className="navbar-item" to="/contact">
                    Contact Us
                  </Link> 
                </div>
                {/* <div className="navbar-end has-text-centered">
                  <a
                    className="navbar-item"
                    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
};
//   render() {
//     return (
//       <header
//         id="header"
//         className="u-header u-header--modern u-header--floating-lg"
//       >
//         <div id="logoAndNav" className="container">
//           <div className="u-header__section u-header--floating-lg__inner">
//             <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
//               <div className="u-header__navbar-brand-wrapper">
//                 <a
//                   className="navbar-brand u-header__navbar-brand"
//                   href="index.html"
//                   aria-label="Space"
//                 >
//                   <img
//                     className="u-header__navbar-brand-default"
//                     src="..\..\assets\svg\logos\logo.svg"
//                     alt="Logo"
//                   />
//                   <img
//                     className="u-header__navbar-brand-mobile"
//                     src="..\..\assets\svg\logos\logo-short.svg"
//                     alt="Logo"
//                   />
//                 </a>
//               </div>
//               <button
//                 type="button"
//                 className="navbar-toggler btn u-hamburger u-header__hamburger"
//                 aria-label="Toggle navigation"
//                 aria-expanded="false"
//                 aria-controls="navBar"
//                 data-toggle="collapse"
//                 data-target="#navBar"
//               >
//                 <span className="d-none d-sm-inline-block">Menu</span>
//                 <span id="hamburgerTrigger" className="u-hamburger__box ml-3">
//                   <span className="u-hamburger__inner"></span>
//                 </span>
//               </button>

//               <div
//                 id="navBar"
//                 className="collapse navbar-collapse u-header__navbar-collapse py-0"
//               >
//                 <ul className="navbar-nav u-header__navbar-nav">
//                   <li
//                     className="nav-item hs-has-sub-menu u-header__nav-item"
//                     data-event="hover"
//                     data-animation-in="fadeInUp"
//                     data-animation-out="fadeOut"
//                   >
//                     <a
//                       id="homeMegaMenu"
//                       className="nav-link u-header__nav-link"
//                       href="#"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                       aria-labelledby="homeSubMenu"
//                     >
//                       Home
//                       <i className="fa fa-angle-down u-header__nav-link-icon"></i>
//                     </a>

//                     <ul
//                       id="homeSubMenu"
//                       className="list-inline hs-sub-menu u-header__sub-menu mb-0"
//                       style={{minWidth: "220px"}}
//                       aria-labelledby="homeMegaMenu"
//                     >
//                       <li className="dropdown-item hs-has-sub-menu">
//                         <a
//                           id="navLinkHomeclassNameic"
//                           className="nav-link u-header__sub-menu-nav-link"
//                           href="#"
//                           aria-haspopup="true"
//                           aria-expanded="false"
//                           aria-controls="navSubmenuHomeclassNameic"
//                         >
//                           classNameic
//                           <i className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></i>
//                         </a>

//                         <ul
//                           id="navSubmenuHomeclassNameic"
//                           className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-offset"
//                           style={{minWidth: "220px"}}
//                           aria-labelledby="navLinkHomeclassNameic"
//                         >
//                           <li className="dropdown-item u-header__sub-menu-list-item">
//                             <a
//                               className="nav-link u-header__sub-menu-nav-link"
//                               href="index.html"
//                             >
//                               Default
//                             </a>
//                           </li>
//                           <li className="dropdown-item u-header__sub-menu-list-item">
//                             <a
//                               className="nav-link u-header__sub-menu-nav-link"
//                               href="classNameic-agency.html"
//                             >
//                               Agency
//                             </a>
//                           </li>
//                           <li className="dropdown-item u-header__sub-menu-list-item">
//                             <a
//                               className="nav-link u-header__sub-menu-nav-link"
//                               href="classNameic-business.html"
//                             >
//                               Business
//                             </a>
//                           </li>
//                           <li className="dropdown-item u-header__sub-menu-list-item">
//                             <a
//                               className="nav-link u-header__sub-menu-nav-link"
//                               href="classNameic-start-up.html"
//                             >
//                               Start-Up
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     );
//   }
// };

export default Navbar;
