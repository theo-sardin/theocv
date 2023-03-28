import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { AnimatedInput } from './AnimatedInput';

const useStyles = makeStyles((theme) => ({

    drawer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e7ebf0'
    }
}));

const GptifyDrawer = ({ open, handlePromptChange, handleSubmit, isLoading }) => {

    const classes = useStyles();
    const [text, setText] = useState('');

    const toggleDrawer = (open) => (event) => {
        toggleDrawer(open);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleButtonClick = () => {
        console.log(`Button clicked with text: ${text}`);
    };

    useEffect(() => {
        toggleDrawer(open); //children function of interest
    }, [open]);

    
    return (
        <React.Fragment key="bottom" >

            <SwipeableDrawer
            
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', gap: '50px', height: '10vh', backgroundColor: '#e7ebf0'}}>
                <AnimatedInput placeholders={["Translate to French", "Make it sound stupid", "Make it sound like an overly enthusiastic linkedin post"]} onChange={handlePromptChange} style={{height: '50%', width:'40%'}}/> <Button variant="contained" onClick={handleSubmit} disabled={isLoading} style={{height: '60%'}}>GPTFIY !</Button>
                </div>
            </SwipeableDrawer>
            
        </React.Fragment>
    );
};

export default GptifyDrawer;
