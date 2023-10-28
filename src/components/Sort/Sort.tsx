import Container from '../Container/Container'
import { ReactComponent as Clock } from './icons/clock.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Sort.scss'
import Form from '../Form/Form';

export interface IMocKFormSortData {
    text: string,
    value: string,
    id: number
}

const mockFormSortData: IMocKFormSortData[] = [
    {
        text: 'Alle',
        value: 'alle',
        id: 0
    },
    {
        text: 'Sofort verfügbar',
        value: 'sort1',
        id: 1
    },
    {
        text: 'auf Lager inkl. 10 Tage Vorlauf',
        value: 'sort2',
        id: 2
    },
    {
        text: 'ab 10 Tage Vorlauf',
        value: 'sort3',
        id: 3
    }
]


const Sort = () => {
    return (
        <Container>
            <section className="sort">
                <div className="sort__content">
                    <div className="content__result">
                        <h4 className="result__info">
                            Treffer:
                            <span className='result__count'>
                                50
                            </span>
                        </h4>
                    </div>
                    <div className="content__sort-bar">
                        <Form
                            formTitle={'Verfügbarkeit'}
                            options={mockFormSortData}
                            formIcon={<Clock />}
                        />
                        <Navbar variant="primary" bg="white" expand="lg">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title=" Verfügbarkeit "
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item
                                        style={{ position: 'absolute' }}
                                        href="#">Sofort verfügbar </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        auf Lager inkl. 10 Tage Vorlauf
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">ab 10 Tage Vorlauf  </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Alle
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {/* </Navbar.Collapse> */}

                        </Navbar>
                    </div>
                </div>
            </section>
        </Container >

    )
}

export default Sort