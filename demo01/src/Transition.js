import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return (
      <div>
        <CSSTransition
            in={this.state.isShow} //用于判断是否出现的状态
            timeout={2000} //动画持续时间
            classNames="test" //className值。防止重复
            unmountOnExit
        >
          <div>测试文字</div>
        </CSSTransition>
        <div><button onClick={this.toToggole}>开始测试</button></div>
      </div>
    );
  }
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true
    })
  }
}

export default Transition;