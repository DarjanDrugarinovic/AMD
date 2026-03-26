import { parseDate } from 'utils/parseDateTime';

type Props = {
  date: string;
};

export const useRenderDateCell = () => ({
  renderDateCell: (date: string) => <DateCell date={date} />
});

const DateCell = ({ date }: Props) => <>{parseDate(date as unknown as Date, 'MMM DD, YYYY HH:mm')}</>;

export default DateCell;
