// rfc

import React from 'react'

function FunctionalComponent() {
    return (
        // we have to create only one tag and all the other tags are wrapped into one tag.
        <div>
            <h1>Functional component</h1>
            <h2>Functional component</h2>
        </div>
    )
}

export default FunctionalComponent;

// another way to export the functional component.

// export default function FunctionalComponent() {
//   return (
//     <div>
      
//     </div>
//   )
// }
