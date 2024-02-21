import { NavLink } from "react-router-dom";

function Style() {
    return(
        <>
            <h1>this is a style page</h1>
            <ul className="navbar">
                <li><NavLink className="nav-bar-link" style={{color: 'red'}} to="/about">About</NavLink><br /></li>
                <li><NavLink className="nav-bar-link active" to="/">Home</NavLink></li>
                <li style={({isActive}) => {return {backgroundColor: isActive ? 'green' : 'red'}}}><NavLink className="nav-bar-link" to="/Params">Params</NavLink></li>
            </ul>
        </>
    )
}

export default Style;