import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, Button } from "react-bootstrap";

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({
            type: "SEARCH",
            payload: {
                search
            }
        })
        setSearch('');
    };
    return (
        <Row>
            <Form className="row" onSubmit={handleSearch}>
                <Col xs={10} md={8}>
                    <Form.Control 
                        type="text" 
                        placeholder="이름을 입력해주세요."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </Col>
                <Col xs ={2} md={3}>
                    <Button variant="primary" type="submit">
                        찾기
                    </Button>
                </Col>
            </Form>
        </Row>
    );
};

export default SearchBox;