import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';

export default function FileSelector() {
    const [csv, setCSV] = useState("")
    const inputFile = useRef<HTMLInputElement | null>(null);
    
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
            setCSV(files[0]);
        }
    }

    const importBuyers = () => {
        inputFile.current?.click();
        
    }

    return (
        <>
            <input style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file"/>
            <Button floated='right' color='blue' content='Export Buyers'/>
            <Button onClick={importBuyers} floated='right' color='blue' content='Import Buyers'/>
        </>
        
    )
}