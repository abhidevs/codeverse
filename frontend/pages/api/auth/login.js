import axios from "axios";
import { serialize } from "cookie";
import API from "../../../api/api";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { email, password } = req.body;

  axios
    .post(`${API}/auth/login`, { email, password })
    .then(({ data }) => {
      const { access_token } = data;
      const serialised = serialize("codeverse_jwt", access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30 * 1000,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json(err?.response?.data || { msg: "Something went wrong" });
    });
}
