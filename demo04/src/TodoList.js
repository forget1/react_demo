import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  state = {  }
  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action);
  }
  render() { 
    return ( 
      <TodoListUI 
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        changeInputValue = {this.changeInputValue}
        clickBtn = {this.clickBtn}
        deleteItem = {this.deleteItem}
      />
    );
  }
  storeChange() {
    this.setState(store.getState());
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;



/** 
 * store必须是唯一的，多个store是坚决不允许，只能有一个store空间
 * 只有store能改变自己的内容，Reducer不能改变
 * Reducer必须是纯函数
*/