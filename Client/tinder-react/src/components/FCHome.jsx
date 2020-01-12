import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "../css/FCHome.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function FCHome() {


    return (
        <Container>
            <Row>
                <Col>
                    <Link to='/filter'>
                        <Button id="startExploringBtn" variant="outline-info">Start Expolring</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col >
                    <img id="homeImg" src="http://proj.ruppin.ac.il/igroup4/mobile/client/images/homeImg.png" /><br />
                </Col>
            </Row>
        </Container>
    )
}

export default FCHome;