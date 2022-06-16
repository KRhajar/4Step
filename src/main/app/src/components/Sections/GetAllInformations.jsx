import React,{useState , useEffect,useRef} from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom'
import FormService from "../../services/FormService";
import UserService from "../../services/UserServices";
import {MDBBtn } from 'mdb-react-ui-kit';
export default function Basic() {
  var ItemsModels;
  const myContainer = useRef(null);
const [employees, setEmployee] = useState([]);

  const getEmployees = () => {

    FormService.getAllInformations().then((response) => {

        setEmployee(response.data
         
        );
     
       console.log(ItemsModels)
    });
}


useEffect(() => {
  setting();
 getEmployees();
 
},[employees.length])

 var result = [
  {
    label: 'Domaine',
    field: 'domaine',
    width: 150,
  },
 
  {
    label: 'Description',
    field: 'description',
    width: 270,
  },
  {
    label: 'diplome',
    field: 'diplome',
    width: 200,
  },
  {
    label: 'Email',
    field: 'email',
    sort: 'asc',
    width: 100,
  },
  {
    label: 'Ville',
    field: 'ville',
    sort: 'asc',
    width: 150,
  },

  {
    label: 'Etat du projet',
    field: 'etat',
    sort: 'asc',
    width: 150,
    
  },
  
  {
    label: '',
    field: 'view',
    width: 150,
    
  },
]

  
  const [datatable, setDatatable] =useState([]);
  
  
    
    
  
  
  const setting = () => {
     
    ItemsModels = employees.map(item => {
      const { description,email,intitlule,
      nom_prenom,
      ville,
      telephone,
      domaine,
      diplome,etat
      } = item;
     
      const view = 
      <Link to={`/project/${item.id}`} className='btn btn-info'>Voir Plus</Link>;
    
      return{ domaine, description,email,intitlule,
      nom_prenom,
      ville,
      telephone,
      diplome , etat,
      view
      };
});

   setDatatable({
    columns: result,
    rows: ItemsModels,
  })
}
const download = (e) => {
  UserService.downloadExcelFile();
  
};
  return (
     
    <div className=' m-3 ' ><MDBDataTableV5  hover entriesOptions={[5,10,20, 25]} entries={5} pagesAmount={4} data={datatable} /> 
    
        <a href="http://localhost:8040/api/v1/registration/downloadExcelFile" className='btn btn-info'>Télecharger le fichier Excel des projets</a>

  
    </div> 
    
    );

}