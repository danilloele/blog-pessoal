import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#E8D3B6" }}>
                <Toolbar variant="dense" >
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" className= "titulo">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" className="texto">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;