import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount(){
        console.log("componentDidMount called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    return (
      <div>
        <h1>Home Component</h1>
      </div>
    )
  }
}
