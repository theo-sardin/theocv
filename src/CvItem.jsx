import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//import logo from './assets/logo-societe-generale.png'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { margin } from '@mui/system';
import { CardMedia } from '@mui/material';



export default function CvItem({from, to, title, description, logo, bulletPoints, location, logoDimension}){
  const matches = useMediaQuery('(min-width:600px)');

  const styles = {
    media: {
      height: 140,
      borderRadius: "4px",
      position: "absolute",
      marginLeft: matches ? 150 : 35,

      zIndex: 1000
    }
    
  }
  

  const width = matches ? 1400 : 365;
  const fontSize = matches ? 18 : 15;
  const imgSize = matches ? '100px' :  '50px';
    return (
      <Card sx={{ maxWidth: width, width: width, marginBottom: 1}}>
          <CardContent>
          <CardMedia sx={styles.media}>
            <img src={logo} style={{width: imgSize, height:imgSize}}/>
      </CardMedia>
            <Typography sx={{ fontSize: fontSize }} color="text.primary" gutterBottom>
              <i>{from} - {to} | {location}</i>
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          <ul >
            {bulletPoints.map(el=><li dangerouslySetInnerHTML={{__html: el}}></li>)}
          </ul>
          </CardContent>

        </Card>
      );
}

