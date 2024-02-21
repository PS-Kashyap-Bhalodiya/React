import React from "react";
import Reuse2 from "./Reuse2";

function Reuse() {

    const users = [
        {name: 'kp', age: 20, city: 'patana'},
        {name: 'hj', age: 21, city: 'mumbai'},
        {name: 'gk', age: 22, city: 'chennai'}
    ];

    return(
        <div>
            <h1>Reuse component with List</h1>
            {
                users.map((item, i)=>
                    <Reuse2 data={item} />
                )
            }
        </div>
    )
}

export default Reuse;