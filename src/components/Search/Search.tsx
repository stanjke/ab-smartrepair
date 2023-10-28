import InputBootstrap from 'react-bootstrap/InputGroup'
import FormBootstrap from 'react-bootstrap/Form'
import { ReactComponent as SearchLogo } from './icons/search.svg'

import './Search.scss'
import Container from '../Container/Container'

const Search = () => {
    return (
        <Container>
            <InputBootstrap className="mb-3">
                <InputBootstrap.Text id="basic-addon1">
                    <span>
                        <SearchLogo />
                    </span>
                </InputBootstrap.Text>
                <FormBootstrap.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputBootstrap>
        </Container>
    )
}

export default Search