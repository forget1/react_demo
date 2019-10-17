import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps 变化后的属性
    // nextState 变化后的转台
    // 解决子组件render性能问题
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return ( 
      <div onClick={this.handleClick}>
        {this.props.avname}为你做-{this.props.content}
      </div>
    );
    // React是单向数据流，数据主要从父节点传递到子节点（通过props）
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
  /** 子组件接受到父组件传递过来的参数，父组件的render函数重新被执行，这个生命周期就会被执行。
    * 也就是说这个组件第一次存在于DOM中，函数是不会被执行的
    * 如果已经存在于DOM中，函数才会被执行
  **/
  componentWillReceiveProps() {
    // console.log('child-componentReceiveProps')
  }
  // 组件去除时执行
  componentWillUnmount() {
    // console.log('child-componentWillUnmount')
  }
}

XiaojiejieItem.defaultProps = {
  avname: 'aasdw'
}

XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  avname: PropTypes.string.isRequired
}

export default XiaojiejieItem;