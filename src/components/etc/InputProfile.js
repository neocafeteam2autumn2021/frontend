import React, { useEffect, useState } from "react";
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from "react-redux";
import { Column } from "simple-flexbox";
import { signout } from "../../redux/actions/userActions";
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';

const useStyles = createUseStyles((theme) => ({
    block: {
        width: 430,
    },
    formBlock: {
        borderRadius: 20,
        border: [[1, 'solid', theme.color.tuna]],
        backgroundColor: theme.color.ebonyClay,
        padding: [20, 26, 40, 26],
    },
    kicker: {
        ...theme.typography.kicker,
        color: theme.color.mercury,
        textAlign: 'left',
        margin: [30, 0, 10],
    },
    profileInput: {
        borderRadius: 8,
        width: '100%',
        border: [[1, 'solid', theme.color.tuna]],
        backgroundColor: theme.color.tunaDark,
        padding: [15, 7],
        fontSize: 20,
        color: theme.color.mercury,
        textAlign: 'left'
    },
    button: {
        ...theme.typography.button,
        width: '430px',
        height: '64px',
        borderRadius: 10,
        padding: [19.5, 0],
        border: 'none',
        marginTop: 39,
        cursor: 'pointer',
        display: 'none'
    },
    activeSaveButton: {
        display: 'block',
        backgroundColor: theme.color.emerald,
        color: 'white',
    }
}));

export default function InputProfile() {

    const theme = useTheme();
    const classes = useStyles({ theme });
    const history = useHistory();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [mynumber, setNumber] = useState('');
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const {name, surname, date, mynumber} = JSON.parse(localStorage.getItem('userInfoFull'));
        setName(name);
        setSurname(surname);
        setDate(date);
        setNumber(mynumber);
      }, []);

    const saveProfileIfo = () => {
        alert("saved")
        }
    
    const onClickLogOut = () => {
        dispatch(signout());
        history.push(SLUGS.login)
    }
    
    const onChangeDate = (e) => {
        setChanged(true);
        let val = e.target.value
        let newVal = ""
        if(val.length === 2 && date.length < val.length) newVal = val + "."
        else if(val.length === 5 && date.length < val.length) newVal = val + "."
        else if(val.length < 11) newVal = val
        else newVal = date
        setDate(newVal);
    }

    const onChangePhone = (e) => {
        setChanged(true);
        let val = e.target.value;
        let newVal = ""
        if(val.length === 1 && mynumber.length < val.length) newVal = "+996 ("
        else if(val.length === 9 && mynumber.length < val.length) newVal = val + ") "
        else if(val.length === 13 && mynumber.length < val.length) newVal = val + " "
        else if(val.length === 16 && mynumber.length < val.length) newVal = val + " "
        else if(val.length < 20) newVal = val
        else newVal = mynumber
        setNumber(newVal)
    }
    
    return (
        <Column className={classes.block}>
            <form className={classes.formBlock}>
                <div className={classes.kicker}>Имя</div>
                <input
                    value={name}
                    className={classes.profileInput}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                        setChanged(true);}}
                    required />
                <div className={classes.kicker}>Фамилия</div>
                <input
                    value={surname}
                    className={classes.profileInput}
                    type="text"
                    onChange={(e) => {
                        setSurname(e.target.value);
                        setChanged(true);}}
                    required />
                <div className={classes.kicker}>Дата рождения</div>
                <input
                    value={date}
                    className={classes.profileInput}
                    type="text"
                    onChange={onChangeDate}
                    required />
                <div className={classes.kicker}>Номер телефона</div>
                <input
                    value={mynumber}
                    className={classes.profileInput}
                    type="text"
                    onChange={onChangePhone}
                    required />
            </form>
            <button
                className={changed && name.length > 0 && surname.length > 0 && date.length > 0 && mynumber.length > 0 ? `${classes.activeSaveButton} ${classes.button}` : classes.button}
                onClick={saveProfileIfo}
                >Сохранить</button>
            
            <button
                    className={`${classes.activeSaveButton} ${classes.button}`}
                    onClick={onClickLogOut}
                    >Log out</button>
        </ Column>
    );
};