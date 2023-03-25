import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function CvItem({ from, to, title, description, logo, bulletPoints, location, isLoading=false }) {
  const mediumscreen = useMediaQuery('(min-width:600px)');
  const bigscreen = useMediaQuery('(min-width:1200px)');



  const cardWidth = bigscreen ? 1500 : mediumscreen ? 1200 : 365;
  const fontSize = bigscreen ? 18 : 15;
  const imgSize = bigscreen ? '100px' : mediumscreen ? '75px' : '30px';
  return (
    <Box sx={{ width: '97vw', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: cardWidth, width: cardWidth, marginBottom: 1 }}>
        <CardContent>
          {isLoading ? (<CircularProgress></CircularProgress>) : 
         (<><div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography sx={{ fontSize: fontSize }} color="text.primary" gutterBottom>
                <i>{from} - {to} | {location}</i>
              </Typography>
              <div style={{ flexGrow: 1 }}></div>
              <CardMedia sx={{ marginTop: '-1%' }}>
                <img src={logo} alt={"logo"} style={{ width: imgSize, height: imgSize }} />
              </CardMedia>
            </div><Typography variant="h5" component="div" style={{ marginTop: '-2%' }}>
                {title}
              </Typography><Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography><ul>
                {bulletPoints.map(el => <li dangerouslySetInnerHTML={{ __html: el }}></li>)}
              </ul></>)}
        </CardContent>
      </Card>
    </Box>
  );
}

