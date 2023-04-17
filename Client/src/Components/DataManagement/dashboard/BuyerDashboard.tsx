import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Form, Segment, Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import BuyerForm from '../form/BuyerForm';
import BuyerList from './BuyerList';

export default observer( function BuyerDashboard() {
    const {buyerStore} = useStore();
    const {editMode, openForm, deleteAllBuyers, loading, csvImport, csvExport} = buyerStore;
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    
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

    return (
        <>
        {/* <Container> */}
            <Grid columns={2} centered style={{width: '100%'}}>
                <Grid.Row>
                    <Grid.Column width={4} style={{marginTop: '2em', marginLeft: '2em'}}>
                        {/* <Segment.Group horizontal> */}
                          <Button onClick={() => openForm()} positive content='Add'/>
                          <Button
                              onClick={() => { 
                              if (window.confirm('Are you sure you want to DELETE ALL BUYERS?\nA csv file will download to preserve the data.')) 
                              deleteAllBuyers()
                              }} 
                              loading={loading} negative content='Delete All'/>
                        {/* </Segment.Group> */}
                    </Grid.Column>
                    <Grid.Column floated='right'>
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
                                icon='upload' color='green' loading={loading}
                              /> 
                            </Segment>
                          <Segment>
                            <Button onClick={csvExport} floated='right' color='blue' content='Export'/>
                          </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        {/* </Container>  */}
            <Container className='add-form create-form'>
                {editMode &&
                <BuyerForm />}
            </Container>
            <BuyerList />
        </>
    )
})