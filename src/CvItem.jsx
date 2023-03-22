import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//import logo from './assets/logo-societe-generale.png'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { margin } from '@mui/system';
import { CardMedia } from '@mui/material';



export default function CvItem({from, to, title, description, logo, bulletPoints, location}){
  const mediumscreen = useMediaQuery('(min-width:800px)');
  const bigscreen = useMediaQuery('(min-width:1200px)');

  const styles = {
    media: {
      height: 140,
      borderRadius: "4px",
      position: "absolute",
      marginLeft: bigscreen ? 150 : mediumscreen ? 70 :  35,

      zIndex: 1000
    }
    
  }
  

  const width = bigscreen ? 1400 : mediumscreen ? 1200 : 365;
  const fontSize = bigscreen ? 18 : 15;
  const imgSize = bigscreen ? '100px' : mediumscreen ? '75px' : '50px';
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

