import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoogleToken, selectIsLoggedIn, authorice } from '../components/Auth/autSlice';

function GoogleLoginView() {
    var dispatch = useDispatch();
    var loggedIn = useSelector(selectIsLoggedIn);
    var googleToken = useSelector(selectGoogleToken);

    const googleLogin = (response: any) => {
        console.log(response);
        dispatch(authorice(true, response));
    };

    const googleLogout = () => {
        dispatch(authorice(false, ''));
    };

    const prueba = () => {
        var profile = googleToken.profileObj.name;
        console.log(profile);
        console.log(loggedIn);
        console.log(googleToken);
    }

    return (
        <div>
        {loggedIn  && <h1>Estas Logeado {googleToken.profileObj.name} </h1>}
            {!loggedIn && <h1>No estas logeado</h1>}
        <div> <button onClick={prueba}>prueba</button> </div>  
        {!loggedIn &&
            <GoogleLogin
            clientId="939504627586-ttuki5v3ksospgdgm3uep8oi4i5ld5un.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleLogin}
            onFailure={googleLogin}
            cookiePolicy="single_host_origin"
            uxMode="redirect"
            redirectUri="http://localhost:3000"
            isSignedIn={true}
        />}
        {loggedIn &&
            <GoogleLogout
                clientId="939504627586-ttuki5v3ksospgdgm3uep8oi4i5ld5un.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={googleLogout}
                onFailure={googleLogout}
            />
        }
        </div>      
    );
}

export default GoogleLoginView;