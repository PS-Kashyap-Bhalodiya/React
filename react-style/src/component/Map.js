import React from "react";

import {Table} from 'react-bootstrap';

function Map() {

    const students = ['anil', 'sidhu', 'dev', 'bhavya', 'akshi'];
    // map function: 
    // Que: Why we have to used map function instead of for loop in react
    // In return statement map supports iterating but for loop can't support in return statement.
    // NOTE: In the map() function the key should be unique.

    const users = [
        {name: 'sachin', email: 'sachin@gmail.com', age: 50},
        {name: 'dravid', email: 'dravid@gmail.com', age: 45},
        {name: 'pravin', email: 'pravin@gmail.com', age: 54}
    ];

    const myusers = [
        {name: 'sachin', email: 'sachin@gmail.com', age: 50, address: [
            {hn: '10', city: 'noida', country: 'india'}
        ]},
        {name: 'dravid', email: 'dravid@gmail.com', age: 45, address: [
            {hn: '21', city: 'mumbai', country: 'india'}
        ]},
        {name: 'pravin', email: 'pravin@gmail.com', age: 54, address: [
            {hn: '01', city: 'delhi', country: 'india'}
        ]}
    ]

    return(
        <div>
            {/* Array using map function */}
            
            <h1>map function:</h1>
            {
                students.map((data) => 
                    <h3>{data}</h3>
                )
            }

            {/* List with bootstrap table */}
            <h1>List with bootstrap table</h1>
            <Table striped variant="dark">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
                {
                    users.map((data) =>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                }
            </tbody>
            </Table>

            {/* Nested List with Nested Array */}
            <h1>Nested List with Nested Array</h1>
            <Table striped variant="dark">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Address</td>
                </tr>
                {
                    myusers.map((data) =>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                            <td>
                                <Table variant="dark" striped>
                                {
                                    data.address.map((item) => 
                                        <tr>
                                            <td>{item.hn}</td>
                                            <td>{item.city}</td>
                                            <td>{item.country}</td>
                                        </tr>
                                    )
                                }
                                </Table>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            </Table>

        </div>
    )
}

export default Map;