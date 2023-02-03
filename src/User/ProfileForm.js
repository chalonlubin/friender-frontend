//TODO: EDIT ALL


import React, { useState, useContext } from "react";
import userContext from "./userContext";
import Alerts from "../Common/Alerts";
import { toast } from "react-toastify";
import TOAST_DEFAULTS from "../Helpers/toastSettings";

/** ProfileForm: Form for updating user profile.
 *
 * Props: update
 * State: formData, status
 *
 * App -> RouteList -> ProfileForm
 **/
function ProfileForm({ updateUser }) {
  const { user } = useContext(userContext);
  const [err, setErr] = useState(null);

  const [status, setStatus] = useState({
    updateMsg: [],
    errors: [],
  });

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  /** Handle form submission:
   * - try to update
   *    - if update works, show success message
   *    - if update fails, show error message
   **/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await updateUser(formData);
      setStatus({ updateMsg: ["Updated successfully."], errors: [] });
    } catch (e) {
      setStatus({ updateMsg: [], errors: e });
      toast("❌ Update Failed!", TOAST_DEFAULTS);
    }
  }

  return (
    <div className="SignupForm d-flex justify-content-center p-3">
      <div className="col-lg-4 col-12">
        <h1 className="form-header">Sign Up</h1>
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
              value={formData.username}
              disabled
            />
            <label className="d-flex float-left m-2" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
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
              value={formData.interests}
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
              value={formData.hobbies}
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
              value={formData.image}
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
              value={formData.location}
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
              value={formData.radius}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">15</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
