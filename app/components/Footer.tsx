"use client";

import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-6 my-2">
          <SocialLink href="https://github.com/TCT-Softwares" label="GitHub Org" />
          <SocialLink href="https://www.linkedin.com/company/tctsoftwares" label="LinkedIn" />
          <SocialLink href="https://www.facebook.com/tctsoftwares" label="Facebook" />
          <SocialLink href="https://founder.tctsoftwares.com" label="Founder" />
        </div>
        <p>&copy; {new Date().getFullYear()} TCT Softwares. All rights reserved.</p>
      </div>
    </footer>
  );
}
