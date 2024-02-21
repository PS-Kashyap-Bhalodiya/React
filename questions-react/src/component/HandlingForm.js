import React, {useState} from "react";

function HandlingForm() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");


    function getFormData(e) {
        console.warn(name, tnc, interest);
        e.preventDefault();
    }

    return(
        <div>
            <h1>Handling form in react</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name: " onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>select options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept terms and conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HandlingForm;