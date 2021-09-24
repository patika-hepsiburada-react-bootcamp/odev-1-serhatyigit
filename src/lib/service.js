import axios from "axios";
import constants from "./constants.js";

const getData = async (userID) => {
  try {
    const { data: user } = await axios(`${constants.BACKEND_URL}${constants.USERS_BASE}/${userID}`);
    const { data: posts } = await axios(`${constants.BACKEND_URL}${constants.POSTS_BASE}?userId=${userID}`);

    return { ...user, posts };
  } catch (err) {
    console.error(err.message);
  }
};

export default getData;
