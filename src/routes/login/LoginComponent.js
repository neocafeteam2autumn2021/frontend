import React, { useEffect, useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
// import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { signin } from '../../redux/actions/userActions';
// import LoadingComponent from '../../components/loading/LoadingComponent';
import { auth } from "../../firebase";
import firebase from "firebase/app";
import auth_back from "../../assets/images/auth_back.png";
import OtpInput from 'react-otp-input';

const useStyles = createUseStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundImage: `url(${auth_back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    block: {
        width: 505,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 64,
        "& > :last-child > div > div > input": {
            borderRadius: 8,
            border: [[1, 'solid', '#AFAFAF']],
            padding: [1.5, 10.5],
            width: '100% !important',
            height: '100% !important',
            fontSize: 32,
            fontWeight: 400,
            color: theme.color.mineShaft,
        },
        "& > :last-child > div:nth-child(4) > div": {
            width: '40px !important',
            height: '40px !important',
            margin: 2.5
        },
    },
    blockError: {
        "& > :last-child > div > div > input": {
            border: [[1, 'solid', 'red']],
        }
    },
    kicker: {
        ...theme.typography.kicker,
        color: theme.color.tundora,
        margin: [67, 0, 10],
    },
    blockTitle: {
        ...theme.typography.blockTitle,
        color: theme.color.tundora
    },
    subTitle: {
        ...theme.typography.subtitle,
        color: theme.color.tundora,
        marginTop: 8
    },
    otpKicker: {
        ...theme.typography.kicker,
        fontWeight: 400,
        margin: [33, 0, 9],
    },
    otpKickerError: {
        color: 'red',
    },
    innerBlock: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    telInput: {
        borderRadius: 8,
        width: '100%',
        border: [[1, 'solid', '#AFAFAF']],
        padding: [15, 32],
        fontSize: 20,
        color: theme.color.tuna,
        textAlign: 'center'
    },
    button: {
        ...theme.typography.button,
        width: '100%',
        borderRadius: 10,
        padding: [19.5, 0],
    },
    nextButton: {
        backgroundColor: theme.color.gunPowder,
        color: theme.color.frenchGray,
        marginTop: 39,
    },
    backButton: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: [13.5, 45],
        background: 'rgba(176, 176, 176, 0.3)',
        borderRadius: 10,
    },
    confirmButton: {
        backgroundColor: theme.color.gunPowder,
        color: theme.color.frenchGray,
        marginTop: 39
    },
    activeButton: {
        backgroundColor: theme.color.emerald,
        color: 'white',
        marginTop: 39
    },
    resendButton: {
        backgroundColor: 'white',
        color: theme.color.tundora,
        border: [[2, 'solid', '#797685']],
        marginTop: 20
    },
    activeResendButton: {
        backgroundColor: 'white',
        color: theme.color.emerald,
        border: [[2, 'solid', theme.color.emerald]],
        marginTop: 20
    },
}));

function LoginComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    // const dispatch = useDispatch();

    // const userLogIn = useSelector((state) => state.userSignin);
    // const { loading } = userLogIn;
    // const { loading, error } = userLogIn;

    const [mynumber, setnumber] = useState('');
    const [otp, setotp] = useState({otp: ''});
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const [timeLeft, setTimeLeft] = useState(30);
    const [otpWrong, setOtpWrong] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
            if (timeLeft === 0) {
                
            } else {
                setTimeLeft((t) => t - 1);
            }
      }, 1000);
      return () => clearInterval(intervalId);
    }, [timeLeft]);

    // Sent OTP
    const signin = () => {
        
        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {size: "invisible"});
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setTimeLeft(30)
            setshow(true);
        })
        .catch((err) => {
            alert(err);
            window.location.reload()
        })}

    // Back
    const onClickBack = () => {
        setnumber('');
        setshow(false);
        }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp.otp === '' || final === null)
            return;
        final.confirm(otp.otp).then((result) => {
            result.user.getIdToken(true)
            .then(latestToken => localStorage.setItem('userInfo', JSON.stringify(latestToken)));
            
        }).catch((err) => {
            setOtpWrong(true)
        })}

    return (
        <Column className={classes.container}
            vertical='center'
            horizontal='center'>
            {show ? <button onClick={onClickBack} className={classes.backButton}>Назад</button> : null}
            <Column className={otpWrong ? `${classes.block} ${classes.blockError}` : `${classes.block}`} horizontal='center'>
                <div className={classes.innerBlock} style={{ display: !show ? "flex" : "none" }}>
                    <div className={classes.blockTitle}>
                        Вход
                    </div>
                    <div className={classes.kicker} >Номер телефона</div>
                    <input
                        value={mynumber}
                        className={classes.telInput}
                        type="tel" placeholder="+996 (000) 00 00 00"
                        onChange={(e) => { setnumber(e.target.value) }}
                        required />
                  <div id="recaptcha-container"></div>
                  <button
                    className={mynumber.length > 0 ? `${classes.activeButton} ${classes.button}` : `${classes.nextButton} ${classes.button}`}
                    onClick={signin}>Далее</button>
                </div>
                <div className={classes.innerBlock} style={{ display: show ? "flex" : "none" }}>
                    <div className={classes.blockTitle}>
                        СМС код
                    </div>
                    <div className={classes.subTitle} >Код был отправлен на номер {mynumber}</div>
                    <div className={otpWrong ? `${classes.otpKicker} ${classes.otpKickerError}` : `${classes.otpKicker}`} >
                        {otpWrong ? 'Неверный код*' : 'Введите код'}</div>
                    <OtpInput
                        value={otp.otp}
                        onChange={(otp) => {
                            setotp({ otp })
                            setOtpWrong(false)
                        }}
                        numInputs={6}
                         />
                    {otp && otp.otp.length === 6 && !otpWrong ?
                        <button className={ `${classes.activeButton} ${classes.button}`}
                        onClick={ValidateOtp}>Подтвердить</button> :
                        <button className={ `${classes.confirmButton} ${classes.button}`}>Подтвердить</button>}
                    {timeLeft === 0 ?
                        <button className={`${classes.activeResendButton} ${classes.button}`}
                        onClick={signin}>Отправить повторно</button> :
                        <button className={`${classes.resendButton} ${classes.button}`}>Отправить повторно ({timeLeft} сек)</button>
                    }
                </div>
            </Column>
        </Column>
    );
}

export default LoginComponent;