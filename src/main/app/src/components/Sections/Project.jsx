
    import React , { useState, useEffect } from 'react';
    import { MDBContainer, MDBRadio,MDBRow, MDBCol } from 'mdb-react-ui-kit';
    import { useParams } from "react-router-dom";
    import UserServices from "../../services/UserServices";
    import {Button} from '@material-ui/core';
    import MenuItem from '@mui/material/MenuItem';
    import Select from '@mui/material/Select';
    import InputLabel from '@mui/material/InputLabel';
    import FormService from "../../services/FormService";
    import Dialog from "@material-ui/core/Dialog";
    import DialogContentText from "@material-ui/core/DialogContentText";
    import DialogTitle from "@material-ui/core/DialogTitle";
    import DialogActions from "@material-ui/core/DialogActions";
    import DialogContent from "@material-ui/core/DialogContent";
    import { MDBDataTableV5 } from 'mdbreact';
    import { Link,useNavigate } from 'react-router-dom';
    import CreateCoach from './CreateCoach';
    export default function Project() {
      const { entrepreneurId } = useParams();
      const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', width:200, marginTop:50};
      const navigate = useNavigate();
      const redirect = (e) => {
        e.preventDefault();
        navigate("/createcoach")
    
    }
      const [name, setName] = useState("");
      const [ville, setVille] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [domaine, setDomaine] = useState("");
      const [description, setDescription] = useState("");
      const [intitule, setIntitule] = useState("");
      const [dev_idee, setDev] = useState("");
      const [innovation, setInnovation] = useState("");
      const [duree, setDuree] = useState("");
      const [originalite, setOriginalite] = useState("");
      const [impact, setImpact] = useState("");
      const [responsabilite, setResponsabilite] = useState("");
      const [perennite, setPerennite] = useState("");
      const [diplome, setDiplome] = useState("");
      const [nom_autre_membre, setMembre] = useState("");
      
      const [motivation, setMotivation] = useState("");
      const [etat, setEtat] = useState("");
      const [a, setA] = useState("");
      const [erreur, setErreur] = useState("");
      
      const handleChange = (e) => {
        
        console.log(e.target.value)
        setEtat(e.target.value)
        
      };
      
      const [open, setOpen] = React.useState(false);
      const [b, setB] = React.useState(false);
      const [coach, setCoach] = React.useState(false);
      const UpdateForm = (e) => {
      
        if(a=="En cours d'étude"){
          if(etat=="En cours d'étude" ){
            setErreur("Le projet est dèja En cours d'étude " )
          }
          else if(etat=="Incubé"){
            setB(true)
          }
          else{
            setOpen(true)
          }
         
        }

        if(a=="Convoqué"){
          if(etat=="En cours d'étude"){
           
            setErreur("Impossible de revenir à l'état: "+etat)
            
          }
          else if(etat=="Convoqué" ){
            setErreur("Le projet est dèja Convoqué " )
          }
          else if(etat=="Incubé"){
            setB(true)
          }
          else{
            setOpen(true)
          }
        }
        else if(a=="Près incubée"){
          if(etat=="En cours d'étude" || etat=="Convoqué"){
            setErreur("Impossible de revenir à l'état: "+etat)
          }
          else if(etat=="Incubé"){
            setB(true)
          }
          else if(etat=="Près incubée" ){
            setErreur("Le projet est dèja Près Incubé " )
          }
          else{
            setOpen(true)
          }
        }
        else if(a=="Incubé"){
          if(etat=="Refusé" ){
            setOpen(true)
          }
          else if(etat=="Incubé" ){
            setErreur("Le projet est dèja incubé " )
          }
          else{
            setErreur("Impossible de revenir à l'état: "+etat)
          }
        }
        else if(a=="Refusé"){
          
          if(etat!="Refusé" ){
            setErreur("Impossible de revenir à l'état: "+etat+", Le projet est refusé " )
          }
          
        }
       

       
      
      
      }
      const coachPage = (e) => {
        
        setCoach(true)
       
       
       }
      
      const closeCoach = () => {
   
        setCoach(false);
      
        
      };
      useEffect(() => {
        if (entrepreneurId) {
            UserServices.getEntreprenneurById(entrepreneurId).then((response) => {
              setEtat(response.data.etat)
              setA(response.data.etat)
                setName(response.data.nom_prenom)
                setVille(response.data.ville)
                setEmail(response.data.email)
                setPhone(response.data.telephone)
                setDescription(response.data.description)
                setDomaine(response.data.domaine)
                setIntitule(response.data.intilule)
                setDev(response.data.dev_idee)
                setInnovation(response.data.innovation)
                setDuree(response.data.duree)
                setOriginalite(response.data.originalite)
                setImpact(response.data.impact)
                setResponsabilite(response.data.responsabilite)
                setPerennite(response.data.perennite)
                setMembre(response.data.nom_autre_membre)
                setDiplome(response.data.diplome)
                setMotivation(response.data.motivation)
               
                
            }) 
            
        }
        
         
        
    }, [])
    var ItemsModels;
    const [coachs, setCoachs] = useState([]);

  const getCoachs = () => {

    UserServices.getCoach().then((response) => {

        setCoachs(response.data
         
        );
        
       console.log(coachs)
    });
}
    var result = [
      {
        label: 'Coach',
        field: 'firstName',
        width: 150,
      },
      
      {
        label: '',
        field: 'view',
        width: 150,
        
      },
    ]
   
    const [datatable, setDatatable] =useState([]);
    useEffect(() => {
      setting();
     getCoachs();
     
    },[coachs.length])
    
  const setting = () => {
     
    ItemsModels = coachs.map(item => {
      const { firstName,id
      } = item;
      
      
      
      const view = 
      <Button className='btn btn-info' onClick={(e) =>affecter(e,id) }>Affecter</Button>;
    
      return{ firstName,
      view
      };
});

   setDatatable({
    columns: result,
    rows: ItemsModels,
  })
}

const affecter = (e,id) => {
  const user ={idCoach: id};
  FormService.affecter(entrepreneurId,user)
 setOpen(true)

}
const handleToClose = () => {
  setErreur("");
  const projet = { etat };



setA(etat);
  setOpen(false);
  setB(false);
  setCoach(false);
  FormService.updateForm(entrepreneurId, projet);
  

  
};
      return (
        <div>
        
        <MDBContainer >
       
          <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5  mt-5 mb-3'>
            <MDBCol size='md' className='col-example text-center p-5 '>
               
                <hr />
                    <h2 >  {name}</h2>
                    <p><i className='fas fa-envelope me-3'></i>{email}</p>
                    <p > <i className='fas fa-phone me-3'></i>{phone}</p>
                    <p > <i className='fas fa-home me-3'></i>{ville}</p>
                 
                <hr />
                <h2>Domaine de projet: </h2>
                <p>{domaine}</p>
           
                
            </MDBCol>
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Intitule de projet : </h2>
           <p>{intitule}</p>
            
            
            </MDBCol>
            
            
          </MDBRow>
          <MDBRow className='row-cols-1 row-cols-md-2 g-3   '>
    
          <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Description du projet: </h2>
           <p>{description}</p>
            
            
            </MDBCol>
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Développement de l'idée : </h2>
           <p>{dev_idee}</p>
            
            
            </MDBCol>
            
           
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Motivation : </h2>
           <p>{motivation}</p>
            
            
            </MDBCol>
    
           
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Diplôme : </h2>
           <p>{diplome}</p>
            
            
            </MDBCol>
            
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Viabilité et durabilité du projet : </h2>
           <p>{duree}</p>
            
            
            </MDBCol>
            
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Les autres membres : </h2>
           <p>{nom_autre_membre}</p>
            
            
            </MDBCol>
            
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Originalité : </h2>
           <p>{originalite}</p>
            
            
            </MDBCol>
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Impact économique du projet : </h2>
           <p>{impact}</p>
            
            
            </MDBCol>
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Responsabilités sociale et environnementale : </h2>
           <p>{responsabilite}</p>
            
            
            </MDBCol>
    
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Innovation technologique et/ou dans les services offerts : </h2>
           <p>{innovation}</p>
            
            
            </MDBCol>
            <MDBCol size='md' className='col-example text-center p-5' >
           <h2>Pérennité : potentiel de développement : </h2>
           <p>{perennite}</p>
            
            
            </MDBCol>
          
            <MDBCol size='w-25' className='col-example  p-5 '>
                
                <h2 className=' text-center pb-5'>Etat du projet Actuel: <span className="spana"> {a}</span></h2> 
                <div>
                  
                <InputLabel  id="demo-simple-select-standard-label">Modifier l'état du projet</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name="etat"
                                value={etat}
                                onChange={handleChange}
                                label="Moddifier l'état du projet"
                                fullWidth
                                >
                                <MenuItem value={"En cours d'étude"} >En cours d'étude</MenuItem> <br/>
                                <MenuItem value={"Convoqué"}>Convoqué</MenuItem> <br/>
                                <MenuItem value={"Près incubée"}>Près incubé</MenuItem> <br/>
                                <MenuItem value={"Incubé"}> Incubé</MenuItem> <br/>
                                <MenuItem value={"Refusé"}>Refusé</MenuItem> <br/>
                                </Select>
        </div>  
        <p className="error">{erreur}  </p>
        <div className="text-center mb-3">
                        <Button type='submit' style={btnstyle} onClick={(e) => UpdateForm(e)} > Confirmer la modification </Button>
                    </div>
            </MDBCol>
          </MDBRow>
         </MDBContainer>
         <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Changer l'état du projet"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {etat}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} 
                      color="primary" autoFocus>
                Confirmer
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={b} onClose={handleToClose}>
            <DialogTitle>{"Changer l'etat du projet "}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {etat}
                <p>Affecter un coach</p>
                
              </DialogContentText>

              <div className=' m-3 ' ><MDBDataTableV5  hover entriesOptions={[5,10,20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>

            </DialogContent>
            <DialogActions>
            <Button 
                      color="primary" autoFocus
                         onClick={(e) =>coachPage(e) }>Créer un coach
                        
                
              </Button>
              <Button onClick={handleToClose} 
                      color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={coach} onClose={handleToClose} className='kk'>
          <CreateCoach/>
            <DialogContent>
             

              

            </DialogContent>
            <DialogActions>
            
              <Button onClick={closeCoach} 
                      color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
         </div>
    
    
        
      );
    }