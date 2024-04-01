import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ContactItem = ({name, phoneNumber, id, deleteContact}) => {

    const handleDeleteBtn = () => {
        deleteContact(id)
    };

  return (
    <Row as="li">
        <Col xs={2} className='contact_photo'>
            <Image src="/assets/unknown-person.jpg" alt="unknown-person" roundedCircle />
        </Col>
        <Col xs={7} className='contact_info'>
            <p className='info_name'>{name}</p>
            <p>{phoneNumber}</p>
        </Col>
        <Col xs={3} className='contact_icons'>
            <p className='icon'>
                <FontAwesomeIcon icon={faPhone} size='xl' />
            </p>
            <p className='icon'>
                <FontAwesomeIcon icon={faEnvelope} size='xl' />
            </p>
            <p className='icon' onClick={handleDeleteBtn}>
                <FontAwesomeIcon icon={faTrashCan} size='xl' />
            </p>
        </Col>
    </Row>
  )
}

export default ContactItem