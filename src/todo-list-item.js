import React from 'react';
//import {Button} from 'antd';
import './App.css';
import { Popover, Button } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
  </div>
);
export default class TodosListItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        isEditing: false,
    };
  }


renderTaskSection() {
  const { task, isCompleted } = this.props;
  const taskStyle = {
    status: isCompleted ? task + ': done' : 'don`t done',
    color: isCompleted ? 'green' : 'red',
    cursor: 'pointer'
  };
  if(this.state.isEditing){
      return(
          <td>
              <form onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={task} ref="editInput" />
              </form>
          </td>
      )
  }
  return(
      <td style={taskStyle}
          onClick= {this.props.toggleTask.bind(this, task)}
      >
      <div>
      <Popover placement="topLeft" title="Status" content={taskStyle.status}>
      <Button style={taskStyle}>{task}</Button>
    </Popover>
    </div>
      </td>
  );
}

  renderActionsSection(){
    if(this.state.isEditing) {
      return(
          
          <td>
              <Button type="primary" onClick={this.onSaveClick.bind(this)}>Save</Button> 
              <Button type="primary" onClick={this.onCancelClick.bind(this)}>Cancel</Button>
          </td>
          
      );
    }
    return(
        <div className="btn">
        <td>
          <Button type="primary" onClick={this.onEditClick.bind(this)}>Edit</Button>
          <div className="btn">
        <Button type="primary" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</Button>
        </div>
        </td>

        </div>
    )
  }
  render() {
      return (
          <tr>
              {this.renderTaskSection()}
              {this.renderActionsSection()}
          </tr>
      );
  }
  onEditClick() {
    this.setState({ isEditing: true });
  }
  onCancelClick(){
    this.setState({ isEditing: false });
  }
  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }
}
