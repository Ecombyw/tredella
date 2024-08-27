"use client"

import { styled } from "@mui/material";

export const NavLink = styled('a')(({ theme }) => ({
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    lineHeight: '1.875rem',
    padding: '10px',
    // margin: '5px',
    display: 'inline-block',
    fontWeight: "500",
    letterSpacing: '1.5px',
    '& span': {
        display: 'inline-block',
        '&:after': {
            content: '""',
            display: 'block',
            margin: '0 auto',
            width: 0,
            height: '2px',
            backgroundColor: 'white',
            transition: 'opacity .3s ease, width .3s ease',
        },
    },
    '&:hover span:after': {
        width: '100%',
    },
}));
export const FooterNavLink = styled('a')(({ theme }) => ({
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    lineHeight: '1.7rem',
    color:theme.palette.textColor.paragraph,
    display: 'inline-block',
    fontWeight: "400",
    letterSpacing: '1.5px',
    '& span': {
        display: 'inline-block',
        '&:after': {
            content: '""',
            display: 'block',
            margin: '0 auto',
            width: 0,
            height: '2px',
            backgroundColor: theme.palette.textColor.paragraph,
            transition: 'opacity .3s ease, width .3s ease',
        },
    },
    '&:hover span:after': {
        width: '100%',
    },
}));
