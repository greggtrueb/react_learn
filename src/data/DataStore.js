import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const WeaponStoreDataStore = createStore( ShopReducer );