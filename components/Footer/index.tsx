"use client";
import Link from "next/link";
import { Line } from "./styles";

export const Footer = () => {
  return (
    <>
      <Line>
        {" "}
        <Link href="https://github.com/rebecalopes822/html_sprint_tres">
          Link repositório: https://github.com/rebecalopes822/html_sprint_tres
        </Link>
      </Line>
    </>
  );
};
