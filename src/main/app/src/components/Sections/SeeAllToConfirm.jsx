import React,{useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Box } from '@material-ui/core/';
import FormService from "../../services/FormService";
import Button from '@material-ui/core/Button';
const SeeAllToConfirm = (props) => {

    const {formValues} = props; 
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', width:200,marginRight:10,};
    const text = { color:'#2A5298'    }  
    const back = e => {
        e.preventDefault();
        props.prevStep()
      };

      const continue1 = e => {
        e.preventDefault();
        FormService.createFormulaire(formValues)
        props.nextStep();
      };

  return (
    
    <MuiThemeProvider>
          <Dialog
            fullWidth
            open
            maxWidth='sm'
          >
            <Box m={5}>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText style={text} primary="Email" secondary={formValues.email} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Intitlule" secondary={formValues.intitlule} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Description" secondary={formValues.description} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Nom et prenom" secondary={formValues.nom_prenom} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Ville" secondary={formValues.ville} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Telephone" secondary={formValues.telephone} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Diplome" secondary={formValues.diplome} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Nom des autres membres" secondary={formValues.nom_autre_membre} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Domaine" secondary={formValues.Domaine} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Motivation" secondary={formValues.motivation} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Dev_idee" secondary={formValues.dev_idee} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Innovation" secondary={formValues.innovation} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Duree" secondary={formValues.duree} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Originalite" secondary={formValues.originalite} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Impact" secondary={formValues.impact} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Perennite" secondary={formValues.perennite} />
              </ListItem>
              <ListItem>
                <ListItemText style={text} primary="Responsabilite" secondary={formValues.responsabilite} />
              </ListItem>
            </List>
            <div className="text-center mb-3 ">
              <Button style={btnstyle} variant="contained" onClick={back}>Back</Button>
              <Button style={btnstyle} variant="contained" onClick={continue1} >Confirm & Continue</Button>
            </div>
            </Box>

          </Dialog>
      </MuiThemeProvider>
  );
}
export default SeeAllToConfirm