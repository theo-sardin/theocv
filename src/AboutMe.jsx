import { Cake, Mail, Phone } from '@mui/icons-material';
import CardContent from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
export default function AboutMe() {

    return (

        <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', marginTop: '5vh' }}>
            <Card sx={{justifySelf: 'center', width: '80vw'}}>
                <CardContent sx={{padding: '20px'}}>
                    <Box sx={{ display: 'flex' }}><Phone sx={{ marginRight: 1 }}></Phone><Typography>+336 36 84 36 31</Typography></Box>
                    <Box sx={{ display: 'flex' }}><Mail sx={{ marginRight: 1 }}></Mail><Typography>sardin.theo@gmail.com</Typography></Box>
                    <Box sx={{ display: 'flex' }}><Cake sx={{ marginRight: 1 }}></Cake><Typography>04/06/1993</Typography></Box>
                    <Typography>
                        Hello, I am Theo Sardin, a 29 years old developer.
                        I am French and grew up in Toulouse in the south-west, and I am really passionate about development.
                        I currently have 5 years development experience, mostly working in Societe Generale in both Paris and Hong Kong.
                        In parallel of my current Société Générale job, I have just started a freelance operation for development projects in general. 
                        If you wish to contact me about this do not hesitate to email me or message me via WhatsApp.
                        If you are on this website and interested for a potential hire, do not hesitate to contact me using the information on top of this page.<br></br>
                        Thank you.<br></br><br></br>

                        Theo.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

