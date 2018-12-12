import React, { Component } from 'react'

import DragList from './DragComponents/DragList'

export default class App extends Component {
  state = {
    items: [
      { label: 'First item' },
      { label: 'Second item' },
      { label: 'Third item' },
      { label: 'Fourth item' }
    ]
  }

  handleMove = (source, target) => {
    let items = this.state.items
    const itemToMove = this.state.items[source]
    if (target == 0) {
      // add to the begining of the array
      items.splice(source, 1)
      items.unshift(itemToMove)
      return this.setState({
        items
      })
    }
    if (target == items.length) {
      // push item to the end of the array
      items.splice(source, 1)
      items.push(itemToMove)
      return this.setState({
        items
      })
    }
    items.splice(source, 1)
    items.splice(target, 0, itemToMove)
    return this.setState({
      items
    })
  }

  render() {
    return (
      <div className="wrapper">
        <DragList handleMove={this.handleMove}>{this.state.items}</DragList>
      </div>
    )
  }
}
