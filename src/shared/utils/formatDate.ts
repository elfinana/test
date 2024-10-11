export const formatDate = (date: Date): string | undefined => {
  if (!date) return;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};
