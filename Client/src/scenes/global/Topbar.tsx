import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from '../../app/theme/theme';
import { IconButton, useTheme as muiUseTheme, Box } from '@mui/material';

// const [isSidebar, setIsSidebar] = useState(true);

export default observer( function Topbar() {
    const theme = muiUseTheme();
    const {themer} = useTheme();
    const {toggleColorMode, mode} = themer;

    return (
        <>
        <Box display="flex" justifyContent="space-between" p={2}>
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

