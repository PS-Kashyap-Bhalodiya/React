import React from "react";

import {CommonContext} from "./CommonContext";

export default function Header() {
    return(
        <>
            <CommonContext.Consumer>
            {
                ({color}) => (
                    <h1 className="header" style={{backgroundColor: color}}>Header Page</h1>
                )
            }
            </CommonContext.Consumer>
        </>
    );
}