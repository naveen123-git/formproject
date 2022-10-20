import axios from 'axios';
import React, { Component } from 'react';
import '../App.css'
import Form from './Form';
import { Button } from '@mui/material'
import List from '@mui/icons-material/List'
// import Dropdawn from './Dropdawn';


class Formdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: null, fname: '', lname: '', email: '', number: '', education: [] },
      edit: false,
      Qualification: [
        {name: '10th'},
      {name: '12th'},
       {name:'M.B.A'}
    ]
    }
    this.handleNum1 = this.handleNum1.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  handleEducation(e) {
    // debugger
    // this.setState(() => {
    //   return {
    //     user: data
    //   }
    // })
    debugger
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      value.push(options[i].value);
    }
  }
}
  componentDidMount() {
    // debugger
    let urlLength = window.location.pathname.split('/').length
    if (urlLength > 2) {
      let userId = window.location.pathname.split('/')[urlLength - 1]
      if (userId) {
        axios.get(`https://63382e00132b46ee0beb98e6.mockapi.io/api/users/${userId}`)
          .then(data => {
            if (data.status === 200) {
              this.setState({ user: data.data, edit: true });
            }
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    }
  }
  handleNum1(e) {
    debugger
    let data = this.state.user
    data[e.target.name] = e.target.value;
    this.setState({
      user: data,
    });
  }
  onUpdate() {
    debugger
    let urlLength = window.location.pathname.split('/').length
    if (urlLength > 2) {
      let userId = window.location.pathname.split('/')[urlLength - 1]
      console.log(userId)
      if (userId) {
        let user = this.state.user;
        // console.log(user)
        axios({
          url: `https://63382e00132b46ee0beb98e6.mockapi.io/api/users/${userId}`,
          method: "PUT",
          data: user,
        })
          .then(data => {
            console.log(data)
            if (data.status === 200) {
              this.setState({ user: data.data });
              window.location.href = '/users'
              console.log('this.state.user')
            }
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    }
  }
  Submit(e) {
    e.preventDefault();
    debugger
    let user = this.state.user;
    axios({
      url: "https://63382e00132b46ee0beb98e6.mockapi.io/api/users",
      method: "POST",
      data: user,
    }).then((res) => {
      debugger
    })
      .catch((error) => {
        debugger
      })
    this.setState({
      user: { id: null, fname: '', lname: '', email: '', number: '', education: [] },
    });
    // window.location.href='/users'
  };
  render() {
    return (
      <div>
        <div>
          <Button href="/users" startIcon={<List />} color='success' variant="contained">
            user list
          </Button>
          <br />
        </div>
        <Form
          edit={this.state.edit}
          user={this.state.user}
          // education={this.state.education}
          Qualification={this.state.Qualification}
          handleNum1={this.handleNum1}
          handleEducation={this.handleEducation}
          onUpdate={this.onUpdate}
          Submit={this.Submit}
        />
      </div>
    );
  }
}
export default Formdata;