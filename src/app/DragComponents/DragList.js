import React, { Component } from 'react'
import DraggableItem from './DraggableItem'

import './styles.css'

export default class DragList extends Component {
  state = {
    source: '',
    target: ''
  }
  render() {
    return (
      <ul
        className="sort"
        onDragOver={evt => {
          evt.stopPropagation()
        }}>
        {this.props.children.map((item, i) => {
          return (
            <DraggableItem
              {...item}
              key={i}
              id={i}
              draggable={true}
              onDragStart={event => {
                // firefox requires this event, it does nothing
                event.dataTransfer.setData("text", "");
              }}
              onDragOver={evt => {
                evt.preventDefault()
              }}
              onDragEnd={evt =>
                this.props.handleMove(evt.target.id, this.state.target)
              }
              onDrop={this.drop}
              onDragEnter={evt => this.setState({ target: evt.target.id })}
            />
          )
        })}
      </ul>
    )
  }
}
