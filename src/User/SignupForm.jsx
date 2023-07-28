import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alerts from "../Common/Alerts";
import TOAST_DEFAULTS from "../Helpers/toastSettings";
import Loading from "../Common/Loading";

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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // TODO: location and radius must be coerced to integer
  const initialState = {
    username: "",
    password: "",
    interests: "Making all the friends!",
    hobbies: "Testing people's applications, I swear I'm not a stalker",
    location: "12345",
    radius: 500,
  };
  const [inputData, setInputData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [err, setErr] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputData((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    try {
      setLoading(true);
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
      toast(" Error with login, please try again", TOAST_DEFAULTS);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <div className="col-lg-8 col-12">
            <p className="text-center fs-3">
              Sign-up in just a few simple steps
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-light rounded border border-dark border-2 shadow p-3"
            >
              <div className="form-group">
                {err && <Alerts err={err} />}
                <label
                  className="d-flex float-left mx-1 pt-3"
                  htmlFor="username"
                >
                  <b>Username</b>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={inputData.username}
                  pattern=".{3,12}"
                  title="3 to 12 characters for username"
                  required
                />
                <label
                  className="d-flex float-left mx-1 pt-3"
                  htmlFor="password"
                >
                  <b>Password</b>
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={inputData.password}
                  pattern=".{5,12}"
                  title="5 to 12 characters for password"
                  required
                />
                <label
                  className="d-flex float-left mx-1 pt-3"
                  htmlFor="interests"
                >
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
                <label
                  className="d-flex flex-column float-left mx-1 pt-3"
                  htmlFor="hobbies"
                >
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
                <label
                  className="d-flex flex-column float-left mx-1 pt-3"
                  htmlFor="image"
                >
                  <b>Image</b>
                  <p className="text-muted">JPG, PNG, & Webpb</p>
                </label>
                <input
                  onChange={handleFileSelect}
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  title="Please input a valid image type"
                  required
                />
                <label
                  className="d-flex flex-column float-left mx-1 pt-3"
                  htmlFor="location"
                >
                  <b>Zip Code</b>
                  <p className="text-muted">
                    We recommend 12345 for text users.
                  </p>
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
                <label
                  className="d-flex flex-column float-left mx-1 pt-3"
                  htmlFor="radius"
                >
                  <b>Preferred Radius in Miles</b>
                  <p className="text-muted">We recommend 500 to start.</p>
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
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-dark btn-lg mt-3 ">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
