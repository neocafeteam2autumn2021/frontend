import React, { useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { signin } from '../../redux/actions/userActions';
// import LoadingComponent from '../../components/loading/LoadingComponent';
import { auth } from "../../firebase";
import firebase from "firebase/app";
import auth_back from "../../assets/images/auth_back.png";

const useStyles = createUseStyles((theme) => ({
    container: {
        width: '1194px',
        height: '100vh',
        backgroundImage: `url(${auth_back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    block: {
        width: 505,
        borderRadius: 20,
        backgroundColor: theme.color.baseWhite,
        '@media (max-width: 425px)': {
            width: 300
        }
    }
}));

function LoginComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    // const dispatch = useDispatch();

    // const userLogIn = useSelector((state) => state.userSignin);
    // const { loading } = userLogIn;
    // const { loading, error } = userLogIn;

    const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  // Sent OTP
  const signin = () => {

      if (mynumber === "" || mynumber.length < 10) return;

      let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
          setfinal(result);
          alert("code sent")
          setshow(true);
      })
          .catch((err) => {
              alert(err);
              window.location.reload()
          });
    }

  // Validate OTP
        const ValidateOtp = () => {
            if (otp === null || final === null)
                return;
            final.confirm(otp).then((result) => {
                alert("Success")
            }).catch((err) => {
                alert("Wrong code");
            })
        }

    return (
        <Column className={classes.container}
            vertical='center'
            horizontal='center'>
            <Column className={classes.block}>
                <div style={{ paddingBottom: 32, paddingTop: 8 }}>
                    Вход
                </div>
                <div style={{ display: !show ? "block" : "none" }}>
                  <input value={mynumber} onChange={(e) => { 
                     setnumber(e.target.value) }}
                      placeholder="phone number" />
                  <br /><br />
                  <div id="recaptcha-container"></div>
                  <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </Column>
        </Column>
    );
}

export default LoginComponent;