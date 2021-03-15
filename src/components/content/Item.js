import {Component} from 'react';
import './Item.css';

class Item extends Component{
    render(){
        return(
          <div className="square">
            <h1 className="text">{this.props.name}</h1>
            <div className="filter">            
          </div>
          <img className="image" src={this.props.link} alt={this.props.name}/>
          </div>
        );
    }
}

export default Item;