import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import { users } from '../scripts/data.js';
import FCUserCard from './FCUserCard.jsx';

class CCMatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterArr: [],
            i: 0,
        }
    }

    componentWillMount() {
    let filterArr1 = this.props.users.filter((user) => {
        return (user.UserGender === this.props.match.params.gender &&
            user.UserAge >= this.props.match.params.minAge &&
            user.UserAge < this.props.match.params.maxAge
        )
    })
        this.setState({
            filterArr: filterArr1
        });
    }
    next = () => {
        this.setState((prevState) => ({
            i: prevState.i + 1
        }));
    }

    like =()=>{
        let url ="http://proj.ruppin.ac.il/igroup4/mobile/server/api/users";
        const data ={
            UserId:this.state.filterArr[this.state.i].UserId,
            UserName:this.state.filterArr[this.state.i].UserName,
            UserImage:this.state.filterArr[this.state.i].UserImage,
        }
        console.log(data);

        fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8'
            })  
        })
        .then(res=>{
            console.log('res=',res);
            return res.json();
        })
        .then(
            (result) =>{
            console.log("num of rows affected = ", result);
        },
        (error) =>{
            console.log("err post=", error);
        });




        this.setState((prevState) => ({
            i: prevState.i + 1
        }));
        
        
    }
    render() {
        return (
            <div>
                <FCUserCard userAtIPlace={this.state.filterArr[this.state.i]} next={this.next} like={this.like} />
            </div>
        );
    }
}


export default withRouter(CCMatch);