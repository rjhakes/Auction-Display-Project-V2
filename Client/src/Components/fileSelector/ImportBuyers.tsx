import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useRef, useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { Button, Container } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

// const buttonRef = React.createRef()

export default function FileSelector() {

    // const handleOpenDialog = (e: any) => {
    //     if (buttonRef.current) {
    //         buttonRef.current.open(e)
    //     }
    // }

    // const handleOnFileLoad = (data: any) => {
    //     console.log('---------------------------')
    //     console.log(data)
    //     console.log('---------------------------')
    //   }
    
    // const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
    //     console.log(err)
    //   }
    
    // const handleOnRemoveFile = (data: any) => {
    //     console.log('---------------------------')
    //     console.log(data)
    //     console.log('---------------------------')
    //   }
    
    // const handleRemoveFile = (e: any) => {
    //     // Note that the ref is set async, so it might be null at some point
    //     // if (buttonRef.current) {
    //     //   buttonRef.current.removeFile(e)
    //     // }
    //   }
    // const [csv, setCSV] = useState("")
    const inputFile = useRef<HTMLInputElement | null>(null);
    const {buyerStore} = useStore();
    const {importBuyers, csvImport} = buyerStore;
    
    const handleFileUpload = (e: any) => {
        const { files } = e.target;
        
        console.log(e);
        console.log(e.target);
        // console.log(e.target[0].name)
        if (files && files.length) {
            console.log('file', inputFile);
            const filename = files[0].name;
            console.log('fileName', filename)
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType);
            // setCSV(files[0]);
            csvImport(files)
        }
    }

    const fileSelectBuyers = () => {
        inputFile.current?.click();
    }

    return (
        <>
            {/* <CSVReader
                ref={inputFile}
            >

            </CSVReader>
             */}
            <input id="upload-csv" style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file" accept='.csv'/>
            <Button floated='right' color='blue' content='Export Buyers'/>
            <Button onClick={fileSelectBuyers} floated='right' color='blue' content='Import Buyers'/>
        </>
        
    )
}