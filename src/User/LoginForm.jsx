import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alerts from "../common/Alerts";
import Loading from "../common/Loading";

/** Render login form and navigate to homepage on successful login
 * else show errors
 *
 *
 * Context
 * - currUser - obj with user info
 *
 * Props
 * - handleLogin() - from app
 *
 * State
 * - formData - {username, password}
 * - err - null or array of msgs
 *
 * RoutesList -> LoginForm -> Errors
 */
// eslint-disable-next-line react/prop-types
function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialState = {
    username: "",
    password: "",
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
      setLoading(true);
      await handleLogin(formData);
      navigate("/");
    } catch (err) {
      setErr(err);
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-center flex-grow-1 p-3">
          <div className="col-lg-5 col-12">
            <h3 className="form-header text-center fw-bold p-3">
              Welcome back 👋
            </h3>
            <form
              onSubmit={handleSubmit}
              className=" bg-light rounded border border-dark border-2 shadow p-3"
            >
              <div className="form-group">
                {err && <Alerts err={err} />}
                <label className="d-flex float-left p-1" htmlFor="username">
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
                <label className="d-flex float-left p-1" htmlFor="password">
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
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center">
                <button type="submit" className="btn btn-dark btn-lg my-3 ">
                  Join
                </button>
                <p className="text-center">Not a member yet?</p>
                <Link to="/signup" className="btn btn-warning btn-lg ">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
