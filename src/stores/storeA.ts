import create from "zustand";

export type AState = {
  name: string;
};

const storeA = create<AState>(set => ({
  name: "storeA"
}));

export default storeA;
