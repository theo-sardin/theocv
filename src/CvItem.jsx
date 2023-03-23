import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { margin } from '@mui/system';
import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';


export default function CvItem({from, to, title, description, logo, bulletPoints, location}){
  const mediumscreen = useMediaQuery('(min-width:600px)');
  const bigscreen = useMediaQuery('(min-width:1200px)');

  const styles = {
    media: {
      height: 140,
      borderRadius: "4px",
      position: "absolute",
      marginLeft: bigscreen ? 160 : mediumscreen ? 70 :  35,

      zIndex: 1000
    }
    
  }
  

  const cardWidth = bigscreen ? 1500 : mediumscreen ? 1200 : 365;
  const fontSize = bigscreen ? 18 : 15;
  const imgSize = bigscreen ? '100px' : mediumscreen ? '75px' : '50px';
    return (
      <Box sx={{width: '97vw', display: 'flex',justifyContent: 'center'}}>
      <Card sx={{ maxWidth: cardWidth, width: cardWidth, marginBottom: 1}}>
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
        </Box>
      );
}

