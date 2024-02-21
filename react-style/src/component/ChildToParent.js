import React from "react";
import ChildToParent2 from "./ChildToParent2";

function ChildToParent() {
    let data = "Anil Sidhu";

    function parentAlert(data) {
        console.log(data);
        alert(data.name);
    }

    return(
        <>
            <h1>Lifting State up</h1>
            <ChildToParent2 alert={parentAlert} />
        </>
    )
}

export default ChildToParent;