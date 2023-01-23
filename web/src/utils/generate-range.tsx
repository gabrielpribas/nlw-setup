import dayjs from "dayjs";

export function generateRange() {
   const firstDay = dayjs().startOf('year');
   const lastDay = new Date();

   const dates = [];
   let compareDate = firstDay;

   while (compareDate.isBefore(lastDay)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
   }

   return dates;
}