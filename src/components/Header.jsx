import logo from "../assets/logos/logo192.png";
import { useState } from "react";

export default function Header() {
  const [navBarOn, setNavBarOn] = useState(() => false);

  const navBarAnchors = {
    About: "#",
    Blog: "#",
    Pricing: "#",
    Contact: "#",
  };

  function handleToggleNavBar() {
    setNavBarOn((prevNavBar) => !prevNavBar);
  }

  return (
    <header className="shadow-md border-b border-transparent fixed top-0 left-0 right-0 z-10 h-headerHeight">
      <div className="p-6 md:p-10 flex h-full relative items-center justify-between m-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <a href="#">
          <picture>
            <img src={logo} alt="React logo" className="w-14" />
          </picture>
        </a>

        <NavBar
          handleToggleNavBar={handleToggleNavBar}
          navBarAnchors={navBarAnchors}
          navBarOn={navBarOn}
        />

        <i
          onClick={handleToggleNavBar}
          className="icon-bars text-primary text-2xl cursor-pointer md:hidden"
        ></i>
      </div>
    </header>
  );
}

function NavBar(props) {
  const anchors = [];

  for (let key in props.navBarAnchors) {
    anchors.push(
      <Anchor key={key} value={key} url={props.navBarAnchors[key]} />
    );
  }

  return (
    <div
      className={`mobile-anchors-container ${
        props.navBarOn ? "active" : ""
      } md:bg-transparent md:static md:top-0 md:left-0 md:right-0 md:min-h-0 md:block p-0`}
    >
      <nav className="relative">
        <i
          onClick={props.handleToggleNavBar}
          className="absolute icon-xmark text-primary text-4xl cursor-pointer -top-28 -right-20 custom-right md:hidden"
        ></i>
        <ul className="mobile-anchors md:flex-row gap-10">{anchors}</ul>
      </nav>
    </div>
  );
}

function Anchor(props) {
  return (
    <li>
      <a
        title={`Ir para a seção ${props.value}`}
        href={props.url}
        className="text-lg text-primary focus:text-blue-400 font-medium hover:text-blue-400 transition duration-200"
      >
        {props.value}
      </a>
    </li>
  );
}
