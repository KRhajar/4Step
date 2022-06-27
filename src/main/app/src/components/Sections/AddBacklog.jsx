import React from 'react'
import { MDBCard,MDBContainer, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {TextField,Button} from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import backlogg from "../../assets/img/backlogg.gif.jpeg" 

const AddBacklog = () => {
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none',};
  return (
    <div>

<MDBContainer className='p-5'>
    <MDBRow>
        <MDBCol>
          <MDBCard alignment='center'> 
            <MDBCardBody >
              <MDBCardTitle className='font-weight-bold h4' style={{ color:'#2A5298'}}>Créer un backlog</MDBCardTitle>
              <div>
                <TextField id="standard-basic" label="titre du backlog" variant="standard" className='w-75'/>
              </div>
              <div>
              <TextField id="standard-basic" label="description du backlog" multiline rows={2} maxRows={4} className='w-75' />
              </div>
              <div>
              <TextField id="date" label="date de fin" type="date" InputLabelProps={{ shrink: true,}} className='mt-4 w-75'/>
              </div>
              <FormControl variant="standard"  className='w-75'>
                            <InputLabel  id="demo-simple-select-standard-label">Select priority</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="priority"
                            label="priority"
                            fullWidth
                            >
                            <MenuItem value={"High"}>High</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"Low"}>Low</MenuItem>
                            </Select>
                </FormControl>

                <FormControl variant="standard"  className='w-75'>
                            <InputLabel  id="demo-simple-select-standard-label">Select status</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="status"
                            label="status"
                            >
                            <MenuItem alignItems="left" style={{textAlign:'left'}} value={"TO DO"}>TO DO</MenuItem>
                            <MenuItem value={"IN PROGRESS"}>IN PROGRESS</MenuItem>
                            <MenuItem value={"DONE"}>DONE</MenuItem>
                            </Select>
                </FormControl>

              <div className="text-center mb-3">
                    <Button className='w-25 mt-5' type='submit' style={btnstyle}> Suivant </Button>
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
        <div size='md' className='col-example text-center'>
            <img src={backlogg} alt='' className='img-fluid' />
            </div>

        </MDBCol>
    </MDBRow>     
    </MDBContainer>
    </div>
  )
}

export default AddBacklog