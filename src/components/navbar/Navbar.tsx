/** @format */

import { useState } from "react";
import Konto from "../konto/Konto";

function LiElement(props: { href: string; text: string; className?: string }) {
  return (
    <li
      className={
        props.className ||
        "p-1 text-2xl text-techGreen font-poppins font-black  border-transparent  hover:border-b-2 border-techGreen"
      }
    >
      <a className="hover:text-techGreen" href={props.href}>
        {props.text}
      </a>
    </li>
  );
}

export default function Navbar() {
  const navItems = [
    { href: "/o-nas", text: "O nas" },
    { href: "/contact", text: "Kontakt" },
    { href: "/mentoring", text: "Mentoring" },
    { href: "/blog", text: "Blog" },
    { href: "/kursy", text: "Kursy" },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  const showAccountMenu = () => {
    setModalOpen(!isModalOpen);
  };
  if (isModalOpen) {
    return (
      <>
        <Konto />
        <div>
          <nav>
            <ul className="flex justify-around items-center p-5 bg-none mt-10 ">
              <li className="">
                <a href="/">
                  <img
                    className=" w-24 ratio-square bg-white rounded-full"
                    src="public/logo.png"
                    alt=""
                  />
                </a>
              </li>
              {navItems.map((item) => (
                <LiElement href={item.href} text={item.text} />
              ))}
              <li>
                <button onClick={showAccountMenu}>
                  <img
                    className="w-12 ratio-square bg-white rounded-full"
                    src="public/user.png"
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <nav className="">
            <ul className="flex justify-around items-center p-5 bg-none mt-10 ">
              <li className="">
                <a href="/">
                  <img
                    className=" w-24 ratio-square bg-white rounded-full"
                    src="public/logo.png"
                    alt=""
                  />
                </a>
              </li>
              {navItems.map((item) => (
                <LiElement href={item.href} text={item.text} />
              ))}
              <li>
                <button onClick={showAccountMenu}>
                  <img
                    className="w-12 ratio-square bg-white rounded-full"
                    src="public/user.png"
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
