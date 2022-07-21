import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let peopleStore = (set) => ({
  people: ["John Doe", "Joe Doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

let themeStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

peopleStore = devtools(peopleStore);
peopleStore = persist(peopleStore, { name: "users" });

themeStore = devtools(themeStore);
themeStore = persist(themeStore, { name: "theme" });

export const usePeopleStore = create(peopleStore); // adding some middleware
export const useThemeStore = create(themeStore);

// we can use persist to persist store in local storage: persist(store, { name: 'key' })
// If we do not provide a key then key will be undefined
