import api from "../config/api";
import {
  nft_card_category_data,
  nft_card_crafting_data,
  nft_card_day_month_data,
  nft_card_identity_data,
  nft_card_prediction_data,
  nft_card_trigger_data,
  nft_card_year_data,
} from "../data/nfts";
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

export const getMyInfo = async (token: string) => {
  try {
    const res = await api.get("/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const updateMyInfo = async (arg: { [key: string]: string }) => {
  try {
    const res = await api.put("/me", { ...arg });
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const getMyNFTs = async () => {
  const myNFTsData = {
    nft_card_category_data: nft_card_category_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_crafting_data: nft_card_crafting_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_day_month_data: nft_card_day_month_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_identity_data: nft_card_identity_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_prediction_data: nft_card_prediction_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_trigger_data: nft_card_trigger_data.filter(
      (f) => f.owner_id === 3
    ),
    nft_card_year_data: nft_card_year_data.filter((f) => f.owner_id === 3),
  };
  // try {
  //   const res = await api.get("/me/nft");

  // return { success: true, data: res.data };
  console.log(myNFTsData);
  return { success: true, data: myNFTsData };
  // } catch (error) {
  //   return { success: false, message: "Server Error!" };
  // }
};
