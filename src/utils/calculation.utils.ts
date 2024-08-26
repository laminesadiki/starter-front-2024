export function formatOctets(sizeInOctets: number) {
   const units = ['octets', 'KB', 'MB', 'GB', 'TB'];
   let index = 0;
   let size = sizeInOctets;

   while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
   }

   return `${Math.round(size)} ${units[index]}`;
}
