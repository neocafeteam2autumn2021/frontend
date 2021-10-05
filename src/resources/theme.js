const color = {
    tundora: '#464646',
    gunPowder: '#4A4754',
    frenchGray: '#C2C1C8',
    dustyGray: '#9B9B9B',
    mineShaft: '#383838',
    tuna: '#3D3E48',
    emerald: '#4CC179',
    grayishBlue2: '#9fa2b4',
    grayishBlue3: '#bdc3c7',
    lightBlue: '#3751FF',
    lightGrayishBlack: '#E5E5E5', // background color
    lightGrayishBlue2: '#DFE0EB',
    paleBlue: '#DDE2FF',
    paleBlueTransparent: 'rgba(221, 226, 255, 0.08)',
    veryDarkGrayishBlue: '#373a47'
};

const typography = {
    blockTitle: {
        fontWeight: 700,
        fontSize: '58px',
        lineHeight: '66.64px',
    },
    kicker: {
        fontWeight: 700,
        fontSize: 16,
    },
    subtitle: {
        fontWeight: 700,
        fontSize: 16,
    },
    button: {
        fontWeight: 700,
        fontSize: 18
    },
    link: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: color.lightBlue,
        textAlign: 'right',
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': {
            color: color.grayishBlue
        }
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.2
    },
    title: {
        fontWeight: 500,
        fontSize: 28,
        lineHeight: '33px',
        letterSpacing: 0.3
    }
};

const Theme = {
    // https://www.colorhexa.com/A4A6B3
    color,
    typography
};

export default Theme;
