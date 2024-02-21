import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <h1>About Us Page</h1>
            <p>This is a about us page for awsome App</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default About;