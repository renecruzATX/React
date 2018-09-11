import React, {
  Component
} from 'react';
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {
  state={
    list: [],
    inputValue: '',
  }
  /*componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => this.setState({list: data}))
    }*/

  handleChange(e){
    this.setState({inputValue: e.target.value});
  }
  handleSubmit(e){
    if(this.state.inputValue === ''){
      e.preventDefault();
    }else {
      e.preventDefault();
      const newList = this.state.list.slice();
      newList.push({id: this.state.list.length, title: this.state.inputValue});
      this.setState({list: newList, inputValue: ''});
    }

  }
  handleDelete(index){
    const deleteList = this.state.list.slice();
    deleteList.splice(Number(index), 1);
    this.setState({list: deleteList});
    this.renderList();
  }
  renderList(){
    return this.state.list.map((item, index) => {
      return <div>
      <p>{item.title}<DeleteIcon onClick={(item) => this.handleDelete(index)}/></p>
      </div>

    })
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>To Do List</h2>
          <div>
            <input
            value={this.state.inputValue}
            type="text"
            placeholder="Enter Task"
            onChange={(e) => this.handleChange(e)}
            />
            <button type="submit">Submit</button>
          </div>
          {this.renderList()}
        </form>
      </div>
    )
  }
}

export default App;
