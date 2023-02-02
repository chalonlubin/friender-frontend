import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Alerts from "./Alerts";
import userContext from "./userContext";

const formFileData = new FormData();

/** Render signup form and navigate to homepage on successful sign up
 * else show errors
 *
 *  TODO: FormData
 *
 * Context
 * - currUser - obj with user info
 *
 * Props
 * - handleRegister() - from app
 *
 * State
 * - formData - {username, password, firstName, lastName, email}
 * - err - null or array of msgs
 *
 * RoutesList -> SignupForm -> Errors
 */
function Signup({ handleRegister }) {
  const { currUser } = useContext(userContext);

  // TODO: location and radius must be coerced to integer
  const initialState = {
    username: "",
    password: "",
    interest: "",
    hobbies: "",
    image: "",
    location: "",
    radius: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [err, setErr] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // TODO: put formData into formFileData and pass that
      await handleRegister(formFileData);
    } catch (err) {
      setErr(err);
    }
    setFormData(initialState);
  }

  if (currUser) return <Navigate to={"/"} />;

  return (
    <div className="SignupForm d-flex justify-content-center p-3">
      <div className="col-lg-4 col-12">
        <h1 className="form-header">Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-light rounded p-3">
          <div className="form-group">
            {err && <Alerts err={err} />}
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

export default Signup;
