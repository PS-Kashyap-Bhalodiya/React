import React, {useState} from "react";

function ConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(1);

    // that is not recommended way to write an conditional rendering
    // if (loggedIn) {
    //     return(
    //         <div>
    //             <h1>you are logged in</h1>
    //         </div>
    //     )    
    // } else {
    //     return(
    //         <div>
    //             <h1>you are not logged in</h1>
    
    //         </div>
    //     )
    // }

    return(
        <div>
            <h1>Conditional Rendering</h1>
            {/* if-else condition */}
            {loggedIn ? <h1>Welcome you are logged in</h1> : <h1>Welcome guest logged in</h1>}

            {/* if-elseif-else condition */}
            {loggedIn == 1 ? <h1>Welcomd User 1</h1> : loggedIn == 2 ? <h1>Welcome User 2</h1> : <h1>Welcome Guest</h1>}

        </div>
    )
}

export default ConditionalRendering;