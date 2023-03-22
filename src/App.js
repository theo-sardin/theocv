import School from '@mui/icons-material/School';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import logoBva from './assets/logo-bva.png';
import logoDauphine from './assets/logo-dauphine.png';
import logoSg from './assets/logo-societe-generale.png';
import logoTse from './assets/logo-tse.png';
import CvAppBar from './CvAppBar.jsx';
import CvItem from './CvItem';
import SkillItem from './SkillsItem.jsx';


function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      width="100vw"
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
      <CvAppBar></CvAppBar>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered style={{ backgroundColor: '#e7ebf0' }}>
          <Tab label="Work" icon={<WorkIcon />} />
          <Tab label="Education" icon={<School />} />
          <Tab label="Skills" icon={<StarHalfIcon />} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <CvItem
            from={"Oct. 2022"}
            to={"Present"} 
            title="Software engineer - Associate"
            description="Fullstack Front office developer in FOLAB team in Societe Generale"
            logo={logoSg}
            location="Paris, France"
            bulletPoints={[
              "<b>FOLAB team:</b> Delivery and time to market oriented team - promotes flexibility, adaptability and fast learning",
              "<b>Working closely with clients</b> by being localized with them</b> ",
              "<b>Listed products desk:</b> Build trading tools to monitor trades live, explain model behaviours, and monitor competition",
              "<b>Maintain, support and enhance</b> a vast array of existing tools and projects"

            ]} />
        </div>
        <div>
          <CvItem
            from={"Apr. 2019"}
            to={"Oct. 2022"}
            title="Software Engineer - Associate"
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
            location="Paris, France"
            bulletPoints={["<b>Business analyst</b> for the development of a digital platform in ITEC/COO team",
              "Gathering requirements, writing functional specifications and conduct user testing"]} />
        </div>
        <div>
          <CvItem
            from={"Jun. 2016"}
            to={"Aug. 2016"} title="Internship - BVA"
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
            from={"2015"}
            to={"2017"}
            title="Paris Dauphine University"
            description="MASTERS DEGREE IN FINANCE AND INFORMATION TECHNOLOGY"
            location={"Paris, France"}
            logo={logoDauphine}
            bulletPoints={[]}
          />
        </div>
        <div>
          <CvItem
          
            from={"2014"}
            to={"2015"}
            location="Paris, France"
            title="Paris Dauphine University"
            description="BACHELOR IN INFORMATION TECHNOLOGY APPLIED TO MANAGEMENT"
            logo={logoDauphine}
            bulletPoints={[]}
          />

          <CvItem
            from={"2012"}
            to={"2014"}
            location="Toulouse, France"
            title="Toulouse School of Economics"
            description="PREPARATORY CLASSES IN COMPUTER SCIENCE AND ECONOMICS"
            logo={logoTse}
            bulletPoints={[]}
          />
        </div>
      </TabPanel>
       
      <TabPanel value={value} index={2}>
        <div>
          <SkillItem
            category={'Development languages'}
            listSkills=
              {[
                {'name': 'Java', 'rating': 4},
                {'name': 'Python', 'rating': 3},
                {'name': 'Typescript', 'rating': 3},
                {'name': 'Javascript', 'rating': 2},
                {'name': 'React', 'rating': 1},
                {'name': 'C#', 'rating': 1}

              ]}
            
          />
          <SkillItem
            category={'Technologies and Frameworks'}
            listSkills=
              {[
                {'name': 'Springboot', 'rating': 4},
                {'name': 'Spark', 'rating': 2},
                {'name': 'Kubernetes', 'rating': 3},
                {'name': 'PostgreSQL', 'rating': 3},
                {'name': 'Angular', 'rating': 3},
                {'name': 'Unix', 'rating': 3},
                {'name': 'Windows', 'rating': 2},
                {'name': 'Unix', 'rating': 3},
              ]}
            
          />
        </div>
      </TabPanel>
    </>

  )
}
