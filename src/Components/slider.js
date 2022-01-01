import React from "react";


class Slider extends React.Component{
  constructor(){
    super()
    this.state = {
        name : 0
    }
}
render(){
  return(
    <div>

 <h1>{this.state.name}</h1>
 <button onClick={()=>this.setState(
   {
   name : this.state.name-1
 })}>Minus One</button>
 <button onClick={()=>this.setState(
   {
   name : 0
 })}>Reset</button>
 <button onClick={()=>this.setState(
   {
   name : this.state.name+1
 })}>Add One</button>

 <h1>Hello this is h1 tag</h1>
 <h2 >this is h2 tag</h2>
    </div>
    
  )
}
}

class Header extends React.Component{

render(){
  return(
    <div>
      <h2>This is header</h2>
    </div>
    
  )
}
}

export {
  Slider,
  Header
};