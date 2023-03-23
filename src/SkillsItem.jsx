import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import * as React from 'react';

export default function SkillItem({category, listSkills}) {
  const mediumscreen = useMediaQuery('(min-width:600px)');
  const bigscreen = useMediaQuery('(min-width:1200px)');
  const cardWidth = bigscreen ? 1500 : mediumscreen ? 1200 : 365;
  const fontSize = bigscreen ? 18 : 15;
  console.log(listSkills);
  return (
    <Box sx={{ width: '97vw', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: cardWidth, width: cardWidth }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{marginBottom: 2}}>
            {category}
          </Typography>
          <div style={{display:'flex', flexDirection: 'row', gap: 100}}>
          {
            listSkills.map(skill => {return<><Box sx={{marginBottom: 1}}><Typography component="legend">{skill.name}</Typography><Rating name="read-only" value={skill.rating} readOnly /></Box></>})
          }</div>

        </CardContent>

      </Card>
    </Box>
  );
}