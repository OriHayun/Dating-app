import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/FCUserCard.css';



function FCUserCard(props) {

    if (props.userAtIPlace) {
        if (props.userAtIPlace.UserPremium == 'true') {
            return (
                <div>
                    <Card className="bg-dark text-white userCard" border="dark" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="userCardImg" src={props.userAtIPlace.UserImage} />
                        <Card.Body>
                            <Card.Title className="text-center">{props.userAtIPlace.UserName}</Card.Title>
                            <Card.Text>
                                <h6>Gender: {props.userAtIPlace.UserGender}</h6>
                                <h6>Age: {props.userAtIPlace.UserAge}</h6>
                                <h6>Height: {props.userAtIPlace.UserHeight}</h6>
                                <h6>city: {props.userAtIPlace.UserCity}</h6>
                                <h6>Hobbies: {props.userAtIPlace.UserHobbies}</h6>
                            </Card.Text>
                            <Button variant="primary" onClick={props.like}>like</Button>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <Button variant="primary" onClick={props.next}>next</Button>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Card className="bg-dark text-white userCard">
                        <Card.Img variant="top" className='userCardImg' src={props.userAtIPlace.UserImage} />
                        <Card.Body>
                            <Card.Title>{props.userAtIPlace.UserName}</Card.Title>
                            <Card.Text>
                                <h6>Gender: {props.userAtIPlace.UserGender}</h6>
                                <h6>Age: {props.userAtIPlace.UserAge}</h6>
                                <h6>Height: {props.userAtIPlace.UserHeight}</h6>
                                <h6>city: {props.userAtIPlace.UserCity}</h6>
                                <br />
                            </Card.Text>
                            <Button variant="primary" onClick={props.like}>like</Button>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <Button variant="primary" onClick={props.next}>next</Button>
                        </Card.Body>
                    </Card>
                </div>
            );

        }
    }
    else {
        
        alert("no matches more");
        window.location.replace('http://proj.ruppin.ac.il/igroup4/mobile/client')
        
    }
}

export default FCUserCard;