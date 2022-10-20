import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import '../App.css';
// import  Multiselect  from 'react-select'
import Multiselect from 'multiselect-react-dropdown';
import { Button } from '@mui/material'
import ArrowUpward from '@mui/icons-material/ArrowUpward'

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const select = this.props.Qualification
    const { fname, lname, email, number,education } = this.props.user
    return (
      <div>
        <div className="App">
          <div className='form'>
            <h2>Form</h2>
            <form >
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  className="form-control col-sm-2"
                  onChange={(e) => this.props.handleNum1(e)}
                  placeholder='Enter your first name'
                />
              </div>
              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  className="form-control"
                  onChange={(e) => this.props.handleNum1(e)}
                  placeholder='Enter your last name'
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => this.props.handleNum1(e)}
                  placeholder=' Enter your email'
                />
              </div>
              <div className="form-group">
                <label>Number</label>
                <input
                  type="text"
                  name="number"
                  value={number}
                  className="form-control"
                  onChange={(e) => this.props.handleNum1(e)}
                  placeholder=' Contact number'
                />
              </div>
              <div className="form-group">
                <label>Qualification</label>
                <Multiselect
                  className='bg-white'
                  name="education"
                   options={this.props.Qualification}
                  onChange={(e)=>this.props.handleEducation(e)}
                  value={education}
                  placeholder="Select your education"
                  displayValue="name"
                   isMulti
                />
              </div>
              <br />
              < Button
                type='button'
                variant='contained'
                color='primary'
                endIcon={<ArrowUpward />}
                onClick={this.props.edit ? (e) => this.props.onUpdate(e) : (e) => this.props.Submit(e)}>
                {this.props.edit ? "Update" : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Form;