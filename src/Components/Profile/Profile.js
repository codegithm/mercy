import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import NavProile from '../NavProfile/NavProfile';
import { getPersonal, logOff } from '../../firebase/firebase';
import { AppContext } from "../../AppContext";
import './Profile.css';
import { useHistory } from "react-router-dom";
import { useAuth } from '../../firebase/firebase';
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
const Profile = () =>{
    const { loggedIn, personalInfo } = useContext(AppContext);
    const [isSignedIn, setIsSignedIn] = loggedIn;
    const [personal,setPersonal] = personalInfo;
    const history = useHistory();
    const user = useAuth();

    useEffect(()=>{
      console.log(user);
    },[]);
    return(
        <div className="profile-cont">
          <NavProile />
          <div className="personal">
            {personal === false ? (<button>Fill Personal Details</button>) : 
              personal.map((data)=>{
                return(
                  // <div>{data.Name}</div>
                  <div class="dropdown drop-cont">
                    <a class="btn btn-secondary dropdown-toggle drop-title" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Personal details
                    </a>

                    <div class="dropdown-menu drop-det" aria-labelledby="dropdownMenuLink">
                      <div>
                        <h5 class="dropdown-item drop-sub-title">Name</h5>
                        <p className="values">{data.Name}</p>
                        <h5 class="dropdown-item drop-sub-title">Surname</h5>
                        <p className="values">{data.Surname}</p>
                        <h5 class="dropdown-item drop-sub-title">Cellnumber</h5>
                        <p className="values">{data.Cellnumber}</p>
                      </div>
                    </div>
                </div>
                )
              })
            }
          </div>
          <div className="logout" onClick={()=>{
                logOff();
                setIsSignedIn("");
                history.push("/");
                console.log(logOff())
              }}>
                <FontAwesomeIcon icon={faDoorOpen} />
                Logout
            </div> 
        </div>
    )
}

export default Profile;