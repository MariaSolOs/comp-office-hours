export const getDateString = (date: Date) => (
    date.toISOString().split('T')[0]
);