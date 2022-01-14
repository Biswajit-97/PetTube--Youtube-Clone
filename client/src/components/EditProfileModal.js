import React from "react";
import { useSnackbar } from "react-simple-snackbar";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfileModal";
import { updateUser } from "../utils/api-client";
import { uploadMedia } from "../utils/upload-media";
import { CloseIcon } from "./Icons";

function EditProfileModal({ profile, closeModal }) {
  const [openSnackbar] = useSnackbar();
  const [cover, setCover] = React.useState(profile.cover);
  const [avatar, setAvatar] = React.useState(profile.avatar);

  async function handleCoverUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const cover = await uploadMedia({
        type: "image",
        file,
        preset: "your-cover-preset",
      });
      setCover(cover);
    }
  }

  async function handleAvatarUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const avatar = await uploadMedia({
        type: "image",
        file,
        preset: "your-avatar-preset",
      });
      setAvatar(avatar);
    }
  }

  async function handleEditProfile(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const about = event.target.elements.about.value;

    if (!username.trim()) {
      return openSnackbar("Username cannot be empty");
    }

    const user = {
      username,
      about,
      avatar,
      cover,
    };

    await updateUser(user);
    openSnackbar("Profile updated");
    closeModal();
  }

  return (
    <Wrapper>
      <div className="container"></div>
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <div className="modal-header">
            <h3>
              <CloseIcon onClick={closeModal} />
              <span>Edit Profile</span>
            </h3>
            <Button type="submit">Save</Button>
          </div>

          <div className="cover-upload-container">
            <label htmlFor="cover-upload">
              <img
                className="pointer"
                width="100%"
                height="200px"
                src={cover}
                alt="cover"
              />
            </label>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleCoverUpload}
            />
          </div>

          <div className="avatar-upload-icon">
            <label htmlFor="avatar-upload">
              <img src={avatar} className="pointer avatar lg" alt="avatar" />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarUpload}
            />
          </div>
          <input
            type="text"
            placeholder="Insert username"
            id="username"
            defaultValue={profile.username}
            required
          />
          <textarea
            id="about"
            placeholder="Tell viewers about your channel"
            defaultValue={profile.about}
          />
        </form>
      </div>
    </Wrapper>
  );
}

export default EditProfileModal;
