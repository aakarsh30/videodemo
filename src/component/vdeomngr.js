import React,{useState} from 'react';
import {Box,CheckBox,Tab,Tabs,Text,Button,TextInput,Select} from 'grommet';
import '../App.css';
import {Search,Checkmark,Play,Pause,FastForward,Rewind} from 'grommet-icons';
const detail=[{
    tittle: "video 1",
    videolink:"",
    addedon:"20 Sep 2020",
    checked: false
},{
    tittle: "video 2",
    videolink:"",
    addedon:"20 Sep 2020",
    checked: false

},{
    tittle: "video 3",
    videolink:"",
    addedon:"20 Sep 2020",
    checked: false
}];
const Videocomp=(props)=>{
    const [check,setcheck]=useState(props.checked);
    const [tools,settools] = useState(false);
    return(
        <Box width="xxlarge" direction="row" justify="between" align="center" margin={{top:"30px"}} >
            <Box direction="row" justify="center" align="center" gap="small">
                        <CheckBox checked={check}  />
                        <Box width="30vh" height="24vh" align="center" background="dark-1" justify="center" >Video</Box>
                        <Text color="black" weight="bold" size="small" >{props.tittle}</Text>

                    </Box>
                    <div className="btns">
                    <Box onMouseOver={()=>{settools(true);}}  height="40%" onMouseOut={()=>{settools(false);}} width={{min:"35vh"}} direction="row" justify="center" align="center">
                        {tools && <Box round="small" elevation="medium" fill gap="small"  direction="row" justify="center" background="dark-2" align="center">
                            <Play />
                            <Pause />
                            <FastForward/>
                            <Rewind/>
                            </Box>}

                    </Box>
                    </div>
                    <div className="tls">
                    <Box  height="40%" width={{min:"35vh"}} direction="row" justify="center" align="center">
                        <Box round="small" elevation="medium" fill gap="small"  direction="row" justify="center" background="dark-2" align="center">
                                <Play />
                                <Pause />
                                <FastForward/>
                                <Rewind/>
                                </Box>
                    </Box>
                    </div>
                    <Box width="45%" gap="small" direction="row" justify="center" align="center" pad={{right:"large"}}>
                    <Box width="15%" justify="center" align="center">
                        <Checkmark />

                        </Box>
                        <Box width="15%" justify="center" align="center">
                            <Text color="black" weight="bold" size="small" >{props.addedon}</Text>

                        </Box>
                        
                        <Box width="15%" justify="center" align="center">
                            <Checkmark />
                        </Box>
                        
                        <Box width="15%" justify="center" align="center">
                            <Checkmark />
                        </Box>
                        

                    </Box>

            </Box>

    )
}
function Vdeomngr(props) {
    const [val,setval]=useState("all");
    

    return (
        <>
        <Box fill direction="column" background="white" elevation="medium" gap="medium" height="auto" round="small" pad="small">
            <Box width="xxlarge" direction="row" justify="between">
                <Box direction="row" gap="small" >
                    <Text color="black" size="medium">Videos</Text>
                    <Box background="neutral-4" width="30px" direction="row" justify="center" round="full">5</Box>
                </Box>
                <Box background="neutral-4" width="30px" direction="row" justify="center" round="full">?</Box>
            </Box>
            <Box width="xxlarge" direction="row" justify="end" gap="small">
                <Box width="small" direction="row" justify="center" align="center" elevation="medium">
                    <TextInput plain placeholder="Search by name"></TextInput>
                    <Search  />

                </Box>
                <Box width="auto"  direction="row" justify="center" align="center" elevation="medium">
                    <Text weight="bold">Filetr by Category:</Text>
                    <Select plain
                        options={['small', 'medium', 'large']}
                        value={val}
                        onChange={({ option }) => setval(option)}
                    />

                </Box>
                
            </Box>
            <Box width="xxlarge" direction="row" justify="between" >
                    <Box direction="row" justify="center" align="center" gap="small">
                        <CheckBox checked={false}  />
                        <Text color="black" size="small"  weight="bold" >Videos</Text>

                    </Box>
                    <Box width="45%" gap="small" direction="row" justify="center" align="center" >
                    <Box width="15%">
                    <Text color="black" weight="bold" size="small" >Type</Text>

                        </Box>
                        <Box width="15%">
                        <Text color="black" weight="bold" size="small" >Added on</Text>

                        </Box>
                        <Box width="15%">
                        <Text 