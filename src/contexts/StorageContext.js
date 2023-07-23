import React, { useContext } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { useAuth } from "./AuthContext";

const StorageContext = React.createContext();

export function useStorage() {
  return useContext(StorageContext);
}

export function StorageProvider({ children }) {
  const { currentUser } = useAuth();
  const storage = getStorage();

  async function updateProfilePicture(file) {
    try {
      const storageRef = ref(
        storage,
        `users/${currentUser.uid}/profilePicture.jpg`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      const downloadURL = await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress function
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });

      await updateProfile(currentUser, {
        photoURL: downloadURL,
      });

      return downloadURL;
    } catch (error) {
      console.log("Error updating profile picture: " + error.message);
      throw new Error("Failed to update profile picture");
    }
  }

  async function deleteProfilePicture() {
    try {
      const profilePictureRef = ref(
        storage,
        `users/${currentUser.uid}/profilePicture.jpg`
      );

      await deleteObject(profilePictureRef);

      await updateProfile(currentUser, {
        photoURL:
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
      });
    } catch (error) {
      console.log("Error deleting profile picture: " + error.message);
      throw new Error("Failed to delete profile picture");
    }
  }

  const value = {
    updateProfilePicture,
    deleteProfilePicture,
  };

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}
