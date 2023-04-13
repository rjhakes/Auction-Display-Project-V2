import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import BuyerForm from '../form/BuyerForm';
import BuyerList from './BuyerList';

export default observer( function BuyerDashboard() {
    const {buyerStore} = useStore();
    const {editMode, openForm, deleteAllBuyers, loading, csvImport, csvExport} = buyerStore;
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    const fileInputRef = React.createRef<any>();
    
    // const inputFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        buyerStore.loadBuyers();
    }, [buyerStore])

    if (buyerStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

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

    // const fileSelectBuyers = () => {
    //     inputFile.current?.click();
    // }

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
              <Segment.Group horizontal>
                <Segment>
                  <Button onClick={() => openForm()} positive content='Add Buyer'/>
                  <Button
                      onClick={() => { 
                      if (window.confirm('Are you sure you want to DELETE ALL BUYERS?\nA csv file will download to preserve the data.')) 
                      deleteAllBuyers()
                      }} 
                      loading={loading} negative content='Delete All Buyers'/>
                </Segment>
                <Segment></Segment>
                <Segment.Group horizontal>
                  <Segment>
                      <Input 
                        id='csvFileInput'
                        iconPosition='left'
                        icon='file'
                        ref={file} onChange={handleOnChange} 
                        type='file' accept='.csv' 
                        inverted
                      />
                    <Button
                        onClick={(e) => {
                          handleOnSubmit(e);
                        }}
                        icon='upload' color='green'
                      /> 
                    </Segment>
                  <Segment>
                    <Button onClick={csvExport} floated='right' color='blue' content='Export Buyers'/>
                  </Segment>
                </Segment.Group>
              </Segment.Group>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <BuyerForm />}
            </Container>
            <BuyerList />
        </>
    )
})