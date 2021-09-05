import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import types from "../../types/types";

const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const lastPath = localStorage.getItem("lastPath") || "/";

    const handleLogin = () => {
        // history.push("/");

        /* const action = {
            name: "user",
        } */
        
        dispatch({
            type: types.login,
            payload: {
                name: "User 1"
            }
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5" >
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default LoginScreen;