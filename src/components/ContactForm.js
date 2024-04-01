import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const contactId = useRef(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_CONTACT",
            payload: {
                name,
                phoneNumber,
                id: contactId.current,
            },
        });
        contactId.current++;
        setName("");
        setPhoneNumber(0);
    };

    return (
        <Contact>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder={phoneNumber === 0 ? "연락처를 입력해주세요." : ""}
                        value={phoneNumber === 0 ? "" : phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </Contact>
    );
};

export default ContactForm;

const Contact = styled.section`
    margin-bottom: 3rem;
    padding: 30px 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;

    .mb-3 {
        display: flex;
        align-items: center;

        .form-label {
            width: 20%;
            font-weight: 600;
            color: var(--color-text-s);
            font-size: var(--font-sm);
            padding-top: 5px;
        }
        .form-control {
            font-size: var(--font-sm);
            color: var(--color-text-s);

            &::placeholder {
                color: var(--color-text-p);
            }
        }
    }
    .btn {
        width: 100%;
        margin-top: 1rem;
        background-color: var(--color-text-s);
        border-color: var(--color-text-s);
        transition: 0.2s;

        &:hover {
            background-color: var(--color-text-m);
            border-color: var(--color-text-m);
        }
    }
`;
