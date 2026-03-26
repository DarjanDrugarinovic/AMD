import { create } from 'zustand';
import { Dayjs } from 'dayjs';

type Filters = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

type TestCyclesStore = {
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
};

export const useTestCyclesStore = create<TestCyclesStore>()((set) => ({
  filters: {
    startDate: null,
    endDate: null
  },
  updateFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters
      }
    }))
}));
