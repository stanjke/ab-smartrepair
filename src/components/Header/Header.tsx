import { FC } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__navigate">
          <Container>
            <ul className="header__list">
              <li className="header__item">
                <Link className="header__link" to={"http://ab-smartrepair.de/#section2"}>
                  Galerie
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"http://ab-smartrepair.de/#section3"}>
                  Über Uns
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"http://ab-smartrepair.de/#section4"}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </Container>
        </div>
        <div className="header__logo">
          <Link to="/" className="header__link">
            <img src="logo.png" alt="ab-smartrepair" className="header__logo" />
          </Link>
          {/* <a href="http://ab-smartrepair.de/" className="header__link">
            <img src="logo.png" alt="ab-smartrepair" className="header__logo" />
          </a> */}
        </div>
      </header>
    </>
  );
};

export default Header;
