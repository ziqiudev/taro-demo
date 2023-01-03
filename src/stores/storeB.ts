import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import storeA from "./storeA";

export type BState = {
  name: string;
  addName: (v: string) => void;
};

const storeB = create<BState>()(
  subscribeWithSelector(set => {
    const { name: nameA } = storeA.getState();
    return {
      name: "storeB",
      addName: () => {
        set(state => ({ name: state.name + nameA }));
      }
    };
  })
);

export default storeB;
