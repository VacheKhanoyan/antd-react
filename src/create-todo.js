
import React from 'react';
import { Button } from 'antd';
import _ from 'lodash'
// import 'antd/dist/antd.css';
//import './create.css';
export default class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error: null
    };
  }
  renderError() {
    if(!this.state.error) {return null;}

    return <div style={{color: 'red'}}>{this.state.error}</div>
  }
    render() {
        return (
          <div>
            <form onSubmit={this.handleCreate.bind(this)}>
                <input  type ="text" placeholder="What do I need to do?"
                ref="createInput"/>
              <Button type = "primary" > Create</Button>

            {this.renderError()}
            </form>
            </div>
      );
  }
  handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null })
    this.props.createTask(task);
    this.refs.createInput.value = " ";
  }
  validateInput(task) {
    if(!task) {
      return 'Please enter a task.';
    } else if(_.find(this.props.todos, todo => todo.task === task)){
      return 'Task already exist';
    } else {
      return null
    }
  }
}
