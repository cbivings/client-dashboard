import * as React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  gridColumnsTotalWidthSelector

} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { SaveRow } from "../../services/api";

const status = ['inquiry', 'onboarding', 'active', 'churned'];



// custom toolbar for the data grid
function EditToolbar(props) {
  const { setRows, setRowModesModel, setCols } = props;

  const handleClick = () => {
    const _id = randomId();
    const newRow = {
       _id , first_name: '', 
      last_name: '', date_of_birth: '', phone_number: '',
      email: '', addresses: [], customFields: [], status: `inquiry`,
      isNew: true 
    }
    setRows((oldRows) => [newRow, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [_id]: { mode: GridRowModes.Edit, fieldToFocus: 'first_name' },
    }));
  };

  /**
   * TODO 
   * - build out form for adding a new column
   * - add state for the new column to update automaticaly
   */
  const addCol = () => {
    console.log('add column')
    const newCol = { field: 'newcol', headerName: 'test', flex: 1, editable: true , type: String}
    setCols((oldCols) => [newCol, ...oldCols]);
  }

  return (
    <GridToolbarContainer sx={{display:'flex', justifyContent:'space-between'}}>
      {/* not a clue why this filter button isn't working, it seems like
      it should be extremely straightforward */}
      <GridToolbarFilterButton />
      <Button color="secondary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Customer
      </Button>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

export default function Customers(prop) {
  const customers = prop.customers;

  const [rows, setRows] = React.useState(customers);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [cols, setCols] = React.useState([]);

  /**
   * TODO
   * -don't hardcode this here 
   * -form validation / structure for the multiple addresses possibilities
   */
  const columns = [
    { field: 'first_name', headerName: 'First Name', flex: 1, editable: true , type: String},
    { field: 'last_name', headerName: 'Last Name', flex: 1, editable: true , type: String},
    { field: 'status', headerName: 'Status', flex: 1, editable: true , type: 'singleSelect', valueOptions: status},
    { field: 'date_of_birth', headerName: 'Date of Birth', flex: 1, editable: true , type: Date},
    { field: 'phone_number', headerName: 'Phone Number', flex: 1, editable: true , type: String},
    { field: 'email', headerName: 'email', flex: 1, editable: true , type: String},
    { field: 'addresses', headerName: 'Addresses', flex: 1, editable: true , type: String},
    { field: 'customFields', headerName: 'custom fields', flex: 1, editable: true , type: String},
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.View } });

  };

  const handleDeleteClick = (_id) => () => {
    setRows(rows.filter((row) => row._id !== _id));
  };

  const handleCancelClick = (_id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [_id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === _id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== _id));
    }
  };

  // hit the back end with data to save
  const mySaveOnServerFunction = (updatedRow) => {
    SaveRow(updatedRow)
    .then((result) => {
      console.log(result)
    })
  }

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const addcol = () => {
    console.log('add column')
    columns.push({ field: 'newcol', headerName: 'test', flex: 1, editable: true , type: String})
  }
  
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={(updatedRow, originalRow) =>
          mySaveOnServerFunction(updatedRow)
        }
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { 
            setRows,
            setRowModesModel,
            showQuickFilter: true,
            setCols,
            cols
          },
        }}
      />
    </Box>
  );
}