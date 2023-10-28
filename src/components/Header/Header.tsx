import { FC } from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header: FC = () => {
    return (
        <>
            <Container>
                <header className='header'>
                    <div className="header__logo">
                        <a href="http://ab-smartrepair.de/" className="header__link">
                            <img src="/logo.jpg" alt="ab-smartrepair" className="header__logo" />
                        </a>
                    </div>
                    <div className="header__navigate">
                        <ul className="navigate__list">
                            <li className="navigate__item">
                                <Link className='navigate__link' to={'http://ab-smartrepair.de/#section2'}>Galerie</Link>
                            </li>
                            <li className="navigate__item">
                                <Link className='navigate__link' to={'http://ab-smartrepair.de/#section3'}>Über Uns</Link>
                            </li>
                            <li className="navigate__item">
                                <Link className='navigate__link' to={'http://ab-smartrepair.de/#section4'}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </Container>
            <div className="underline"></div>
        </>
    )
}

export default Header