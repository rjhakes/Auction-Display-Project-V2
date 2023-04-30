import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from '../../app/theme/theme';
import { IconButton, Box } from '@mui/material';

// const [isSidebar, setIsSidebar] = useState(true);

export default observer( function Topbar() {
    const {themer} = useTheme();
    const {toggleColorMode, mode} = themer;

    return (
        <>
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex">

            </Box>
            <Box display="flex">
                <IconButton onClick={toggleColorMode}>
                {mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
            </Box>
        </Box>
        </>
    );
})

