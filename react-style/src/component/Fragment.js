import React from "react";
// import React, {Fragment} from 'react';

function Fragment() {
    return(
        // Fragment: used when you need to group multiple elements 'without adding an extra node to the DOM'.
        // It allows you to return multiple elements from a component without introducing an unnecessary parent element.
        // There is three way to create an fragment.
            // 1st: import Fragment and write code inside <Fragment>code</Fragment>
            // 2nd: write code inside the empty tag<></> 
        <>
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Anil</td>
                        <td>Sidhu</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Fragment;