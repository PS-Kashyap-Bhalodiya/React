import React, {useEffect, useState} from 'react';

// two way we can create a useEffect: 1) simple, 2) conditional

// First way

// function UseEffect() {

//     const [counter, setCounter] = useState(0)

//     useEffect(() => {
//         console.warn("useEffect will call");
//     })

//     return(
//         <div>
//             {/* whene we create an component, when we update state and props then the useEffect will call */}
//             <h1>useEffect in react</h1>
//             <button onClick={() => setCounter(setcounter + 1)}>Update Counter</button>
//         </div>
//     )
// }

// 2nd way and with state
// function UseEffect() {
//     const [data, setData] = useState(1);
//     const [count, setCount] = useState(10);

//     // useEffect function work on both data and count.
//     // useEffect(() => {
//     //     console.warn("use effect call");
//     // })
    
//     // To specify only useEffect work in certain state so we will use in [] and write particular name of state
//     useEffect(() => {
//         console.warn("called with data state");
//     }, [data])
    
    

//     return(
//         <div>
//             <h1>Use Effect in react</h1>
//             <button onClick={() => setCount(count + 1)}>Update counter - {count}</button>
//             <button onClick={() => setData(data + 1)}>Update Data - {data}</button>
//         </div>
//     )
// }

// 2nd way and with props
function UseEffect(props) {
    const [data, setData] = useState(1);
    const [count, setCount] = useState(10);
    
    useEffect(() => {
        console.warn("called with data props");
    }, [props.count])

    return(
        <div>
            <h1>Count props: {props.count}</h1>
            <h1>Data porps: {props.data}</h1>

            <button onClick={() => setCount(count + 1)}>Update counter - {count}</button>
            <button onClick={() => setData(data + 1)}>Update Data - {data}</button>

        </div>
    )
}

export default UseEffect;