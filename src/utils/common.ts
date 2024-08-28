export const getErrorMessage = (statusCode: number, statusText: string) => {
  const errorMessage = `An error has occurred: ${statusCode} - ${statusText}`;
  return errorMessage;
};

export const joinString = (items: string[]) => {
  return items.join(", ");
};
