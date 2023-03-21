import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
//import logo from './assets/logo-societe-generale.png'; 
import CardMedia from '@mui/material/CardMedia';

export default function CvItem({from, to, title, description, logo, bulletPoints}){
    return (
      <Card sx={{ maxWidth: 365, width: 365, marginBottom: 5 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {from} - {to}
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          <ul>
            {bulletPoints.map(el=><li><Typography>{el}</Typography></li>)}
          </ul>
          </CardContent>

        </Card>
      );
}

