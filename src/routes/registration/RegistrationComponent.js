import React, { useEffect, useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../../firebase";
import firebase from "firebase/app";
import OtpInput from 'react-otp-input';
import auth_back from "../../assets/images/auth_back.png";
import LoadingComponent from '../../components/loading/LoadingComponent';
import { checkUser, register } from '../../redux/actions/userActions';
import { useHistory } from 'react-router';
import SLUGS from '../../resources/slugs';
import Toast from '../../components/toast/Toast';
import { USER_REGISTER_RESET } from '../../redux/constants/userConstants';

const useStyles = createUseStyles((theme) => ({
    container: {
        height: '120vh',
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
    kicker: {
        ...theme.typography.kicker,
        color: theme.color.tundora,
        textAlign: 'center',
        margin: [20, 0, 10],
    },
    blockTitle: {
        ...theme.typography.blockTitle,
        color: theme.color.tundora,
        marginBottom: 25
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
        border: 'none',
        cursor: 'pointer'
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

function RegistrationComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const dispatch = useDispatch();
    const history = useHistory();

    const userRegister = useSelector((state) => state.userRegister);
    const { loadingRegister, dataRegister, errorRegister } = userRegister;

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');

    const checkUserReq = useSelector((state) => state.checkUser);
    const { loadingCheckUser, dataCheckUser } = checkUserReq;

    const [mynumber, setnumber] = useState('');
    const [otp, setotp] = useState({otp: ''});
    const [showRegister, setShowRegister] = useState(true);
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const [timeLeft, setTimeLeft] = useState(30);
    const [otpWrong, setOtpWrong] = useState(false);

    useEffect(() => {
        if(dataCheckUser) {
            setTimeout(function(){
                window.location.reload();
                dispatch({type: USER_REGISTER_RESET});
            }, 2000);
        }
    }, [dataCheckUser, dispatch]);

    useEffect(() => {
        if(dataRegister) {
            history.push(SLUGS.init);
            setTimeout(function(){ dispatch({type: USER_REGISTER_RESET}); }, 3000);
        } else if(errorRegister) {
            setTimeout(function(){ dispatch({type: USER_REGISTER_RESET}); }, 2000);
        }
    }, [dataRegister, dispatch, history, errorRegister]);

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
        dispatch(checkUser(mynumber));
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {size: "invisible"});
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            setTimeLeft(30);
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

    const onChangePhone = (e) => {
        let val = e.target.value;
        let newVal = ""
        if(val.length === 1 && mynumber.length < val.length) newVal = "+996 (" + val
        else if(val.length === 9 && mynumber.length < val.length) newVal = val + ") "
        else if(val.length === 13 && mynumber.length < val.length) newVal = val + " "
        else if(val.length === 16 && mynumber.length < val.length) newVal = val + " "
        else if(val.length < 20) newVal = val
        else newVal = mynumber
        setnumber(newVal)
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp.otp === '' || final === null)
            return;
        final.confirm(otp.otp).then((result) => {
            let uid = result.user.uid;
            result.user.getIdToken(true)
            .then(latestToken => {
                dispatch(register(uid, date.split(".").reverse().join("-"), latestToken, mynumber.replace(/\(|\)|\s/gi, ''), name, surname));
            });
        }).catch((err) => {
            setOtpWrong(true);
        })}

    const onClickRegister = (event) => {
        event.preventDefault();
        setShowRegister(false);
    }
    
    const onChangeDate = (e) => {
        let val = e.target.value
        let newVal = ""
        if(val.length === 2 && date.length < val.length) newVal = val + "."
        else if(val.length === 5 && date.length < val.length) newVal = val + "."
        else if(val.length < 11) newVal = val
        else newVal = date
        setDate(newVal)
    }

    return (
        <Column className={classes.container}
            vertical='center'
            horizontal='center'>
            {errorRegister ? <Toast toastList={[{id: 2, title: '????????????', description: errorRegister.toString(), type: "error"}]} /> : null}
            {dataCheckUser ? <Toast toastList={[{id: 3, title: '???? ?????? ????????????????????????????????', type: "error"}]} /> : null}
            { loadingRegister || loadingCheckUser ? <LoadingComponent loading /> : null}
            {show ? <button onClick={onClickBack} className={classes.backButton}>??????????</button> : null}
            <Column className={classes.block} horizontal='center'>
                <div style={{ display: showRegister ? "block" : "none" }}>
                    <div className={classes.blockTitle}>
                        ??????????????????????
                    </div> 
                    <form onSubmit={onClickRegister}>
                        <div className={classes.kicker}>??????</div>
                            <input
                                value={name}
                                className={classes.telInput}
                                type="text" placeholder="???????? ??????"
                                onChange={(e) => { setName(e.target.value) }}
                                required />
                            <div className={classes.kicker}>??????????????</div>
                            <input
                                value={surname}
                                className={classes.telInput}
                                type="text" placeholder="???????? ??????????????"
                                onChange={(e) => { setSurname(e.target.value) }}
                                required />
                            <div className={classes.kicker}>???????? ????????????????</div>
                            <input
                                value={date}
                                className={classes.telInput}
                                type="text" placeholder="???????? ???????? ????????????????"
                                onChange={onChangeDate}
                                required />
                            <input
                                type="submit"
                                className={name.length > 0 && surname.length > 0 && date.length > 0 ? `${classes.activeButton} ${classes.button}` : `${classes.nextButton} ${classes.button}`}
                                value="??????????" />
                    </form>
                </div>
                <div className={classes.innerBlock} style={{ display: !show && !showRegister ? "flex" : "none" }}>
                    <div className={classes.blockTitle}>
                        ??????????????????????
                    </div>
                    <div className={classes.kicker} >?????????? ????????????????</div>
                    <input
                        value={mynumber}
                        className={classes.telInput}
                        type="tel" placeholder="+996 (000) 00 00 00"
                        onChange={onChangePhone}
                        required />
                    <div id="recaptcha-container"></div>
                    <button
                        className={mynumber.length > 0 ? `${classes.activeButton} ${classes.button}` : `${classes.nextButton} ${classes.button}`}
                        onClick={signin}>??????????</button>
                </div>
                <div className={classes.innerBlock} style={{ display: show && !showRegister ? "flex" : "none" }}>
                    <div className={classes.blockTitle}>
                        ?????? ??????
                    </div>
                    <div className={classes.subTitle} >?????? ?????? ?????????????????? ???? ?????????? {mynumber.replaceAll(' ', '')}</div>
                    <div className={otpWrong ? `${classes.otpKicker} ${classes.otpKickerError}` : `${classes.otpKicker}`} >
                        {otpWrong ? '???????????????? ??????*' : '?????????????? ??????'}</div>
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
                        onClick={ValidateOtp}>??????????????????????</button> :
                        <button className={ `${classes.confirmButton} ${classes.button}`}>??????????????????????</button>}
                    {timeLeft === 0 ?
                        <button className={`${classes.activeResendButton} ${classes.button}`}
                        onClick={signin}>?????????????????? ????????????????</button> :
                        <button className={`${classes.resendButton} ${classes.button}`}>?????????????????? ???????????????? ({timeLeft} ??????)</button>
                    }
                </div>
            </Column>
        </Column>
    );
}

export default RegistrationComponent;