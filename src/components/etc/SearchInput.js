import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import search_img from "../../assets/images/search_img.png";

const useStyles = createUseStyles((theme) => ({
    searchFoodBar: {
        width: '100%',
        padding: [10, 0, 10, 32],
        borderBottom: [2, 'solid', '#0A1329'],
    },
    searchFood: {
        width: 300,
        padding: ['9px', '37px', '9px', '60px'],
        background: theme.color.tunaDark,  
        borderRadius: 8,
        border: 'none',
        backgroundImage: `url(${search_img})`,
        backgroundSize: [30, 30],
        backgroundPosition: ['5%', '50%'],
        backgroundRepeat: 'no-repeat',
    }
}));

function SearchInput() {

    const theme = useTheme();
    const classes = useStyles({ theme });

    const [search, setSearch] = useState("");

    function onHandleChangeInput(e) {
        console.log(search);
        setSearch(e.target.value);
    }

    return (
        <div
        className={classes.searchFoodBar}
        >
          <input
            type="text"
            className={classes.searchFood}
            onChange={onHandleChangeInput}
            placeholder="Поиск" />
        </div>
    );
}

export default SearchInput;