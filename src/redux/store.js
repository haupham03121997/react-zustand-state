import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let peopleStore  = (set) => ({
  peoples: ["Hau" , "Danh" , "Vinh"],
  // method
  addPerson: (person)=> set((state)=>({ peoples: [...state.peoples , person]})),
})

let settingsStore = (set)=>({
  dark : false,
  //method
  toggleTheme :()=>(set(state=>({ dark : !state.dark}))),
})

peopleStore = devtools(peopleStore);
settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name : "USER_SETTINGS"});

export const usePeopleStore = create(peopleStore);
export const useSettingsStore = create(settingsStore)