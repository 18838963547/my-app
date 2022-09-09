import React, { Component } from 'react'
// import store from '../../redux/store';
// import { createIncrementAction,createIncrementAsyncAction } from '../../redux/count_actions';

export default class CountRedux extends Component {
//   componentDidMount(){
//     store.subscribe(()=>{
//         this.setState({})
//     })
//   }
  increment=()=>{
    // const data= store.getState()
    // store.dispatch(createIncrementAction(1))
    // console.log(store.getState(),'store');
    this.props.b(1)
  }
  incrementAsync=()=>{
    // store.dispatch(createIncrementAsyncAction(1,1000))
  }
  render() {
    // console.log(this.props)
    const {state} = this.props
    return (
      <div>
        <p>CountRedux</p>
        {/* <strong>{store.getState()}</strong> */}
        <strong>{state.count}</strong>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementAsync}>async+</button>
      </div>
    )
  }
}
