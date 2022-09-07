import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import SubList from './SubList'
import './index.css'

export default class TodoList extends Component {
  state = {
    todoList:[
        {id:nanoid(),value:'列表_1',done:false,checked:false},
        {id:nanoid(),value:'列表_2',done:false,checked:false},
        {id:nanoid(),value:'列表_3',done:false,checked:false},
    ]
  }
  add = (e)=>{
    const {keyCode,target} = e
    if(keyCode!== 13 || !target.value) return
    const {todoList} = this.state
    todoList.unshift({id:nanoid(),value:target.value,done:false,checked:false})
    this.setState({
        todoList: todoList
    })
    target.value = ''
  }
  changeStyle=(id,flag)=>{
    const {todoList} = this.state
    todoList.forEach(it=>{
        if(it.id === id){
            it.done = flag
        }
    })
    this.setState({
        todoList:todoList
    })
  }
  deleteItem=(el)=>{
    const {todoList} = this.state
    const idx = todoList.findIndex(it=>it.id === el.id)
    todoList.splice(idx,1)
    this.setState({
        todoList,
    })
  }
  render() {
    const {todoList} = this.state
    return (
      <div className='todolist'>
        <input type="text" onKeyUp={this.add} />
        <SubList todoList={todoList} changeStyle={this.changeStyle} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}
