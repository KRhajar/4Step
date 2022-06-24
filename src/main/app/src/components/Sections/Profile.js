import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Profile.css";
import { useState, useEffect } from "react";
import ProfileService from "../../services/ProfilService";
import { render } from "@testing-library/react";

const Profile = () => {
  const [user, setUser] = useState("");
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    getUserInfo();
    setRerender(!rerender);
  }, "");
  const getUserInfo = () => {
    ProfileService.getUserInfo()
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="container">
      <div className="row">
        <div className="col-2 just">
          <div className="profile_logo ">
            <i className="far fa-user-circle" />
          </div>
        </div>
        <div className="col-8">
          <form>
            <div className="main-body widthh  offset-md-2">
              <div className="col-md-10 pl-5">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Nom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.firstName}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Prenom</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.lastName}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.email}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Assigned Role</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {user.appUserRole}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Id</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.id}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-12">
                        <Link
                          className="btn colorlink "
                          to={`/editprofile/${user.id}`}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
