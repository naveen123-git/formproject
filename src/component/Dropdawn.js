import React, { Component } from 'react'
import MultiSelectComponent from 'react-select'

export default class Dropdawn extends Component {
  constructor(props){
    super(props);
    this.state={
      education:[
        {value:"10th"},
        {value:"12th"},
        {value:"BA"}
      ]
    }
  }
  render() {
    // const {education} =this.props.user
    return (
      <div>
        <MultiSelectComponent
        options={this.state.education}
        isMulti
        >

        </MultiSelectComponent>
      </div>
    )
  }
}
