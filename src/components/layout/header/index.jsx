import { Box } from '@mui/material'
import React from 'react'
import LayoutProvider from '../provider/layout-provider'
import TopHeader from './top-header'
import LowerHeader from './lower-header'
import MainHeader from './main-header'

const Header = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <LowerHeader />
        </>

    )
}

export default Header