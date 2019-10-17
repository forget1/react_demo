import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: 'blog 1' },
        { cid: 456, title: 'blog 2' },
        { cid: 789, title: 'blog 3' }
      ]
    }
    this.props.history.push('/home/');
  }
  render() {
    // return (
    //   <Redirect to='/home/'/>
    // )
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={ index }>
                <Link to={ `/list/${item.cid}` }>{ item.title }</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Index;