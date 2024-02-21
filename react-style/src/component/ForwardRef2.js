import React, {forwardRef} from "react";

function ForwardRef2(props, ref) {
    return(
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(ForwardRef2);