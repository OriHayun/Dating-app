import React, { Component } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import '../css/FCUserCard.css';
import { Link } from 'react-router-dom';


function FCFavoriteCard(props) {

    return (
        <Container>
            <Link to="/">
                <Button>Back to home page</Button>
            </Link>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>User id</th>
                        <th>User name</th>
                        <th>User image</th>
                    </tr>
                </thead>
                <tbody>
                    {props.favoriteList.map((user) => 
                        <tr>
                            <td>{user.UserId}</td>
                            <td>{user.UserName}</td>
                            <td><img style={{height:"60px"},{width:'60px'}} src={user.UserImage}/></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default FCFavoriteCard;