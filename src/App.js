import React,{useState} from 'react';
import {Box,Tab,Tabs,Text,Button} from 'grommet';
import './App.css';
import Vdeomngr from './component/vdeomngr';
function App() {
  const[chk,setchk]=useState(true);
  console.log(chk);
  return (
    <>
      
      <Box fill align="center" width={{min:"990px"}} overflow={{horizontal:"auto",vertical:"auto"}} direction="column" pad="small" gap="small" >
        <Box align="center" height={{min:"auto"}} width="xxlarge" round="small" direction="row" pad={{left:"xlarge",top:"small",bottom:"small"}} background="white" elevation="medium" gap="large" >
          <Button ><Text size="16px" weight="bold" color="black">Video Manager</Text></Button>
          <Button ><Text size="16px" weight="bold" color="black">Upload a Video</Text></Button>
          
        </Box>  
        <Box width="xxlarge" height={{min:"auto"}} >
          <Vdeomngr />

        </Box>
      </Box>
    </>
  );
}

export default App;
