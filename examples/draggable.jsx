import * as React from 'react';
import ReactDOM from 'react-dom';
import Draggable from "../src/Draggable";

class DraggableDiv extends React.Component {
    componentDidMount() {
        this.d = new Draggable(this.el, {
            press: (e) => { console.log("press", e) },
            drag: (e) => { console.log("drag", e) },
            release: (e) => { console.log("release", e) }
        });
    }

    render() {
        return (
            <div
                ref={(c) => this.el = c}
                style={{ width: 399, height: 400, background: "red" }}
            ></div>);
    }
}
ReactDOM.render(
    <DraggableDiv />,
    document.getElementById('app')
);
