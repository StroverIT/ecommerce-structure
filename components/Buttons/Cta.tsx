import React from "react";

export default function Cta({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return <button onClick={onClick} className={"bg-primary-100 text-white px-10 py-2"}>{text}</button>;
}
