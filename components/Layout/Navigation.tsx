import React from "react";

// Asset Components
import Logo from "@/assets/svg/Logo";

// Components
import Cta from "@/components/Buttons/Cta";

export default function Navigation() {
  return (
    <nav className="flex justify-between">
      <section>
        <Logo />
      </section>
      <section className="flex">
        <ul>
          <li>Шаблони</li>
          <li>Цена</li>
          <li>Вход</li>
          <li>
            <Cta text="Създай Магазин"/>
          </li>
        </ul>
      </section>
    </nav>
  );
}
