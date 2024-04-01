import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
    const contactList = useSelector(state => state.contactList);
    const search = useSelector(state => state.search);
    const [searchList, setSearchList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        searchContact()
    }, [search, contactList]);

    const searchContact = () => {
        if(search !== "") {
            const newList = contactList.filter(i =>
                i.name.includes(search) || i.phoneNumber.includes(Number(search))
            )
            setSearchList(newList);
        } else {
            setSearchList(contactList);
        };
    };

    const deleteContact = (targetId) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: {
                id: targetId
            }
        });
    };
    

  return (
    <Contactlist className='container'>
        <SearchBox />
        <p>연락처 ({searchList?.length > 0 ? searchList?.length : 0})</p>
        <ul>
            {
                searchList?.map((i, idx) => 
                    <ContactItem {...i} key={i.id} deleteContact={deleteContact} />
                )
            }
        </ul>
    </Contactlist>
  )
}

export default ContactList;

const Contactlist = styled.section`
    & > .row {
        margin-bottom: 2rem;

        form {
            padding: 0;
            margin-left: 2px;
        }

        input {
            font-size: var(--font-sm);
            font-size: var(--font-sm);
            color: var(--color-text-s);
            
            &::placeholder {
                color: var(--color-text-p);
            }
        }
        .btn {
            font-size: var(--font-sm);
            font-weight: 500;
            background-color: var(--color-text-s);
            border-color: var(--color-text-s);
            transition: 0.2s;

            &:hover {
                background-color: var(--color-text-m);
                border-color: var(--color-text-m);
            }
        }
    }

    & > p {
        margin-bottom : 1rem;
        font-size: var(--font-sm);
        font-weight: 600;
        color: var(--color-text-m);
    }
    
    ul {
        li {
            align-items: center;
            margin-bottom: 1rem;
            padding: 20px 10px;
            background-color: rgba(255, 255, 255, 0.2);
            cursor: pointer;
            border-radius: 20px;
            transition: 0.2s;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.3);
            }

            .contact_info {
                font-size: var(--font-sm);
                font-weight: 600;
                color: var(--color-text-m);
                line-height: 1.5;

                .info_name {
                    font-size: var(--font-md);
                }
            }

            .contact_icons {
                display: flex;
                justify-content: space-between;

                .icon {
                    cursor: pointer;
                    svg {
                        color: var(--color-text-s);
                        transition: 0.2s;
                    }

                    &:hover svg {
                        color: var(--color-text-m);
                    }
                }
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }
`;