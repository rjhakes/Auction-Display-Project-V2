import React, { useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { useTheme } from '../../../app/theme/theme';
import { IconButton, Typography } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';

export default function GridToolbarAddButton() {
    const {buyerStore} = useStore();
    const {buyersByBidNum, editMode, openForm, deleteAllBuyers, loading, csvImport, csvExport, loadBuyers, buyerRegistry} = buyerStore;
    const {themer} = useTheme();
    const {theme, tokens} = themer;
    const colors = tokens(theme.palette.mode);
    const [file, setFile] = useState();
    const fileReader = new FileReader();

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
        <IconButton onClick={() => openForm()}>
            <FileUploadOutlined />
            <Typography
            color={colors.grey[100]}
            >
                ADD
            </Typography>
        </IconButton>
        </>
    );
}