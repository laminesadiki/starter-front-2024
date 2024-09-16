import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import RenderCellFileOrFolder from './RenderCellFileOrFolder';
import { EditName } from './RenderEditName';

export default function DataGridDemo() {
   const columns: GridColDef<(typeof rows)[number]>[] = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
         field: 'fileName',
         headerName: 'File Name',
         width: 400,
         editable: true,
         renderCell: params => <RenderCellFileOrFolder {...params} />,
         renderEditCell: params => <EditName {...params} />,
      },
   ];

   const rows = [
      {
         id: 1,
         fileName: 'File 1',
         isFile: true,
      },
      {
         id: 2,
         fileName: 'File 2',
         isFile: true,
      },
      {
         id: 3,
         fileName: 'Folder 1',
         isFile: false,
      },
      {
         id: 4,
         fileName: 'Folder 2',
         isFile: false,
      },
      {
         id: 5,
         fileName: 'Folder 3',
         isFile: false,
      },
   ];

   return (
      <Box sx={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            isCellEditable={params =>
               params.field === 'fileName' && !params?.row?.isFile
            }
         />
      </Box>
   );
}
