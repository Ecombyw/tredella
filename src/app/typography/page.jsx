import PrimaryDescription from '@/components/typography/primary-description'
import PrimaryHeading from '@/components/typography/primary-heading'
import PrimaryTitle from '@/components/typography/primary-title'
import SecondaryDescription from '@/components/typography/secondary-description'
import SecondaryHeading from '@/components/typography/secondary-heading'
import SecondaryTitle from '@/components/typography/secondary-title'
import SimpleParagraphText from '@/components/typography/simple-paragraph-text'
import { Button, Typography } from '@mui/material'
import React from 'react'

const Typo = () => {
    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to My Next.js App with MUI!
            </Typography>
            {/* ================== */}

            <PrimaryTitle title={"h1-Welcome to My Next.js App with MUI!"} />

            <SecondaryTitle title={"h2-Welcome to My Next.js App with MUI!"} />

            <PrimaryHeading heading={"h3-Welcome to My Next.js App with MUI!"} />

            <SecondaryHeading heading={"h4-Welcome to My Next.js App with MUI!"} />

            <PrimaryDescription description={"h5-Welcome to My Next.js App with MUI!"} />

            <SecondaryDescription description={"h6-Welcome to My Next.js App with MUI!"} />

            <SimpleParagraphText text={"body1-Welcome to My Next.js App with MUI!"} />

            {/* ================== */}
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </div>
    )
}

export default Typo