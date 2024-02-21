import { useState } from "react";


export default function PostMethod() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    function saveUser() {
        console.warn(name, email, mobile);
        let data = {name, email, mobile};
        fetch("http://localhost:4000/todo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((resolve) => {
            console.warn("Result: ", resolve);
            resolve.json().then((response) => {
                console.warn(response);
            });
        });
    }

    return(
        <>
            <h1>Post Method API</h1>
            <input type="text" value = {name} name="name" onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" value = {email} name="email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="text" value = {mobile} name="phone" onChange={(e) => setMobile(e.target.value)} /><br /><br />
            <button type="submit" onClick={saveUser}>Save New User</button>
        </>
    );
}