import React from "react";
import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        {/* WhatsApp */}
        <a
          href="https://wa.me/213782441310"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="footer-icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        {/* Email */}
        <a
          href="mailto:mortadadjebbouri@gmail.com"
          aria-label="Email"
          className="footer-icon mail"
        >
          <MdEmail />
        </a>
      </div>

      <p className="footer-copy">
        © 2024 Mortada Djebbouri. Tous droits réservés.
      </p>

    </footer>
  );
}
