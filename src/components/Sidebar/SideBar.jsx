import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FcMultipleInputs } from "react-icons/fc";
import { GoDatabase } from "react-icons/go";
import { GiDecapitation } from "react-icons/gi";
import { SiCashapp } from "react-icons/si";
import { FiClipboard } from "react-icons/fi";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/input",
    name: "Input",
    icon: <FcMultipleInputs />,
  },
  {
    path: "/MacroData",
    name: "Macro Data",
    icon: <GoDatabase />,
  },
  {
    path: "/loan-cash-flow",
    name: "Loan Cashflow",
    icon: <SiCashapp />,
  },
  {
    path: "/Pd",
    name: "PD",
    icon: <BiAnalyse />,
  },
  {
    path: "/ecl-summary",
    name: "ECL Summary",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/riskcapital",
    name: "Risk Capital Assessment",
    icon: <GiDecapitation />,
  },
  {
    path: "/reporst",
    name: "Reports",
    icon: <FiClipboard />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 14,
            },
          }}
          className={`sidebar `}>
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo">
                  Grant Thornton
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text">
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
