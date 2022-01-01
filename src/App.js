import './App.css';
import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      todo: [
        {
          name: "omer", s: 1  // 1 for show data .0 for input
        },
        {
          name: "asad", s: 1
        }
      ],
      value: "",
      first_data :''

    }
  }

  addTodo() {
    console.log(this.state.value)
    if(this.state.value == ""){
      alert("Enter Data ")
    }
    else{
    var obj = {
      name: this.state.value,
      s:1
    }
    this.setState({
      value: "",
      todo: [...this.state.todo, obj],
    })
  }
  }

  deletetodo(i) {
    console.log(i)
    this.state.todo.splice(i, 1)
    console.log(this.state.todo)
    this.setState({
      todo: this.state.todo
    })
  }

  editTodo(i) {
    // console.log(this.state.todo[i].name)
    // var b = prompt("Enter Update Value", this.state.todo[i].name)
    // this.state.todo[i].name = b;
    // this.setState({
    //   todo: this.state.todo
    // })
    for(var j=0;j<this.state.todo.length;j++){
      this.state.todo[j].s= 1
    }
    this.setState({
      todo: this.state.todo,
      
    })
    console.log(this.state.todo)
    this.state.todo[i].s= 0;


   this.setState({
      todo: this.state.todo,
      first_data : this.state.todo[i].name
    })
    


  }

dataChange(e,i){
    this.state.todo[i].name=e.target.value
    this.setState({
      todo:this.state.todo
    })

  }

  updateTodo(i){
    this.state.todo[i].s= 1
    this.setState({
      todo:this.state.todo
    })
  }

  cancelTodo(i){
    console.log(this.state.first_data)
    this.state.todo[i].name = this.state.first_data
    this.state.todo[i].s= 1
    this.setState({
      todo:this.state.todo
    })

  }


  render() {
    console.log(this.state)
    return (


      <div className='App'>
        <input type="text" placeholder='Enter Todo' size={30}
          value={this.state.value}
          style={{ marginTop: 30 }} onChange={(e) => this.setState({ value: e.target.value })} />
        <button onClick={() => this.addTodo()} >Add Todo</button>

      
        {

          this.state.todo.map((v, i) => {
            console.log(i)
            return (

              <h1 key={i}>

                {
               v.s == 0  ?
                  <>
                    <input type="text" placeholder='Enter Todo' size={30}
                      value={v.name}
                      style={{ marginTop: 30 }} 
                      onChange={(e)=>this.dataChange(e,i)}
                      />
                    <button onClick={() => this.updateTodo(i)} >UPDATE Todo</button>
                    <button onClick={() => this.cancelTodo(i)} >Cancel </button>

                  </>
                  :
                  <>
                  {v.name}
                    <button onClick={() => this.editTodo(i, v)}>Edit</button>
                    <button onClick={() => this.deletetodo(i)}>Delete</button>
                  </>
                }

              </h1>
            )

          })
        }

        
      </div>

    )
  }
}
export default App;