export const getDateNow = () => {
   const now = new Date();
   const day = now.toISOString().split('T')[0];
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const result = [day, hours, minutes].join('-');
   return result;
};

export const formatDateForTable = (date: string) => {
   const dateFormat = new Date(date);
   const splitIsoFormat = dateFormat.toISOString().split('T');
   const day = splitIsoFormat[0].split('-').reverse().join('/');
   const hour = splitIsoFormat[1].split(':').slice(0, 2).join('h');
   return day + ' à ' + hour;
};
