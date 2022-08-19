import './App.css';
import React, { Component } from 'react'
import Home from './home';
import axios from 'axios';
import Counter from './Counter';
export default class App extends Component {
  state={
    showComponent:true
  }
 componentDidMount(){
  const data={
    'userId' :22,
    'title' : 'Hey there!this is my first post request'
  }
  //axios.get method is used to get data from backEnd.
  //axios.get("https://dummyjson.com/posts")
 // .then(res=>console.log(res.data))
  //.catch(err=>console.log(err))

  //axios.post method is used to create new data in backend.it accepts two parameter 1st is url and second is data object.
  //axios.post("https://dummyjson.com/posts/add",data)
  //.then(res=>console.log(res.data))
  //.catch(err=>console.log(err))

  //fetch method is used to access data from backend without axios.
  //const option={
  // method: 'POST',
   // headers: {
    //  'content-type':'application/json'
    //},
    //body:JSON.stringify(data)
 // }
  //fetch("https://dummyjson.com/posts/add",option)
  //.then(res=>res.json())
 // .then(data=>console.log(data))

 //put/patch.axios is used to update data in backend.it accepts two parameter ie-url and changed data
 //axios.put("https://dummyjson.com/posts/1",data)
 //.then(res=>console.log(res.data))
 //.catch(err=>console.log(err))

 //axios.detele is used to delete data from backend.
 //axios.delete('https://dummyjson.com/products/1')
 //.then(res=>console.log(res.data))
 //.catch(err=>console.log(err))

 
 }
  render() {
    return (
     <div>{/*this.state.showComponent && <Home/>}
       <button onClick={()=>this.setState({showComponent:!this.state.showComponent})}>{ this.state.showComponent?"Unmount":"Mount"}
    </button>*/}
    <Counter/>
    </div>
    )
  }
}
