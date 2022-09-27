import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const pages = [{ text: "Home", url: "/" }, { text: "Create", url: "/create" }, { text: "Update", url: "/update" }];

export const ResponsiveAppBar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <h2>LOGO</h2>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {pages.map((page, i) => (
                                <Typography key={i} sx={{ minWidth: 100 }}>
                                    <Link to={page.url}>
                                        <Typography sx={{ color: '#fff' }}>{page.text}</Typography>
                                    </Link>
                                </Typography>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
