import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useTheme } from "../../../app/theme/theme";
import { Box, LinearProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import Header from "../../Header";
import { mockDataBuyers } from "../../../data/mockData";
import GridToolbarAddButton from "../buttons/GridToolbarAddButton";

function CustomToolbar() {
    return (
        <>
        <Box display="flex" justifyContent="space-between">
            <Box>
            <GridToolbarContainer >
                {/* <GridToolbarColumnsButton /> */}
                <GridToolbarAddButton />
                <GridToolbarQuickFilter />
                <GridToolbarFilterButton />
                {/* <GridToolbarDensitySelector /> */}
            </GridToolbarContainer>
            </Box>
            <Box>
            <GridToolbarContainer >
                <GridToolbarExport />
            </GridToolbarContainer>
            </Box>
        </Box>
        </>
    );
  }

export default observer( function BuyerDashboard() {
    const {buyerStore} = useStore();
    const {buyersByBidNum, editMode, openForm, deleteAllBuyers, loading, csvImport, csvExport, loadBuyers, buyerRegistry} = buyerStore;
    const {themer} = useTheme();
    const {theme, tokens} = themer;
    const colors = tokens(theme.palette.mode);
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    
    const columns: GridColDef[] = [
        // { field: "id", headerName: "ID", flex: 0.5 },
        // { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "bidderNumber",
            headerName: "Bidder #",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
          editable: true
        },
        {
            field: "contactName",
            headerName: "Contact Name",
            flex: 1,
            editable: true
            // cellClassName: "name-column--cell",
        },
        {
          field: "phone",
          headerName: "Phone #",
          flex: 1,
          editable: true
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          editable: true
        },
        // {
        //   field: "address",
        //   headerName: "Address",
        //   flex: 1,
        // },
        // {
        //   field: "city",
        //   headerName: "City",
        //   flex: 1,
        // },
        // {
        //   field: "zipCode",
        //   headerName: "Zip Code",
        //   flex: 1,
        // },
      ];

    useEffect(() => {
        buyerStore.loadBuyers();
    }, [buyerStore])

    // if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

    const handleFileUpload = (e: any) => {
        const { files } = e.target;
        if (files && files.length) {
            csvImport(files);
        }
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        if (file) {
          fileReader.onload = function (event: any | null) {
            const text = event.target.result;
            csvImport(text);
          };
    
          fileReader.readAsText(file);
        }
      };

      const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
      };

      const importBuyers = (e: any) => {
        handleOnChange(e);
        handleOnSubmit(e);
      }
    
    return (
        <>
        <Box m="20px">
            <Header 
                title=""
                subtitle=""
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
                }}
            >
                <DataGrid
                    // slots={{
                    //     loadingOverlay: LinearProgress,
                    // }}
                    // loading
                    // checkboxSelection
                    rows={buyersByBidNum}
                    columns={columns}
                    components={{ Toolbar: CustomToolbar }}
                    editMode={"row"}
                />
            </Box>
        </Box>

        </>
    );
})