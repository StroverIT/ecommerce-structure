"use client"

import { Provider} from "react-redux"
import {store} from "./store"
import { saveState } from "@/redux/browser-storage";
import { debounce } from "debounce";
// here we subscribe to the store changes
store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

export function Providers({children}: any){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}