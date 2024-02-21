import React from "react";

import {CommonContext} from "./CommonContext";

export default function Footer() {
    return(
        <>
            <CommonContext.Consumer>
                {
                    ({color}) => (
                        <h1 className="footer" style={{backgroundColor: color}}>Footer Page</h1>
                    )
                }
            </CommonContext.Consumer>
        </>
    );
}