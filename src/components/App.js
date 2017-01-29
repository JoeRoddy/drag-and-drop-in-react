import '../assets/stylesheets/base.scss';
import React, {Component} from 'react';
import Item from './Item';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["A","B","C","D"],
            dragSource:null
        }
    }

    renderItems(){
      return this.state.items.map((item,index) => (
        <Item content={item} key={index}
        swapItems={this.swapItems.bind(this)}
        setDragSrc={this.setDragSrc.bind(this)}/>
        )
      );
    }

    setDragSrc(src){
      this.setState({
        dragSource:src
      })
    }

    swapItems(dropTarget){
      console.log("swapItems called, dropTarget: "+dropTarget+" dragSource: "+this.state.dragSource);
      //DETERMINE POSITION OF SWAP TARGETS
      let items=this.state.items;
      let dragIndex=-1;
      let dropIndex=-1;
      for(let i=0;i<items.length;i++){
        if(items[i]==dropTarget){
          dropIndex=i;
        }else if(items[i]==this.state.dragSource){
          dragIndex=i;
        }
      }
      //SWAP ITEMS IN ARRAY THEN UPDATE STATE
      if(dragIndex!=-1&&dropIndex!=-1){
        let dragItem=items[dragIndex];
        items[dragIndex]=items[dropIndex];
        items[dropIndex]=dragItem;
      }
      this.setState({items:items});
    }

    render() {
        return (
            <div className='container'>
              <div className="items-list">
                {this.renderItems()}
              </div>
            </div>
        )
    }
};
