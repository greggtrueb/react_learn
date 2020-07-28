import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer} from "./CartReducer";
import { CommonReducer} from "./commonReducer";

export const WeaponStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));
