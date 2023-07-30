import React, { useState, useContext } from "react";
import userContext from "./userContext";
import Alerts from "../common/Alerts";
import { useNavigate } from "react-router-dom";
import Loading from "../common/Loading";

function EditForm({ handleUpdate }) {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [err, setErr] = useState(null);
  const [inputData, setInputData] = useState({
    interests: user.interests,
    hobbies: user.hobbies,
    location: user.location,
    radius: user.radius,
  });

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
      console.log("selectedFile", selectedFile)
      if (!selectedFile) {
        formData.append("image", user.image);
      } else {
        formData.append("image", selectedFile);
      }
      for (let fieldName in inputData) {
        formData.append(fieldName, inputData[fieldName]);
      }
      await handleUpdate(formData);
      navigate("/profile");
    } catch (e) {
      setErr(e);
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
              Spice up your profile 🌶️
            </p>
            <form onSubmit={handleSubmit} className="bg-light rounded border border-dark border-2 shadow p-3">
              <div className="form-group">
                {err && <Alerts err={err} />}
                <label htmlFor="username">Username</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  disabled
                />
                <label htmlFor="interests">Interests</label>
                <textarea
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="interests"
                  name="interests"
                  value={inputData.interests}
                />
                <label htmlFor="hobbies">Hobbies</label>
                <textarea
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="hobbies"
                  name="hobbies"
                  value={inputData.hobbies}
                />
                <label htmlFor="image">Image</label>
                <input
                  onChange={handleFileSelect}
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                />
                <label htmlFor="location">Zip Code</label>
                <input
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  id="location"
                  name="location"
                  value={user.location}
                />
                <label htmlFor="radius">Preferred Radius</label>
                <select
                  onChange={handleChange}
                  type="range"
                  className="form-control"
                  id="radius"
                  name="radius"
                  value={user.radius}
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
                  Submit
                </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditForm;
