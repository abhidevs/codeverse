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

const CreatePost = () => {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  return (
    <>
      <div className=" justify-center relative flex w-full lg:mb-5 mb-3">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-[770px]">
          <div className="flex w-full px-6 py-4 ">
            <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer mr-2">
              <Image
                src="/dummyProfileImg.jpg"
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
                placeholder="What’s Happening?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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

                <button className="w-[115px] py-1 flex justify-center bg-skin-primary rounded-[8px]">
                  <PhotographIcon className="w-[24px] mr-1 " />
                  Photo
                </button>
                <button className="w-[115px] py-1 flex justify-center bg-skin-primary rounded-[8px]">
                  <VideoCameraIcon className="w-[24px] mr-1" />
                  Video
                </button>

                <button className="w-[115px] py-1  flex justify-center bg-skin-primary rounded-[8px]">
                  <PlayIcon className="w-[24px] mr-1" />
                  Gif
                </button>

                <button className="w-[115px] py-1  flex justify-center bg-skin-primary rounded-[8px]">
                  Post
                  <AiOutlineSend className="w-[24px]  h-auto   ml-1" />
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
