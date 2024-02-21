import { useSearchParams } from "react-router-dom";


function SearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    
    const age = searchParams.get('age');
    const city = searchParams.get('city');

    return(
        <>
            <h1>Filter page</h1>
            <p>My Age is: {age}</p>
            <p>My City is: {city}</p>

            <button onClick={() => setSearchParams({age: 40})}>Set Age in query Params</button><br />
            <input type="text" onChange={(e) => setSearchParams({text: e.target.value, age:10})} placeholder="Set Text in Query Params" />
        </>
    )
}

export default SearchParams;