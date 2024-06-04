import style from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const URL = "https://github.com/aresheus";

  return (
    <footer className={style.footer}>
      <h1>EGO</h1>

      <div className={style.footerNav}>
        <a href={URL} target="_blank">
          FAQ
        </a>
        <a href={URL} target="_blank">
          RETURNS
        </a>
        <a href={URL} target="_blank">
          SHIPPING
        </a>
        <a href={URL} target="_blank">
          CONTACT
        </a>
        <a href={URL} target="_blank">
          STORE FINDER
        </a>
      </div>

      <div className={style.footerSocial}>
        <FaInstagram className={style.footerIcon} />
        <FaFacebookF className={style.footerIcon} />
        <FaPinterestP className={style.footerIcon} />
        <FaXTwitter className={style.footerIcon} />
      </div>

      <div className={style.fotterEnding}>
        <a href={URL} target="_blank">
          SITE BY EGO AGENCY
        </a>
        <a href={URL} target="_blank">
          COPYRIGHT ENPIRICUS 2024
        </a>
        <p>
          <a href={URL} target="_blank">
            TERMS & CONDITION
          </a>{" "}
          |{" "}
          <a href={URL} target="_blank">
            PRIVACY
          </a>{" "}
          |
          <a href={URL} target="_blank">
            {" "}
            LEGAL NOTICE
          </a>
        </p>
      </div>
    </footer>
  );
}
