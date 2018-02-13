import React from 'react';
import TodosList from './todo-list';
import CreateTodo from './create-todo';
import _ from 'lodash';
import 'antd/dist/antd.css';
import{ Button } from 'antd';
import './App.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const todos = [
  {
    task: 'make React tutorial',
    isCompleated: false
  },
  {
    task: 'eat dinner',
    isCompleated: true
  }
];


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todos
    };
  }
  render() {
    return (
      <div className="container">
    <Layout>
      <Header style={{backgroundColor: 'lightblue', borderBottom: '1px solid black'}}>React ToDos App</Header>
      <div className = "create">
      <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
      </div>
      <Content >
      
        <TodosList
           todos={this.state.todos}
           toggleTask={this.toggleTask.bind(this)}
           saveTask={this.saveTask.bind(this)}
           deleteTask={this.deleteTask.bind(this)}
         />
         <hr/>
         </Content>
      <Footer>Armenia 2018</Footer>
    </Layout>
    </div>
    )
  }
  //     return (
  //        <div className="container">
  //          <div className = "create">
  //          <h1>React ToDos App</h1>
  //        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
  //        </div>
  //        <div className ="todolist"> 
  //        <TodosList
  //          todos={this.state.todos}
  //          toggleTask={this.toggleTask.bind(this)}
  //          saveTask={this.saveTask.bind(this)}
  //          deleteTask={this.deleteTask.bind(this)}
  //        />
  //        </div>
  //        </div>
  //     );
  // }

toggleTask(task) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todos: this.state.todos });
}

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleated: false
    });
    this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo=> todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
