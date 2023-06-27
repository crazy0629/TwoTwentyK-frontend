import api from "../config/api";
import { IArticle } from "../types/actions";

export const getFeed = async () => {
  try {
    const res = await api.get<IArticle[]>("/feed");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const getPersonalizedFeed = async () => {
  try {
    const res = await api.get<IArticle[]>("/feed/personalised");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};
