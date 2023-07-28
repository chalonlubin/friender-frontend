import React, { useState, useContext } from "react";
import userContext from "./userContext";
import Alerts from "../Common/Alerts";
import { useNavigate } from "react-router-dom";
import Loading from "../Common/Loading";

function ProfileForm({ handleUpdate }) {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [inputData, setInputData] = useState({
    interests: user.interests,
    hobbies: user.hobbies,
    location: user.location,
    radius: user.radius,
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleImageChange(evt) {
    const file = evt.target.files[0];
    setSelectedImage(file);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      for (let fieldName in inputData) {
        formData.append(fieldName, inputData[fieldName]);
      }

      if (!selectedImage) {
        formData.append("image", user.image);
      } else {
        formData.append("image", selectedImage);
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
        <div className="SignupForm d-flex justify-content-center p-3">
          <div className="col-lg-8 col-12">
            <h1 className="Edit form-header press2p">Edit Profile</h1>
            <form onSubmit={handleSubmit} className="bg-light rounded p-3">
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
                  onChange={handleImageChange}
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
                  value={inputData.location}
                />
                <label htmlFor="radius">Preferred Radius</label>
                <select
                  onChange={handleChange}
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
      )}
    </>
  );
}

export default ProfileForm;
