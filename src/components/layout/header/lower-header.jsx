"use client"
import SimpleButton from '@/components/common/buttons/simple-button'
import { NavLink } from '@/components/common/styled-components/layout/header-styled-components'
import theme from '@/configs/theme/theme'
import { Box, Grid, List, ListItem } from '@mui/material'
import { FaAngleRight } from 'react-icons/fa'
import LayoutProvider from '../provider/layout-provider'

const LowerHeader = () => {
    return (
        <LayoutProvider
            parentSxProps={{ backgroundColor: theme.palette.backgroundColor.primary }}
            childSxProps={{
                py: "4px"
            }}
        >
            <Grid container
                // spacing={4}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                <Grid xs={12} lg={3}>
                    <Box sx={{ border: "1px solid red", }}>category</Box>
                </Grid>
                <Grid xs={12} lg={6} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}>
                        <nav>
                            <List sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                padding: 0,
                                margin: 0,
                                listStyle: "none",
                            }}>
                                <ListItem sx={{ padding: 0 }}>
                                    <NavLink href="#">
                                        <span>Retail</span>
                                    </NavLink>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <NavLink href="#">
                                        <span>Wholesale</span>
                                    </NavLink>
                                </ListItem>
                                <ListItem sx={{ padding: 0, textWrap: "nowrap" }}>
                                    <NavLink href="#">
                                        <span>Royal View</span>
                                    </NavLink>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>

                </Grid>
                <Grid xs={12} lg={3} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                }}>
                    <SimpleButton
                        text={"Become a Seller"}
                        variant='contained'
                        icon={<FaAngleRight size={18} fontWeight={"400"} />}
                        sxProps={{ flexDirection: "row-reverse", borderRadius: "0px" }}
                    />
                </Grid>
            </Grid>
        </LayoutProvider>
    )
}

export default LowerHeader