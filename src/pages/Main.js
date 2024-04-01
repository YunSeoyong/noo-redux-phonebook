import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Main = () => {
    const contactList = useSelector(state => state.contactList);
  return (
    <MainPage>
        <div className='title'>
            <h1>연락처</h1>
            <p>등록 된 연락처 ({contactList.length})</p>
        </div>
        <Container>
            <Row>
                <Col md={6}>
                    <ContactForm />
                </Col>
                <Col md={6}>
                    <ContactList />
                </Col>
            </Row>
        </Container>
    </MainPage>
  )
}

export default Main;

const MainPage = styled.div`
    padding-top: 5rem;

    .title {
        margin-bottom: 5rem;
        text-align: center;
        h1 {
            margin-bottom: 1rem;
            font-size: var(--font-title);
            font-weight: 700;
            color: var(--color-text-m);
        }
        p {
            font-size: var(--font-sm);
            color: var(--color-text-s);
            font-weight: 500;
        }
    }

`;