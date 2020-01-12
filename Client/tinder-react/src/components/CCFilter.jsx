import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import $ from 'jquery';

import '../css/CCFilter.css';


class CCFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maleCheckboxChecked:false,
            femaleCheckboxChecked:false,
            gender: null,
            mimAge: null,
            maxAge: null
        }
    }



    maleCheckBoxChange = (e) => {
        $('#femaleCheckBox').prop('checked', false);
        this.setState({
            gender: 'male'
        })

    }
    femaleCheckBoxChange = (e) => {
        $('#maleCheckBox').prop('checked', false);
        this.setState({
            gender: 'female'
        })
    }
    
    setMinAge =(e)=>{
        this.setState({
            minAge: parseInt(e.target.value)
        })
    } 

    setMaxAge =(e)=>{
        this.setState({
            maxAge: parseInt(e.target.value)
        });
    }

    checkingCode =()=>
    {
        if(this.state.minAge<18 || this.state.minAge==null){
            alert("Something worng in your minimum age text box")
            window.location.reload();
            return;
        }
        if(this.state.maxAge==null){
            alert("Something worng in your maximum age text box")
            window.location.reload();
            return;
        }
        if(this.state.maxAge<this.state.minAge){
            alert("Note that the maximum age is less than the minimum age")
            window.location.reload()
            return
        }
    }

    render() {
        return (
            <Form>
                <Container>
                    <Row className="center">
                        <Col><h5>What are you interested in?</h5><br /></Col>
                    </Row >
                    <Row className="center">
                        <Col>
                            <h5>Choose partner gender:</h5>
                        </Col>
                    </Row>
                    <Row className="center">
                        <Col>
                            <Form.Check id="maleCheckBox" type="checkbox" label="Male" onChange={this.maleCheckBoxChange} />
                        </Col>
                        <Col>
                            <Form.Check id="femaleCheckBox" type="checkbox" label="Female"  onChange={this.femaleCheckBoxChange} />
                        </Col>
                        <br /><br />
                    </Row>
                    <Row className="center">
                        <Col ><h5>Choose partner age:</h5></Col>
                    </Row>
                    <Row className="center">
                        <Col>
                            <Form.Control type="text" placeholder="From age" onChange={this.setMinAge} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="To age" onChange={this.setMaxAge} />
                        </Col>
                    </Row>
                    <Row className="center">
                        <Col>
                            <Link to={'/match/'+this.state.gender+'/'+this.state.minAge+"/"+this.state.maxAge}>
                                <img id="startBtn" src="http://proj.ruppin.ac.il/igroup4/mobile/client/images/start.jpg" onClick={this.checkingCode} />
                            </Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <img className="romanticImg" src="http://proj.ruppin.ac.il/igroup4/mobile/client/images/romantic1.png" />
                        </Col>
                        <Col>
                            <img className="romanticImg" src="http://proj.ruppin.ac.il/igroup4/mobile/client/images/romantic2.png" />
                        </Col>
                    </Row>
                </Container>
            </Form>
        );
    }
}

export default withRouter(CCFilter);