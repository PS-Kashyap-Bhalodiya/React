import { Link, Outlet } from "react-router-dom";

function NestedRouting() {

    return(
        <>
            <h1>Contact Us Page</h1>
            <h2>Here we have some other business</h2>
            <Link to="company">Company</Link><br/>
            <Link to="channel">Channel</Link>
            <Outlet />
        </>
    )
}

export default NestedRouting;