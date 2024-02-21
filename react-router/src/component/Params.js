import { useParams } from "react-router-dom";

function Params() {
    const params = useParams();
    const {name} = params;

    return(
        <>
            {/* It is used to capture values from the URL, which can then be used to further 
                specify what to render in a particular view.

                we can used multiple parameters in the URL using params keyword we capture the values.
            */}
            <h1>This is a {name}'s page</h1>
        </>
    )
}

export default Params;