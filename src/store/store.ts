import { create } from "zustand";

type ModalState = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

interface ConfirmModalState {
  openConfirm: boolean;
  setOpenConfirm: (state: boolean) => void; // Adjust if this is different based on your implementation
  openConfirmModal: () => void;
  closeConfirmModal: () => void;
}

// modal control ------------------------------------------------
export const useModalState = create<ModalState>((set) => ({
  open: false,
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));

// confirm dialog control ---------------------------------------
export const useConfirmModalState = create<ConfirmModalState>((set) => ({
  openConfirm: false,
  setOpenConfirm: (state: boolean) => set({ openConfirm: state }),
  openConfirmModal: () => set({ openConfirm: true }),
  closeConfirmModal: () => set({ openConfirm: false }),
}));

export const useDatabaseStore = create((set) => ({
  databases: [],
  setDatabases: (databases: any) => set({ databases }),
}));

export const useAccommodationStore = create((set) => ({
  accommodations: [],
  setAccommodations: (accommoadtions: any) => set({ accommoadtions }),
}));
