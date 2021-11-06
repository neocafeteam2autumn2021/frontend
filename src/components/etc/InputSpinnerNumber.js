import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import minusModal from "../../assets/images/minusModal.png";
import plusModal from "../../assets/images/plusModal.png";

const useStyles = createUseStyles((theme, background) => ({
    inputSpinnerBlock: {
        width: 137,
        height: 50,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: [7.5, 8],
        backgroundColor: background !== "no" ? "transparent" : theme.color.mako,
        borderRadius: '8px',
    },
    inputSpinner: {
        fontWeight: 500,
        fontSize: 18,
        color: theme.color.mercury
    },
    inputSpinnerButton: {
        cursor: 'pointer',
    }
}));

function InputSpinnerNumber({pieces, setPieces, background}) {

    const theme = useTheme();
    const classes = useStyles({ theme, background });

    function onClickMinus() {
        if(pieces > 1) {
            setPieces(pieces-1);
        }
    }

    function onClickPlus() {
        setPieces(pieces+1);
    }

    return (
        <div className={classes.inputSpinnerBlock}>
            <div onClick={onClickMinus} className={classes.inputSpinnerButton}>
                <img src={minusModal} alt="minusModal" />
            </div>
            <span className={classes.inputSpinner}>{pieces}</span>
            <div onClick={onClickPlus} className={classes.inputSpinnerButton}>
                <img src={plusModal} alt="plusModal" />
            </div>
        </div>
    );
}

export default InputSpinnerNumber;