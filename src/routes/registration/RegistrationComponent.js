import React, { useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
// import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { signin } from '../../redux/actions/userActions';
// import LoadingComponent from '../../components/loading/LoadingComponent';
import auth_back from "../../assets/images/auth_back.png";

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
        border: 'none'
    },
    nextButton: {
        backgroundColor: theme.color.gunPowder,
        color: theme.color.frenchGray,
        marginTop: 39,
    },
    activeNextButton: {
        backgroundColor: theme.color.emerald,
        color: 'white',
        marginTop: 39
    }
}));

function RegistrationComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    // const dispatch = useDispatch();

    // const userLogIn = useSelector((state) => state.userSignin);
    // const { loading } = userLogIn;
    // const { loading, error } = userLogIn;

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');

    // Sent OTP
    const signin = (event) => {
        event.preventDefault();
        alert("hi")}

    return (
        <Column className={classes.container}
            vertical='center'
            horizontal='center'>
            <Column className={classes.block} horizontal='center'>
                <div className={classes.blockTitle}>
                    Регистрация
                </div>
                    
                <form onSubmit={signin}>
                    <div className={classes.kicker}>Имя</div>
                        <input
                            value={name}
                            className={classes.telInput}
                            type="text" placeholder="Ваше имя"
                            onChange={(e) => { setName(e.target.value) }}
                            required />
                        <div className={classes.kicker}>Фамилия</div>
                        <input
                            value={surname}
                            className={classes.telInput}
                            type="text" placeholder="Ваша фамилия"
                            onChange={(e) => { setSurname(e.target.value) }}
                            required />
                        <div className={classes.kicker}>Дата рождения</div>
                        <input
                            value={date}
                            className={classes.telInput}
                            type="text" placeholder="Ваша дата рождения"
                            onChange={(e) => { setDate(e.target.value) }}
                            required />
                        <input
                            type="submit"
                            className={name.length > 0 && surname.length > 0 && date.length > 0 ? `${classes.activeNextButton} ${classes.button}` : `${classes.nextButton} ${classes.button}`}
                            value="Далее" />
                    </form>
            </Column>
        </Column>
    );
}

export default RegistrationComponent;