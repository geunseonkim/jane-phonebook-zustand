import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  createContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
  deleteContact: (isToDelete) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter(
        (item) => !isToDelete.includes(item.id)
      ),
    })),
}));

export default usePhoneBookStore;
