// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const indexExists = (items: any, index: number) => {
   return index >= 0 && index < items.length;
};
