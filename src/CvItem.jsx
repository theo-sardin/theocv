import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//import logo from './assets/logo-societe-generale.png'; 
import useMediaQuery from '@mui/material/useMediaQuery';




export default function CvItem({from, to, title, description, logo, bulletPoints}){
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches)
  const maxWidth = matches ? 1000 : 365;
    return (
      <Card sx={{ maxWidth: maxWidth, width: maxWidth, marginBottom: 5 }}>
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

