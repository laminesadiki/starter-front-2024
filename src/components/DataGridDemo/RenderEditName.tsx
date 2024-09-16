/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material';
import {
   GridEditInputCell,
   GridEditInputCellProps,
   GridRenderEditCellParams,
   useGridApiContext,
} from '@mui/x-data-grid';
import { Done as DoneIcon, Folder as FolderIcon } from '@mui/icons-material';

export function EditName(props: GridEditInputCellProps) {
   const apiRef = useGridApiContext();

   const handleDoneClick = () => {
      apiRef.current.stopCellEditMode({ id: props.id, field: props.field });
   };

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
         event.preventDefault();
         handleDoneClick();
         console.log('Click Enter');
      }
   };

   return (
      <Box>
         <FolderIcon sx={{ fontSize: '30px' }} />
         <GridEditInputCell {...props} onKeyDown={handleKeyDown} />
         <Button onClick={handleDoneClick}>
            <DoneIcon fontSize={'small'} />
         </Button>
      </Box>
   );
}
