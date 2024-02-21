import React from 'react';

class ComponentDidUpdate extends React.Component {
    constructor() {
        super();
        console.warn("constructor");
        this.state = {
            name: "nilay",
            counter: 0
        }
    }

    // we can stop this method by using shouldComponentUpdate() and return false here.
    componentDidUpdate(preProps, preState, snapshot) {
        // snapshot: the value of snapshot is undefied in everytime. If we implement firstly getSnapshotBeforeUpdate() 
        // method than the value of snapshot will be different otherwise the value is undefined.

        // It will print the previous state so we can know the updated value and previous value is same or different
        console.warn("component did update", preState.counter, this.state.counter, snapshot);
        
        // If we don't put any condition in here so it will go into the infinite loop
        if (preState.counter == this.state.counter) {
            alert("Data is already same");
        }

        // It will print 10 times in line if we click the button
        if (this.state.counter < 10) {
            this.setState({counter: this.state.counter + 1});
        }
    }

    // never update any state in render() function because it will call everytime and we will go into infinite loop.

    render() {
        console.warn("render");
        return (
            <div>
                <h1>Component Did update {this.state.name} - {this.state.counter}</h1>
                <button onClick={() => {this.setState({name: "milan", counter: this.state.counter + 1})}}>Update Name</button>
            </div>
        )
    }
}

export default ComponentDidUpdate;