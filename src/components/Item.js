import React, {Component} from 'react';

export default class Item extends Component {

    handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }
    }

    handleDragStart(e) {
      this.props.setDragSrc(this.props.content);
    }

    handleDrop(e){
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      this.props.swapItems(this.props.content);
    }

    render() {
        return (
            <div className="item" draggable="true"
              onDragStart={e=>this.handleDragStart()}
              onDragOver={e=>this.handleDragOver(e)}
              onDrop={e=>this.handleDrop(e)}>
              <div className="content">{this.props.content}</div>
            </div>
        )
    }
};
