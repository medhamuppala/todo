import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      newItem: '',
      list: []
    };
  }

  updateInput(key,value) {
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem() {
    //create item with unique id
    const newItem= {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newInput input
    this.setState({
      list,
      newItem: ""
    });
  }
deleteItem(id) {
  //copy current list of items
  const list = [...this.state.list];

  //filter out the item being deleted
  const updatedList = list.filter(item => item.id !== id);
  this.setState({list:updatedList});
}

  render() {
    return (
      <body style={{backgroundColor: 'cyan', textAlign: "center"}}>
      <div className="App">
        <h1>To Do List</h1>
        <br/>
        <input
        type="text"
        style={{height: 30, fontSize: 15, fontWeight: 'bold'}}
        placeholder="Add a task"
        value={this.state.newItem}
        onChange= {e => this.updateInput('newItem',e.target.value)}
        />
        <button
        style={{height: 37, width: 48, fontSize: 15, fontWeight: 'bold'}}
        onClick= {() => this.addItem()}
        >
          Add
        </button>
        <br/>
        <ul style={{textAlign: 'center', listStyle: 'inside'}}>
          {this.state.list.map (item => {
            return(
              <h4>
              <li key= {item.id}>
                {item.value}
                <button
                style={{fontWeight: 'bold'}}
                  onClick= {() => this.deleteItem(item.id)}
                >
                  x
                </button>
              </li></h4>
            )
          })}
        </ul>
      </div>
      </body>
    );
  }
}

export default App;
