import api from "../config/api";

export const getFeed = async () => {
  try {
    const res = await api.get("/feed");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const getPersonalizedFeed = async () => {
  try {
    const res = await api.get("/feed/personalised");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};
