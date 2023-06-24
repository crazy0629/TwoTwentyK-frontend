import api from "../config/api";
import type { LoginParams, RegisterParams } from "../types/actions";

export const signin = async ({ username, password }: LoginParams) => {
  try {
    const res = await api.post("/auth/login", { username, password });
    return { success: true, token: res.data.token };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const register = async ({
  username,
  password,
  email,
}: RegisterParams) => {
  try {
    const res = await api.post("/auth/register", { username, password, email });
    return { success: true, user: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};
