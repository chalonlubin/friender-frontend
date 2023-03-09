//TODO: EDIT ALL


import React, { useState, useContext } from "react";
import userContext from "./userContext";
import Alerts from "../Common/Alerts";
import { toast } from "react-toastify";
import TOAST_DEFAULTS from "../Helpers/toastSettings";
import { useNavigate } from "react-router-dom";

/** ProfileForm: Form for updating user profile.
 *
 * Props: update
 * State: formData, status
 *
 * App -> RouteList -> ProfileForm
 **/
function ProfileForm({ handleUpdate }) {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const formData = new FormData();

  console.log("user", user);

  const [err, setErr] = useState(null);
  const [inputData, setInputData] = useState({
    interests: user.interests,
    hobbies: user.hobbies,
    location: user.location,
    radius: user.radius,
  });

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputData((f) => ({ ...f, [name]: value }));
  }

  /** Handle form submission:
   * - try to update
   *    - if update works, show success message
   *    - if update fails, show error message
   **/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      for (let fieldName in inputData) {
        formData.append(fieldName, inputData[fieldName]);
      }
      formData.append("image", document.querySelector("#image").files[0]);

      await handleUpdate(formData);
      navigate("profile");

    } catch (e) {
      setErr(e);
    }
  }

  return (
    <div className="SignupForm d-flex justify-content-center p-3">
      <div className="col-lg-4 col-12">
        <h1 className="Edit form-header">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="bg-light rounded p-3">
          <div className="form-group">
            {err &&  <Alerts err={err} />}
            <label className="d-flex float-left m-2" htmlFor="username">
              <b>Username</b>
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={user.username}
              disabled
            />
            <label className="d-flex float-left m-2" htmlFor="interests">
              <b>Interests</b>
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              className="form-control"
              id="interests"
              name="interests"
              value={inputData.interests}
            />
            <label className="d-flex float-left m-2" htmlFor="hobbies">
              <b>Hobbies</b>
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              className="form-control"
              id="hobbies"
              name="hobbies"
              value={inputData.hobbies}
            />
            <label className="d-flex float-left m-2" htmlFor="image">
              <b>Image</b>
            </label>
            <input
              onChange={handleChange}
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={inputData.image}
            />
            <label className="d-flex float-left m-2" htmlFor="location">
              <b>Zip Code</b>
            </label>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              id="location"
              name="location"
              value={inputData.location}
            />
            <label className="d-flex float-left m-2" htmlFor="radius">
              <b>Preferred Radius</b>
            </label>
            <select
              onChange={handleChange}
              type="range"
              className="form-control"
              id="radius"
              name="radius"
              value={inputData.radius}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">15</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <button type="submit" className="btn btn-go mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
