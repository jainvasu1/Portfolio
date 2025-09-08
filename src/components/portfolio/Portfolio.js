import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef} mt={5}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((portfolio, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <PortfolioBlock image={portfolio.image} live={portfolio.live} source={portfolio.source} title={portfolio.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};