import { useEffect, useState } from "react";

function GetMethod() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/todo").then((resolve) => {
            resolve.json().then((response) => {
                console.warn("Resolve: ", response);
                setData(response);
            })
        })
    }, [])
    console.warn(data);

    return(
        <div>
            <h1>GET API Call</h1>
            <table border="1">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile No.</td>
                </tr>
                {
                    data.map((item) => {
                        <tr>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default GetMethod;