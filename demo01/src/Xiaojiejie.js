import React, {Component, Fragment} from 'react';
import XiaojiejieItem from './XiaojiejieItem';
import Transition from './Transition';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import './style.css';

class Xiaojiejie extends Component{
  constructor(props) {
    super(props);
    this.state={
      inputValue:'',
      list:[]
    }
  }
  componentWillMount() {
    // 组件将要挂载到页面的时刻执行
  }
  render() {
    // 组件加载中
    return (
      <Fragment>
        <div>
          <label htmlFor='demo'>加入服务：</label>
          <input
          id='demo'
          className='input'
          value={this.state.inputValue}
          onChange={this.inputChange.bind(this)}
          ref={(input) => {this.input = input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  /* <li 
                    key={index + item}
                    onClick={this.deleteItem.bind(this, index)}
                    dangerouslySetInnerHTML={{__html:item}}
                  >
                  </li> */
                  <CSSTransition
                    timeout={1000}
                    classNames='test'
                    unmountOnExit
                    appear={true}
                    key={index + item}
                  >
                    <XiaojiejieItem 
                    content={item}
                    key={index + item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    avname='aaa'
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Transition />
      </Fragment>
    )
  }
  componentDidMount() {
    // 组件挂载完成
    axios.get('https://www.easy-mock.com/mock/5ae939cda825a96c45658acb/demo')
        .then((res) => {
          console.log(`axios获取数据成功${JSON.stringify(res)}`)
          this.setState({
            list: res.data.data
          })
        })
        .catch((error) => { console.log(`axios获取数据失败${error}`) })
  }
  shouldComponentUpdate() {
    // 组件发生改变前执行
    return true;
  }
  componentWillUpdate() {
    // 组件更新前，shouldComponentUpdate函数之后执行
  }
  componentDidUpdate() {
    // 组件更新后执行
  }
  inputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie;