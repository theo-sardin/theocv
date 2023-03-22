import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//import logo from './assets/logo-societe-generale.png'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { margin } from '@mui/system';
import { CardMedia } from '@mui/material';



export default function CvItem({from, to, title, description, logo, bulletPoints}){
  const styles = {
    media: {
      width: "100%",
      height: 140,
      borderRadius: "4px",
      position: "absolute",
      marginLeft: matches ? 40 : 105,
      zIndex: 1000
    }
  }
  const matches = useMediaQuery('(min-width:600px)');

  const width = matches ? 1000 : 365;
  const fontSize = matches ? 18 : 15;
    return (
      <Card sx={{ maxWidth: width, width: width, marginBottom: 5}}>
          <CardContent>
          <CardMedia
        sx={styles.media}
      >
        <img src={logo} style={{width: 100, height:100, alignSelf: 'right'}} />
      </CardMedia>
            <Typography sx={{ fontSize: fontSize }} color="text.primary" gutterBottom>
              {from} - {to}
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

