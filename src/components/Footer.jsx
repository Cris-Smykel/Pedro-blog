import logo from "../assets/logos/logo192.png";

export default function Footer() {
  return (
    <footer className="bg-[#111]">
      <div className="flex items-start justify-between gap-4 max-w-6xl p-8 m-auto">
        <picture>
          <img src={logo} className="w-24" />
        </picture>

        <div className="flex gap-20">
          <nav className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Sobre</h3>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-base text-white font-medium cursor-pointer"
                >
                  Footer 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white font-medium cursor-pointer"
                >
                  Footer 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white font-medium cursor-pointer"
                >
                  Footer 3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="p-4 flex justify-center border-t">
        <mark className="text-center text-white font-normal text-sm">
          Copyright © 2023 | Todos os direitos reservados.
        </mark>
      </div>
    </footer>
  );
}
