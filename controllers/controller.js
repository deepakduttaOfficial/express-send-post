import data from "../fakeData/index.js";
export const getPost = async (req, res) => {
  return res.status(200).json(data);
};
