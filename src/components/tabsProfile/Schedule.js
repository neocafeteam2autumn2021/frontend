import React, { useEffect, useState } from "react";
import { createUseStyles, useTheme } from 'react-jss';
import { Column } from "simple-flexbox";
import './shedule.css'

const useStyles = createUseStyles((theme) => ({
    scheduleBlock: {
        backgroundColor: theme.color.ebonyClay,
        border: [[1, 'solid', theme.color.tuna]],
        borderRadius: '20px',
        padding: [25, 25, 11]
    },
    scheduleHeader__title: {
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '28px',
    },
    scheduleHeader: {
        color: theme.color.iron
    },
    scheduleHeader__item: {
        display: "flex",
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: 20
    },
    scheduleIcon: {
        display: "block",
        width: '21px',
        height: '21px',
        borderRadius: 50,
        marginRight: 12,
    },
    scheduleIcon__day: {
        background: theme.color.atomicTangerine,
    },
    scheduleIcon__night: {
        background: theme.color.heliotrope,
    },
    scheduleIcon__free: {
        background: theme.color.emerald,
    }
}));

export default function Schedule() {

    const theme = useTheme();
    const classes = useStyles({ theme });

    const [monthDays, setMonthDays] = useState([]);

    useEffect(() => {
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        var date = new Date(year, month, 1);
        var days = [];
        var daysName = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        while (date.getMonth() === month) {
            let newObj = {}
            let newDate = new Date(date);
            let dayName = daysName[newDate.getDay()]
            let selfDay = newDate.getDate();
            newObj[dayName] = selfDay;
            days.push(newObj);
            date.setDate(date.getDate() + 1);
        }
        var lengthArr = daysName.indexOf(Object.keys(days[0])[0]) - 1;
        for(let i = 32; i < 32 + lengthArr; i++) {
            let a = {}
            a[i] = 0
            days.unshift(a)
        }
        setMonthDays(days);
      }, []);

    return (
        <Column className={classes.scheduleBlock}>
            <div className={classes.scheduleHeader}>
                <div className={classes.scheduleHeader__title}>График работы</div>
                <div className={classes.scheduleHeader__item}>
                    <div className={`${classes.scheduleIcon} ${classes.scheduleIcon__day}`}></div>
                    <div>Дневная смена с 09:00 до 16:00</div>
                </div>
                <div className={classes.scheduleHeader__item}>
                    <div className={`${classes.scheduleIcon} ${classes.scheduleIcon__night}`}></div>
                    <div>Вечерняя смена с 16:00 до 22:00</div>
                </div>
                <div className={classes.scheduleHeader__item}>
                    <div className={`${classes.scheduleIcon} ${classes.scheduleIcon__free}`}></div>
                    <div>Выходной</div>
                </div>
            </div>
            <div className="sheduleCalendar">
                <ul className="weekdays">
                    <li>Пн</li>
                    <li>Вт</li>
                    <li>Ср</li>
                    <li>Чт</li>
                    <li>Пт</li>
                    <li>Сб</li>
                    <li>Вс</li>
                </ul>
                <ul className="days">
                    {monthDays.map((days) => {
                        let key = Object.keys(days)[0];
                        let value = days[key];
                        if(value !== 0) {
                            if(key === "Пн" || key === "Сб" || key === "Вс") return <li className="workDays" key={value}>{value}</li>
                            else if(key === "Ср") return <li className="workNights" key={value}>{value}</li>
                            else return <li className="freeDays" key={value}>{value}</li>
                        }
                        return <li className="noDays" key={key}></li>
                    })}
                </ul>
            </div>
        </ Column>
    );
};