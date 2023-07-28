import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alerts from "../Common/Alerts";
import TOAST_DEFAULTS from "../Helpers/toastSettings";
import userContext from "./userContext";

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
  const currUser = useContext(userContext);
  const navigate = useNavigate();

  // TODO: location and radius must be coerced to integer
  const initialState = {
    username: "",
    password: "",
    interests: "",
    hobbies: "",
    location: "",
    radius: 5,
  };
  const [inputData, setInputData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [err, setErr] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("here", name)

    setInputData((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  }
  
  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0])
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    try {
      formData.append("image", selectedFile);
      for (let fieldName in inputData) {
        formData.append(fieldName, inputData[fieldName]);
      }

      await handleRegister(formData);
      navigate("/");
      toast("✅ Sign-up Successful!", TOAST_DEFAULTS);
      setInputData(initialState);

    } catch (err) {
      setErr(err);
    }
  }

  if (currUser) return <Navigate to="/" />;

  return (
    <div className="SignupForm d-flex justify-content-center p-3">
      <div className="col-lg-4 col-12">
        <h3 className="Signup form-header press2p">Sign Up</h3>
        <form
          onSubmit={handleSubmit}
          className="SignupForm bg-light rounded p-3"
        >
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
              value={inputData.username}
              required
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
              value={inputData.password}
              required
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
              onChange={handleFileSelect}
              type="file"
              className="form-control"
              id="image"
              name="image"
              required
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
              required
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
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
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

export default Signup;
