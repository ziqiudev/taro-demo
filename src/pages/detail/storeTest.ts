import useStoreB from "../../stores/storeB";

useStoreB.subscribe(
  state => state.name,
  (name, preName) => {
    console.log(name, "name");
    console.log("preName", preName);
  }
);
