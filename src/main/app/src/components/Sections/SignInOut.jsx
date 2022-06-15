import React,{useState , useEffect} from 'react'
import { Paper, Tab,Tabs,Grid,Box,Typography} from '@material-ui/core'
import Login from './Login';
import Register from './Register';
import Dialog from '@material-ui/core/Dialog';

function SignInOut() {

    const label={textTransform: 'none'}; 
    const paperstyle ={width :"350px", margin:"auto",};
    const [value,setValue] = useState(0);
 
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function TabPanel(props) {
      const { children, value, index, ...other } = props;     
        return (
          <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

  return (
<div className='mt-4 modalBackground' >
    <Grid>
      <div>
        <Paper style={paperstyle}>
          <div  className='decor' >
         <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'#0C6358'}}} >
            <Tab label="Sign Up" style={label} />
            <Tab label="Sign In " style={label} />
        </Tabs>
        <TabPanel style={{height:'100%', width:'100%'}} value={value} index={0}> <Register handleChange={handleChange}></Register> </TabPanel>
        <TabPanel  value={value} index={1}> <Login handleChange={handleChange}></Login> </TabPanel>
        </div>
        </Paper>
        </div>
      </Grid>
    </div> 
    )
}
export default SignInOut;