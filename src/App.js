import * as React from 'react';
import logoSg from './assets/logo-societe-generale.png';
import logoBva from './assets/logo-bva.png';
import CvItem from './CvItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabPanelUnstyled } from '@mui/base';
import { color } from '@mui/system';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
export default function App() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered style={{ backgroundColor: '#e7ebf0' }}>
          <Tab label="Work Experience" />
          <Tab label="Education" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <CvItem
            from={"Oct. 2022"}
            to={"Present"} title="Software engineer"
            description="Fullstack Front office developer in FOLAB team in Societe Generale"
            logo={logoSg}
            location="Paris"
            bulletPoints={[
              "<b>FOLAB team:</b> Delivery and time to market oriented team - promotes flexibility, adaptability and fast learning",
              "<b>Working closely with clients</b> by being localized with them</b> ",
              "<b>Listed products desk:</b> Build trading tools to monitor trades live, explain model behaviours, and monitor competition"

            ]} />
        </div>
        <div>
          <CvItem
            from={"Apr. 2019"}
            to={"Oct. 2022"}
            title="Software Engineer"
            description="Fullstack software engineer in QDR team in Societe Generale"
            logo={logoSg}
            location="Hong Kong"
            bulletPoints={[
              "<b>Day to day development</b> and support directly for traders on trading floor",
              "<b>Algorithm trading desk tactical IT:</b> sets of microservices to enable the business such as risk and p&L reporting, news notification or exposing historical data for analysis",
              "<b>Listed products desk:</b> Developing a tool for live monitoring of the markets, analyze competition behaviour and propose parameters adjustment. Leveraging Akka framework and event based programming",
              "<b>Creating a big data platform:</b> in-house leveraging spark, kubernetes and zeppelin notebooks, now moving to Microsoft Azure cloud, working with data analysts to enable new possibilities for business",
              "<b>Working with stakeholders (traders, data analysts, IT counterparts):</b> handling client relationships, gathering functional requirements and driving technical choices"]} />
        </div>
        <div>
          <CvItem
            from={"Feb. 2018"}
            to={"Apr. 2019"} title="VIE - IT COO team"
            description="Management control team"
            logo={logoSg}
            location="Hong Kong"
            bulletPoints={[
              "<b>Budget follow up</b>, creating monthly reports to asses IT teams budget consumption and assist managers in forecasting accordingly",
              "<b>Updating purchase processes</b> to improve quality of vendor costs analysis and budgeting",
              "<b>Working with managers to evaluate staffing needs</b> and ensure data quality of the financial reporting",
              "<b>Automating daily processes</b>",
              "<b>Organizing and managing town-hall events</b>"]} />
        </div>
        <div>
          <CvItem
            from={"Feb. 2018"}
            to={"Apr. 2019"} title="Internship - Business Analyst"
            description="Management control team"
            logo={logoSg}
            location="Paris"
            bulletPoints={["<b>Business analyst</b> for the development of a digital platform in ITEC/COO team",
            "Gathering requirements, writing functional specifications and conduct user testing"]} />
        </div>
        <div>
          <CvItem
            from={"Feb. 2018"}
            to={"Apr. 2019"} title="Internship - BVA"
            description="Business Intelligence developer"
            logo={logoBva}
            location="Hong Kong"
            bulletPoints={[
              "<b>Developing a tool to automate invoice processing</b> and cost analysis",
              "Backend using php and mySQL",
              "<b>PowerBI</b> for dashboarding and analysis"]} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>

        <div>
          <CvItem
            from={"Apr. 2019"}
            to={"Oct. 2022"}
            title="Software Engineer"
            description="Fullstack software engineer in QDR team in Societe Generale"
            logo={logoSg}
            bulletPoints={[
              "<b>Day to day development</b> and support directly for traders on trading floor",
              "<b>Algorithm trading desk tactical IT:</b> sets of microservices to enable the business such as risk and p&L reporting, news notification or exposing historical data for analysis",
              "<b>Listed products desk:</b> Developing a tool for live monitoring of the markets, analyze competition behaviour and propose parameters adjustment. Leveraging Akka framework and event based programming",
              "<b>Creating a big data platform:</b> in-house leveraging spark, kubernetes and zeppelin notebooks, now moving to Microsoft Azure cloud, working with data analysts to enable new possibilities for business",
              "<b>Working with stakeholders (traders, data analysts, IT counterparts):</b> handling client relationships, gathering functional requirements and driving technical choices"]} />
        </div>
      </TabPanel>

    </>

  )
}
