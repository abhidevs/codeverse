import {
  EmojiHappyIcon,
  PhotographIcon,
  PlayIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { setPosts } from "../store/postSlice";
import axios from "axios";
import API from "../api/api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
  const initialState = {
    content: "",
    images: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filesLeftForUpload, setFilesLeftForUpload] = useState(0);

  const { user, accessToken } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const dispatch = useDispatch();

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setFormData({ ...formData, content: formData.content + emoji });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadImages = (items) => {
    if (items?.length === 0) return;

    setFormData({ ...formData, images: [] });

    items.forEach((item) => {
      try {
        const filename = new Date().getTime() + item.name;
        const storageRef = ref(storage, `/assets/images/${filename}`);

        uploadBytes(storageRef, item).then((snapshot) => {
          console.log(`${item.name} file succesfully uploaded`);

          getDownloadURL(snapshot.ref).then((downloadURL) => {
            let tempFormData = { ...formData };
            tempFormData.images.push({
              url: downloadURL,
            });
            setFormData(tempFormData);
            setFilesLeftForUpload(filesLeftForUpload - 1);
          });
        });
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    });
  };

  const handleAddImages = (e) => {
    const { files } = e.target;
    let filesData = [];

    for (let i = 0; i < files.length; i++) {
      filesData.push(files[i]);
    }

    setFilesLeftForUpload(filesData.length);
    uploadImages(filesData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { content, images } = formData;
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${API}/posts/`,
        { content, images },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { newPost } = data;

      // console.log(data);
      setLoading(false);
      alert("post uploaded succcesfully");
      dispatch(setPosts({ [newPost._id]: newPost }));
    } catch (error) {
      console.log(error?.response?.data?.msg || error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" justify-center relative flex w-full lg:mb-5 mb-3">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-[770px]">
          <div className="flex w-full px-6 py-4 ">
            <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer mr-2">
              <Image
                src={
                  user?.avatar ||
                  "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                width={180}
                height={180}
                className="rounded-full object-cover"
              />
            </div>

            <div className=" w-full ">
              <textarea
                className="
                rounded-2xl
                bg-skin-color7
                block
                w-full
                px-3
                py-1 mt-2.5
                text-base
                transition
                ease-in-out
                outline-none "
                rows="3"
                name="content"
                placeholder="What’s Happening?"
                value={formData.content}
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-start gap-3 my-3 flex-wrap w-full">
                <button
                  className="w-[115px] py-1 flex justify-center bg-skin-primary rounded-[8px]"
                  onClick={() => setShowEmojis(!showEmojis)}
                >
                  {!showEmojis ? (
                    <>
                      <EmojiHappyIcon className="w-[24px] mr-1 " />
                      Emoji
                    </>
                  ) : (
                    <FaRegKeyboard className=" w-[26px] h-[26px]" />
                  )}
                </button>
                {showEmojis && (
                  <Picker
                    darkMode="true"
                    onSelect={addEmoji}
                    theme={"dark"}
                    style={{
                      width: "100%",
                      background: "#232226",
                      border: "none",
                    }}
                  />
                )}

                <label
                  htmlFor="addImagesBtn"
                  className="w-[115px] py-1 flex justify-center bg-skin-primary rounded-[8px] cursor-pointer"
                >
                  <PhotographIcon className="w-[24px] mr-1 " />
                  Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="addImagesBtn"
                  hidden
                  onChange={handleAddImages}
                />
                <button className="w-[115px] py-1 flex justify-center bg-skin-primary rounded-[8px]">
                  <VideoCameraIcon className="w-[24px] mr-1" />
                  Video
                </button>

                <button className="w-[115px] py-1  flex justify-center bg-skin-primary rounded-[8px]">
                  <PlayIcon className="w-[24px] mr-1" />
                  Gif
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-[115px] py-1  flex justify-center bg-skin-primary rounded-[8px]"
                >
                  {loading || filesLeftForUpload > 0 ? (
                    "...Uploading"
                  ) : (
                    <>
                      Post
                      <AiOutlineSend className="w-[24px]  h-auto   ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
