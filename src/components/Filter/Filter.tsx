import Container from '../Container/Container'
import Form from '../Form/Form'

import './Filter.scss'


const Filter = () => {
    return (
        <Container>
            <section className='filter'>
                <h2 className='filter__title'>
                    AB-SmartRepair-Showroom
                </h2>
                <div className="filter__content">
                    <div className="manufactures">
                        <Form
                            formTitle={'Alle Hersteller'}
                            disabled={false}
                        />
                        <Form
                            formTitle={' Alle Modelle '}
                            disabled={true}
                        />
                    </div>
                    <div className="feature">
                        <Form
                            formTitle={' Kraftstoff '}
                            disabled={false}
                        />
                        <Form
                            formTitle={' Getriebe '}
                        />
                        <Form
                            formTitle={' Preis bis '}
                            disabled={false}
                        />
                        <Form
                            formTitle={' Erstzulassung ab '}
                        />
                    </div>
                </div>
            </section>
        </Container>

    )
}

export default Filter