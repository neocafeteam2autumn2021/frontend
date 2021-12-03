import React, { useEffect, useState } from "react";
import { createUseStyles, useTheme } from 'react-jss';
import { Column } from "simple-flexbox";

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
    },
    logOutButton: {
        display: 'block',
        backgroundColor: theme.color.emerald,
        color: 'white',
        position: "fixed"
    }
}));

export default function InputProfile({ userData }) {

    const theme = useTheme();
    const classes = useStyles({ theme });

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [mynumber, setNumber] = useState('');

    useEffect(() => {
        setName(userData ? userData.name : '');
        setSurname(userData ? userData.surname : '');
        setDate(userData ? userData.date_of_birth.split("-").reverse().join(".") : '');
        setNumber(userData ? userData.phone_number : '');
      }, [userData]);
    
    const onChangeDate = (e) => {
        let val = e.target.value
        let newVal = ""
        if(val.length === 2 && date.length < val.length) newVal = val + "."
        else if(val.length === 5 && date.length < val.length) newVal = val + "."
        else if(val.length < 11) newVal = val
        else newVal = date
        setDate(newVal);
    }

    const onChangePhone = (e) => {
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
                    onChange={(e) => setName(e.target.value)}
                    disabled />
                <div className={classes.kicker}>Фамилия</div>
                <input
                    value={surname}
                    className={classes.profileInput}
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                    disabled />
                <div className={classes.kicker}>Дата рождения</div>
                <input
                    value={date}
                    className={classes.profileInput}
                    type="text"
                    onChange={onChangeDate}
                    disabled />
                <div className={classes.kicker}>Номер телефона</div>
                <input
                    value={mynumber}
                    className={classes.profileInput}
                    type="text"
                    onChange={onChangePhone}
                    disabled />
            </form>
        </ Column>
    );
};