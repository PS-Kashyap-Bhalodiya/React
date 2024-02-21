import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate();
    const navToPage = () => {
        // conditional routing
        let x = true;
        x ? navigate('/about') : navigate('/params');
    }

    const navToParams = (url) => {
        // navigation on function calling
        navigate(url);
    }

    return(
        <>
            <h1>Navigation programming</h1>
            <button onClick={() => navigate('/about')}>Go to about page</button><br />
            <button onClick={() => navigate('/params')}>Go to params page</button><br />
            
            <button onClick={() => navToPage()}>Go to about page</button><br />
            <button onClick={() => navToPage()}>Go to params page</button><br />

            <button onClick={() => navToParams('/about')}>Go to about page</button><br />
            <button onClick={() => navToParams('/params')}>Go to params page</button><br />

        </>
    )
}

export default Navigation;