import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import logo from './assets/logo-societe-generale.png'; 
import CardMedia from '@mui/material/CardMedia';
import CvItem from './CvItem';

export default function App() {
  return (
    <>
    <div>
      <CvItem
      from={"Oct. 2022"}
      to={"Present"} title="Software engineer"
      description="Fullstack Front office developer in FOLAB team in Societe Generale"
      logo={logo}
      bulletPoints={["hey", "you"]} />
      </div>
      <div>
        <CvItem
        from={"Apr. 2019"}
        to={"Oct. 2022"} 
        title="Software Engineer"
        description="Fullstack software engineer in QDR team in Societe Generale"
        logo={logo}
        bulletPoints={[
          "Day to day development and support directly for traders on trading floor", 
          "Algorithm trading desk tactical IT: sets of microservices to enable the business such as risk and p&L reporting, news notification or exposing historical data for analysis", 
          "Listed products desk: Developing a tool for live monitoring of the markets, analyze competition behaviour and propose parameters adjustment. Leveraging Akka framework and event based programming", 
          "Creating a big data platform: in-house leveraging spark, kubernetes and zeppelin notebooks, now moving to Microsoft Azure cloud, working with data analysts to enable new possibilities for business", 
          "Working with stakeholders (traders, data analysts, IT counterparts): handling client relationships, gathering functional requirements and driving technical choices"]} />
        </div>
      </>
)
}