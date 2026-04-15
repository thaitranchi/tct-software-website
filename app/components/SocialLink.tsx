import React from "react";

interface SocialLinkProps {
  href: string;
  label: string;
}

export default function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors"
    >
      {label}
    </a>
  );
}