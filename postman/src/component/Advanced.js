// Context API
// Make common file for context file make provider wrapper in app.js
// make main js file for consumer context
// make button file for update context
// make header and footer file

import React from "react";

import { CommonContext } from  "./CommonContext";
import Main from "./Main";
import UpdateButton from "./UpdateButton";
import Footer from "./Footer";
import Header from "./Header";

export default class Advanced extends React.Component() {

    constructor() {
        super();
        this.state = {
            color: "green",
            updateColor: this.updateColor
        };
        this.updateColor = (color) => {
            this.setState({
                color: color
            })
        }
    }

    render() {
        return(
            <>
                <CommonContext.Provider value={this.state}>
                    <Header />
                    <h1>Context API</h1>
                    <Main />
                    <UpdateButton />
                    <Footer />
                </CommonContext.Provider>
            </>
        );
    }
}