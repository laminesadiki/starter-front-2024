/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material';
import {
   GridEditInputCell,
   GridEditInputCellProps,
   GridRenderEditCellParams,
   useGridApiContext,
} from '@mui/x-data-grid';
import { Done as DoneIcon, Folder as FolderIcon } from '@mui/icons-material';

function EditName(props: GridEditInputCellProps) {
   const apiRef = useGridApiContext();

   const handleDoneClick = () => {
      apiRef.current.stopCellEditMode({ id: props.id, field: props.field });
   };

   const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
         console.log('Click Enter');
         handleDoneClick();
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

export function RenderEditName(params: GridRenderEditCellParams<any, any>) {
   return <EditName {...params} />;
}
