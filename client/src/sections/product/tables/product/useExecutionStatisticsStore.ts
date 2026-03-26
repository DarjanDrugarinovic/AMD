import { create } from 'zustand';
import { Dayjs } from 'dayjs';

type Filters = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

type ExecutionStatisticsStore = {
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
};

export const useExecutionStatisticsStore = create<ExecutionStatisticsStore>()((set) => ({
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
