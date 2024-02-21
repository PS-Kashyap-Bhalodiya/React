import {Link} from 'react-router-dom';

function Links() {
    return(
        <div>
            <Link to="/about">About</Link><br />
            <Link to="/">Home</Link>
            <Link to="/Params">Params</Link>
        </div>
    );
}

export default Links;