import "../../styles/EditProfile.css";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileService from "../../services/ProfilService";

const EditProfile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [appUserRole, setAppUserRole] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState("");
  const [userr, setUserr] = useState("");
  const { idi } = useParams();

  /* const { identifiant } = useParams("");*/
  const updateUser = (e) => {
    e.preventDefault();
    /*   navigate("/profile");*/

    /*const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, email };

    if (identifiant) {
      EmployeeService.updateEmployee(identifiant, employee)
        .then((response) => {
          history("/employees");
          console.log(identifiant);
        })
        .catch((error) => {
          console.log(error);
        });
    } */
    let user = { firstName, lastName, email, appUserRole, id };
    if (identifiant) {
      console.log("id is working yay");
      console.log(idi);
    }
    ProfileService.updateUser(identifiant, user)
      .then((response) => {
        console.log("user updated");
        console.log(response.data);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ProfileService.getUserInfo()
      .then((response) => {
        console.log(response.data);
        setIdentifiant(response.data.id);

        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setemail(response.data.email);
        setAppUserRole(response.data.appUserRole);
        setId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, "");
  /*
  useEffect(() => {
    ProfileService.getUserById(identifiant)
      .then((response) => {
        setfirstName(userr.data.firstName);
        setlastName(userr.data.lastName);
        setemail(userr.data.email);
        setAppUserRole(userr.data.appUserRole);
        setId(userr.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  return (
    <div class="main-body">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="profile_logo ">
              <i className="far fa-user-circle" />
            </div>
          </div>

          <div className="col-6 pl-5 offset-md-2">
            <div className="card ">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nom</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setfirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Prenom</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setlastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Assigned Role</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setAppUserRole(e.target.value)}
                      value={appUserRole}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Id</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setId(e.target.value)}
                      value={id}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <button
                      type="button"
                      className="btn colorlink px-4"
                      value="Save Changes"
                      onClick={(e) => updateUser(e)}
                    >
                      Save Changes
                    </button>
                    <div className="col-sm-3">
                    <Link className="btn colorlink padding" to={`/profile`}>
                      Cancel
                    </Link>
                  </div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
