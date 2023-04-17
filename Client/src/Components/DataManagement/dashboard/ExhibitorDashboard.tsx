import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Form, Segment, Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ExhibitorForm from '../form/ExhibitorForm';
import ExhibitorList from './ExhibitorList';

export default observer( function ExhibitorDashboard() {
    const {exhibitorStore} = useStore();
    const {editMode, openForm, deleteAllExhibitors, loading, csvImport, csvExport} = exhibitorStore;
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    
    useEffect(() => {
        exhibitorStore.loadExhibitors();
    }, [exhibitorStore])

    if (exhibitorStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

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

      const importExhibitors = (e: any) => {
        handleOnChange(e);
        handleOnSubmit(e);
      }

    return (
        <>
            <Container>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={2} floated='left'>
                        <Segment.Group horizontal>
                          <Button onClick={() => openForm()} positive content='Add'/>
                          <Button
                              onClick={() => { 
                              if (window.confirm('Are you sure you want to DELETE ALL EXHIBITORS?\nA csv file will download to preserve the data.')) 
                              deleteAllExhibitors()
                              }} 
                              loading={loading} negative content='Delete All'/>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={12} floated='right'>
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
        </Container> 
            <Container className='add-form create-form'>
                {editMode &&
                <ExhibitorForm />}
            </Container>
            <ExhibitorList />
        </>
    )
})