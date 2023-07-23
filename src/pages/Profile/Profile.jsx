import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../contexts/AuthContext";
import { useStorage } from "../../contexts/StorageContext";

function Profile() {
  const fileRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const { currentUser, logout } = useAuth();
  const { updateProfilePicture, deleteProfilePicture } = useStorage();
  const navigate = useNavigate();

  async function handlePhotoSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setIsUploading(true);
      const file = fileRef.current.files[0];

      if (file) {
        const downloadURL = await updateProfilePicture(file);
        setPhotoURL(downloadURL);
      }
      setIsUploading(false);
    } catch (error) {
      setError("Failed to update profile picture");
      setIsUploading(false);
    }
  }

  async function handleDelete() {
    if (isUploading) {
      return;
    }

    try {
      setError("");
      setLoading(true);
      await deleteProfilePicture();
      setPhotoURL(null);
    } catch (error) {
      console.log("Failed to delete profile picture: " + error.message);
      switch (error.code) {
        case "storage/object-not-found":
          setError("You do not currently have an existing profile picture");
          break;
        default:
          setError("Failed to delete profile picture");
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    } else {
      setPhotoURL(
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
      );
    }
  }, [currentUser]);

  return (
    <>
      <div className="profile-card">
        <div className="profile-container">
          <h2 className="profile-heading">Profile</h2>
          {error && (
            <div className="profile-alert profile-alert-danger">{error}</div>
          )}
          <strong>Current User: </strong>
          {currentUser && currentUser.email}
          <Link to="/update-profile">Update Account Credentials</Link>
          <img
            src={
              photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
            }
            className="profile-img"
            alt="alt"
          />
          <form onSubmit={handlePhotoSubmit}>
            <input type="file" ref={fileRef} className="profile-input" />
            <button
              type="submit"
              className="profile-btn profile-btn-primary"
              disabled={isUploading}
            >
              Change profile picture
            </button>
            <button
              onClick={handleDelete}
              className="profile-btn profile-btn-primary"
              disabled={isUploading}
            >
              Delete profile picture
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
