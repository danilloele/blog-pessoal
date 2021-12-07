import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import "./Home.css";

function Home(){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={2} >
                        <Typography variant="h3" gutterBottom  component="h3" align="center" className="titulo-home">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" className="titulo-home">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao-home">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;