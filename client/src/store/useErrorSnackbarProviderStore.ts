import { create } from 'zustand';

type ErrorSnackbarStore = {
  errorMessage: string;
  setErrorMessage: (message: string) => void;
};

export const useErrorSnackbarProviderStore = create<ErrorSnackbarStore>()((set) => ({
  errorMessage: '',
  setErrorMessage: (message) => set({ errorMessage: message }),
}));
