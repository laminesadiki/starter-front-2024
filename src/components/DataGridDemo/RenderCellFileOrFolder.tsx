/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Box, Button, SvgIcon, Tooltip } from '@mui/material';
import {
   GridRenderCellParams,
   GridTreeNodeWithRender,
   useGridApiContext,
} from '@mui/x-data-grid';
import { Edit, TextSnippet, Folder } from '@mui/icons-material/';
import { MouseEvent, MouseEventHandler } from 'react';

export default function RenderCellFileOrFolder(
   props: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>,
) {
   const { row, value } = props;
   const apiRef = useGridApiContext();

   const handleEditClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation(); // stop select row
      apiRef.current.startCellEditMode({
         id: props.id,
         field: props.field,
      });
   };

   return (
      <p>
         {row.isFile ? (
            <TextSnippet sx={{ fontSize: '30px' }} />
         ) : (
            <Folder sx={{ fontSize: '30px' }} />
         )}
         {value}
         {props.field === 'fileName' && !props?.row?.isFile ? (
            <Button onClick={handleEditClick} className="actionsCell">
               <Edit fontSize={'small'} />
            </Button>
         ) : null}
      </p>
   );
}
