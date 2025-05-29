import { create } from "zustand";

// modal control ------------------------------------------------
export const useModalState = create((set) => ({
  open: false,
  setOpen: (state) => set({ state }),
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));

// confirm dialog control ---------------------------------------
export const useConfirmModalState = create((set) => ({
  openConfirm: false,
  setOpenConfirm: (state) => set({ state }),
  openConfirmModal: () => set({ openConfirm: true }),
  closeConfirmModal: () => set({ openConfirm: false }),
}));

export const useDatabaseStore = create((set) => ({
  databases: [],
  setDatabases: (databases) => set({ databases }),
}));

export const useAccommodationStore = create((set) => ({
  accommodations: [],
  setAccommodations: (accommoadtions) => set({ accommoadtions }),
}));
