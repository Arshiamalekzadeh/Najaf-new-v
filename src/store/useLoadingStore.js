import { create } from "zustand";

const useLoadingStore = create((set, get) => ({
  loadingCount: 0,
  startLoading: () =>
    set((state) => ({ loadingCount: state.loadingCount + 1 })),
  stopLoading: () =>
    set((state) => ({ loadingCount: Math.max(0, state.loadingCount - 1) })),
  isLoading: () => {
    const currentState = get();
    return currentState.loadingCount > 0;
  },
}));

export default useLoadingStore;
