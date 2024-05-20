"use client";
import { usePathname } from "next/navigation";

import { Phone } from "@phosphor-icons/react";
import {
  NavbarContainer,
  NavList,
  NavItem,
  NavLink,
  Line,
  Telefone,
} from "./styles";

interface NavLinkProps {
  name: string;
  href: string;
}

const navLinks: NavLinkProps[] = [
  { name: "Home", href: "/" },
  { name: "Acessibilidade", href: "/acessibilidade" },
  { name: "Login / Cadastro ", href: "/login" },
  { name: "Contato ", href: "/contato" },
  { name: "Avaliação ", href: "/avaliacao" },
];

const Menu = () => {
  const pathname = usePathname();
  console.log(pathname);

  return navLinks.map((item, idx) => (
    <NavItem key={idx}>
      <NavLink
        href={item.href}
        className={pathname === item.href ? "active" : ""}
      >
        {item.name}
      </NavLink>
    </NavItem>
  ));
};

export const Navbar = () => {
  return (
    <>
      <Line>
        <Phone size={20} weight="fill" />
        <Telefone>+011 23451-6738</Telefone>
      </Line>
      <NavbarContainer>
        <NavList>
          <Menu />
        </NavList>
      </NavbarContainer>
    </>
  );
};
