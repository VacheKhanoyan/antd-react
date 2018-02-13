import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todo-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component {
  renderItems(){
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key ={index} {...todo} {...props} />);
  }

  render() {
      return (
          <table>
              <TodosListHeader />
            <tbody>
                {this.renderItems()}
            </tbody>
          </table>
      );
  }
}
