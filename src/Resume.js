import PsychologyIcon from '@mui/icons-material/Psychology';
import School from '@mui/icons-material/School';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useEffect } from 'react';
import logoBva from './assets/logo-bva.png';
import logoDauphine from './assets/logo-dauphine.png';
import logoSg from './assets/logo-societe-generale.png';
import logoTse from './assets/logo-tse.png';
import CvAppBar from './CvAppBar.jsx';
import CvItem from './CvItem';
import GptifyDrawer from './GptifyDrawer';
import SkillItem from './SkillsItem.jsx';
import { Tooltip } from '@mui/material';

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



export default function Resume() {
  const logos = {
    logoSg: logoSg,
    logoBva: logoBva,
    logoDauphine: logoDauphine,
    logoTse: logoTse
  }
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    marginRight: 1,
    zIndex: 10000
  };
  const [value, setValue] = React.useState(0);
  const [isDrawerOpen, setOpen] = React.useState(false);
  const [workResumeItems, setWorkItems] = React.useState([{ from: "", to: "", title: "", description: "", location: "", logoId: "", bulletPoints: [] }]);
  const [educationResumeItems, setEducationItems] = React.useState([{ from: "", to: "", title: "", description: "", location: "", logoId: "", bulletPoints: [] }]);
  const [prompt, setPrompt] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handlePromptChange(e){
    setPrompt(e.target.value);
  }

  function gptifyWork() {
    setIsLoading(true)
    fetch('https://backend.theo-sardin-resume.dev/resume/gpt/work?prompt='+ prompt)
    .then(resp => resp.json()).then(data=>{setWorkItems(data); setIsLoading(false)});
  }

  useEffect(() => {
    fetch('https://backend.theo-sardin-resume.dev/resume/data/work', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(resp => resp.json().then(x => setWorkItems(x)))
  }, []);

  useEffect(() => {
    fetch('https://backend.theo-sardin-resume.dev/resume/data/education', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(resp => resp.json().then(x => setEducationItems(x)))
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered style={{ backgroundColor: '#e7ebf0' }}>
          <Tab label="Work" icon={<WorkIcon />} />
          <Tab label="Education" icon={<School />} />
          <Tab label="Skills" icon={<StarHalfIcon />} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {workResumeItems.map(item =>
          <div>
            <CvItem
              from={item.from}
              to={item.to}
              title={item.title}
              description={item.description}
              logo={logos[item.logoId]}
              location={item.location}
              bulletPoints={item.bulletPoints}
              isLoading={isLoading} />
          </div>
        )}
        <Tooltip title={<div>Gptify: Ask chatgpt to rewrite my resume in a different style (speaking like a pirate or 'making it sound stupid' for example). <br/>Disclaimer: All outputs are generated by chatGPT, I am in no way responsible of the results. Lastly, please note that the GPT api can be slow at times, causing timeouts.</div>}><Fab sx={fabStyle} color="primary" onClick={()=>{setOpen(!isDrawerOpen)}}><PsychologyIcon style={{ fontSize: '50px' }} /></Fab></Tooltip>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        {educationResumeItems.map(item =>
          <div>
            <CvItem
              from={item.from}
              to={item.to}
              title={item.title}
              description={item.description}
              logo={logos[item.logoId]}
              location={item.location}
              bulletPoints={item.bulletPoints} />
          </div>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div>
          <SkillItem
            category={'Development languages'}
            listSkills=
            {[
              { 'name': 'Java', 'rating': 4 },
              { 'name': 'Python', 'rating': 3 },
              { 'name': 'Typescript', 'rating': 3 },
              { 'name': 'Javascript', 'rating': 2 },
              { 'name': 'C#', 'rating': 1 }

            ]}

          />
          <SkillItem
            category={'Technologies and Frameworks'}
            listSkills=
            {[
              { 'name': 'Springboot', 'rating': 4 },
              { 'name': 'Spark', 'rating': 2 },
              { 'name': 'Kubernetes', 'rating': 3 },
              { 'name': 'PostgreSQL', 'rating': 3 },
              { 'name': 'Angular', 'rating': 3 },
              { 'name': 'React', 'rating': 1 },
              { 'name': 'Windows', 'rating': 2 },
              { 'name': 'Unix', 'rating': 3 }
            ]}

          />
          <SkillItem
            category={'Languages and misc'}
            listSkills=
            {[
              { 'name': 'English', 'rating': 4 },
              { 'name': 'French', 'rating': 5 },
              { 'name': 'Italian', 'rating': 2 },
              { 'name': 'Spanish', 'rating': 1 },
              { 'name': 'Guitar', 'rating': 3 },
              { 'name': 'Skiing', 'rating': 3 },
            ]}

          />
        </div>
      </TabPanel>
      <GptifyDrawer open={isDrawerOpen} handlePromptChange={handlePromptChange} handleSubmit={gptifyWork} isLoading={isLoading} ></GptifyDrawer>
    </>

  )
}
