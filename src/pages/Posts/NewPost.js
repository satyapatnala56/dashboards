import React, { useState, useRef } from "react";
import CustomModal from "../../components/CustomModal";
import styles from "./Posts.module.css";
import { GoImage } from "react-icons/go";
import Button from "../../components/Button";

const NewPost = (props) => {
  const { handleClose, addPostHandler, isEdit, post, editHandler, setIsEdit } =
    props;

  const [subject, setSubject] = useState(isEdit ? post.title : "");
  const [imageFile, setImageFile] = useState();
  const [imageName, setImageName] = useState(isEdit ? post.imageName : "");
  const [description, setDescription] = useState(
    isEdit ? post.description : ""
  );
  const [warning, setWarning] = useState(false);

  const fileRef = useRef(null);

  const fileInputHandler = (e) => {
    setImageFile(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const addHandler = () => {
    addPostHandler({
      title: subject,
      image: URL.createObjectURL(imageFile),
      imageName,
      description,
      date: new Date().toISOString(),
      likes: 0,
      isLiked: false,
      isBookMarked: false,
    });
  };

  return (
    <CustomModal
      title={isEdit ? "Edit Post" : "Create a Post"}
      handleClose={handleClose}
      width="400px"
      height="500px"
    >
      <p>Write something for your post</p>
      <div className={styles.topBox}>
        <div className={styles.subject}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => {
              if (e.target.value.length > 0) setWarning(false);
              setSubject(e.target.value);
            }}
          />
          {warning && <p className={styles.warning}>Subject cannot be empty</p>}
        </div>
        <div
          className={styles.imageUpload}
          onClick={() => fileRef.current.click()}
        >
          <GoImage />
          <div>Add your Image</div>
        </div>
        {imageName && (
          <div
            style={{
              fontSize: "12px",
              textDecoration: "underline",
            }}
          >
            {imageName}
            <span
              style={{
                cursor: "pointer",
                marginLeft: "3px",
                color: "red",
              }}
              onClick={() => {
                fileRef.current.value = null;
                setImageFile();
                setImageName();
              }}
            >
              X
            </span>
          </div>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileRef}
          accept="image/*"
          onChange={fileInputHandler}
        />
      </div>
      <div className={styles.bottomBox}>
        <label htmlFor="description">What's on your mind?</label>
        <textarea
          type="text"
          placeholder="Type here"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button
          onClick={() => {
            if (subject.trim().length === 0) {
              setWarning(true);
              return;
            }
            isEdit
              ? editHandler({
                  ...post,
                  title: subject,
                  image: imageFile
                    ? URL.createObjectURL(imageFile)
                    : imageName
                    ? post.image
                    : "",
                  description,
                  imageName,
                })
              : addHandler();
            if (isEdit) setIsEdit(false);
          }}
        >
          {isEdit ? "Edit Post" : "Publish"}
        </Button>
      </div>
    </CustomModal>
  );
};

export default NewPost;
