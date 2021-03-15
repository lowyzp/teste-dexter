import { Component } from 'react';
import Parse from 'parse';
import Item from './Item';
import './List.css';

class List extends Component {

    constructor(props) {
        super();
        this.state = { itemList: [] };
        this.props = props;

        var path = "Food";

        if (this.props.type === "places") {
            path = "Place";
        }

        if (this.props.type === "people") {
            path = "Person";
        }


        const query = new Parse.Query(path);
        query.find().then((item) => {
            this.setState({ itemList: item });
        });
    }

    render() {
        return (
            <div className="container length">
                <div className="topic">
                    <h1 className="title">List of {this.props.type}</h1>
                    <div className="block stripe"></div>
                </div>
                <ul className="grid">
                    {this.state.itemList.map((item) => {
                        return <li key={item.id}><Item name={item.get("name")} link={item.get("link")} /></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default List;