import React, { Component, useState } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import './App.css';
import FCHome from './components/FCHome';
import CCFilter from './components/CCFilter';
import CCMatch from './components/CCMatch';
import FCFavoriteCard from './components/FCFavoriteCard';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      myLiks: []
    }
  }

  componentWillMount() {
    //let url = "http://localhost:51072/api/users"
    let url = "http://proj.ruppin.ac.il/igroup4/mobile/server/api/users"
    this.getUsers(url)
  }

  getUsers = (url) => {
    fetch(url)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log(result);
          this.setState({
            users: result
          })
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  ShowMyFavorite = () => {
    fetch("http://proj.ruppin.ac.il/igroup4/mobile/server/api/favorite")
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log(result);
          this.setState({
            myLiks: result
          })
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  insertToTable = (myFavorite) => {
    myFavorite.filter((user) => {
      return (
        <tr>
          <td>{user.UserId}</td>
          <td>{user.UserName}</td>
          <td>{user.UserImage}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img className="logo" src="http://proj.ruppin.ac.il/igroup4/mobile/client/images/logo.jpg" />
            <Link to="/favorite">
              <Button variant="outline-info" onClick={this.ShowMyFavorite}>My likes</Button>
            </Link>
            <hr />
          </Col>
        </Row>
        <Switch>
          <Route exact path="/">
            <FCHome />
          </Route>
          <Route path="/filter" >
            <CCFilter />
          </Route>
          <Route path="/match/:gender/:minAge/:maxAge" >
            <CCMatch users={this.state.users} />
          </Route>
          <Route path="/favorite">
            <FCFavoriteCard favoriteList={this.state.myLiks} insertToTable={this.insertToTable} />
          </Route>
        </Switch>
        <Row className="center">
          <Col>
            <hr /><h5>All right reserve to Hayun's Group</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(App);
