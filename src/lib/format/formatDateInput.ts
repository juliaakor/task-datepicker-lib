export const formatDateInput = (input: string): string => {
  let formattedValue = input.replace(/\D/g, '');

  if (formattedValue.length > 4) {
    formattedValue = `${formattedValue.slice(0, 4)}-${formattedValue.slice(4)}`;
  }
  if (formattedValue.length > 7) {
    formattedValue = `${formattedValue.slice(0, 7)}-${formattedValue.slice(7, 9)}`;
  }

  return formattedValue;
};
