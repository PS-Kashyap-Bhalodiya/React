import { Link } from "react-router-dom";

function Redirect_404page() {
    return(
        <div>
            {/* If we need to pass the URL and if the URL is not exist (404 error) then we need
                to create one file for 404 error.
            */}
            <h1>Page 404</h1>
            <p>This is URL is not present</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Redirect_404page;