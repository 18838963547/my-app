import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/sublist.css'

export default class SubList extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired, // 做属性限制
    changeStyle: PropTypes.func.isRequired
  }
  state= {
    mouse:false
  }
  mouseMove=(el)=>{
    this.props.changeStyle(el.id,true)
  }
  mouseLeave = (el)=>{
    this.props.changeStyle(el.id,false)
  }
  delete=(el)=>{
    if(window.confirm('确认删除吗？')){
        this.props.deleteItem(el.id,false)
    }
  }
  render() {
    return (
      <div>
        <ul className='todolist-ul'>
            {
                this.props.todoList.map((el,i) => {
                    return (
                        <li key={i} onMouseEnter={(e)=>{this.mouseMove(el,true)}} onMouseLeave={(e)=>{this.mouseLeave(el)}}>
                            <input type="checkbox" name={`list${i}`} id={`list${i}`} defaultChecked={el.checked}/>
                            {el.value}
                            <button style={{display:el.done?'inline-block':'none'}} onClick={()=>this.delete(el)}>删除</button>
                        </li>
                    )
                })
            }
        </ul>
        <p><input type="checkbox" name="all" id="all" />全部</p>
      </div>
    )
  }
}
