import format from 'date-fns/format';

/*
  This convenient helper function takes an
  ISO date string, and formats it like:
  
  March 14th, 2024 at 11:09 AM
*/
export function formatDate(date) {
  return format(
    new Date(date),
    "MMMM do 'at' hh:mm b"
  );
}