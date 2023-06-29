import api from "../config/api";
import {
  IdentityCraftingParams,
  PredictionCraftingParams,
} from "../types/actions";

export const craftingIdentity = async (newCraft: IdentityCraftingParams) => {
  try {
    const res = await api.post("/nft/identity", newCraft);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};

export const craftingPrediction = async (
  newCraft: PredictionCraftingParams
) => {
  try {
    const res = await api.post("/nft/prediction", newCraft);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, message: "Server Error!" };
  }
};
