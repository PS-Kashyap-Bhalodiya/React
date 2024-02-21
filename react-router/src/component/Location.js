import { useLocation } from "react-router-dom";

function Location() {
    const location = useLocation();

    return(
        <>
            <h2>Current Path: {location.pathname}</h2>
            <p>Query Params: {JSON.stringify(location.search)}</p>
        </>
    );
}

export default Location;