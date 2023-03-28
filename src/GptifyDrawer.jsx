import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React, { useEffect } from 'react';
import { AnimatedInput } from './AnimatedInput';

const GptifyDrawer = ({ open, handlePromptChange, handleSubmit, isLoading }) => {



    const toggleDrawer = (open) => (event) => {
        toggleDrawer(open);
    };


    useEffect(() => {
        toggleDrawer(open);
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
                <AnimatedInput placeholders={["Translate to French", "Make it sound stupid", "Turn it into an overly enthusiastic linkedin post"]} onChange={handlePromptChange} style={{height: '50%', width:'40%'}}/> <Button variant="contained" onClick={handleSubmit} disabled={isLoading} style={{height: '60%'}}>GPTFIY !</Button>
                </div>
            </SwipeableDrawer>
            
        </React.Fragment>
    );
};

export default GptifyDrawer;
