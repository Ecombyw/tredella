"use client"
import PrimaryDescription from '@/components/typography/primary-description'
import theme from '@/configs/theme/theme'
import { Box } from '@mui/material'
import { FiShoppingBag } from "react-icons/fi"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { MdOutlinePrivacyTip } from "react-icons/md"
import LayoutProvider from '../provider/layout-provider'
import { GrCurrency, GrLanguage } from "react-icons/gr";



const TopHeader = () => {
    const topHeaderStartNavList = [
        {
            title: "English",
            icon: <GrLanguage size={16} />
        },
        {
            title: "USD",
            icon: <GrCurrency size={20} />
        },
    ]
    const topHeaderEndNavList = [
        {
            title: "Track Order",
            key: "/track-order",
            icon: <FiShoppingBag size={16} />
        },
        {
            title: "Privacy Policy",
            key: "/help-center",
            icon: <MdOutlinePrivacyTip size={20} />
        },
        {
            title: "Help Center",
            key: "/help-center",
            icon: <IoIosHelpCircleOutline size={20} />
        },

    ]
    const RenderNavLink = ({ item }) => {
        return (
            <PrimaryDescription
                description={item?.title}
                icon={item?.icon}
                sxProps={{
                    cursor: "pointer",
                    color: theme.palette.textColor.paragraph,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    "&:hover": {
                        color: theme.palette.textColor.secondary,
                    }
                }} />
        )
    }
    return (
        <LayoutProvider
            parentSxProps={{
                // backgroundColor: theme.palette.backgroundColor.white,
                borderBottom: `1px solid ${theme.palette.borderColor.main}`,
            }}
            childSxProps={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: "28px", py: "6px" }}>
                {topHeaderStartNavList?.map((item, index) => (
                    <RenderNavLink key={index} item={item} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: "28px", py: "6px" }}>
                {topHeaderEndNavList?.map((item, index) => (
                    <RenderNavLink key={index} item={item} />
                ))}
            </Box>
        </LayoutProvider>
    )
}

export default TopHeader