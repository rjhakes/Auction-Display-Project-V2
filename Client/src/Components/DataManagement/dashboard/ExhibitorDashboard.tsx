import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ExhibitorForm from '../form/ExhibitorForm';
import ExhibitorList from './ExhibitorList';

export default observer( function ExhibitorDashboard() {
    const {exhibitorStore} = useStore();
    const {editMode, openForm, deleteAllExhibitors, loading, csvImport, csvExport} = exhibitorStore;
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    const fileInputRef = React.createRef<any>();
    
    // const inputFile = useRef<HTMLInputElement | null>(null);

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

    // const fileSelectExhibitors = () => {
    //     inputFile.current?.click();
    // }

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
              <Segment.Group horizontal>
                <Segment>
                  <Button onClick={() => openForm()} positive content='Add Exhibitor'/>
                  <Button
                      onClick={() => { 
                      if (window.confirm('Are you sure you want to DELETE ALL BUYERS?\nA csv file will download to preserve the data.')) 
                      deleteAllExhibitors()
                      }} 
                      loading={loading} negative content='Delete All Exhibitors'/>
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
                        icon='upload' color='green' loading={loading}
                      /> 
                    </Segment>
                  <Segment>
                    <Button onClick={csvExport} floated='right' color='blue' content='Export Exhibitors'/>
                  </Segment>
                </Segment.Group>
              </Segment.Group>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <ExhibitorForm />}
            </Container>
            <ExhibitorList />
        </>
    )
})


// import { observer } from 'mobx-react-lite';
// import React, { useEffect, useRef } from 'react';
// import { Button, Container } from 'semantic-ui-react';
// import LoadingComponent from '../../../app/layout/LoadingComponent';
// import { useStore } from '../../../app/stores/store';
// import ExhibitorForm from '../form/ExhibitorForm';
// import ExhibitorList from './ExhibitorList';

// export default observer( function ExhibitorDashboard() {

//     const {exhibitorStore} = useStore();
//     const {editMode, openForm, deleteAllExhibitors, loading, csvImport, csvExport} = exhibitorStore;
//     const inputFile = useRef<HTMLInputElement | null>(null);

//     useEffect(() => {
//         exhibitorStore.loadExhibitors();
//     }, [exhibitorStore])

//     if (exhibitorStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

//     const handleFileUpload = (e: any) => {
//         const { files } = e.target;
//         if (files && files.length) {
//             csvImport(files);
//         }
//     }

//     const fileSelectExhibitors = () => {
//         inputFile.current?.click();
//     }
//     return (
//         <>
//             <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
//                 <Button onClick={() => openForm()} positive content='Add Exhibitor'/>
//                 <Button 
//                 onClick={() => { 
//                         if (window.confirm('Are you sure you want to DELETE ALL EXHIBITORS?\nA csv file will download to preserve the data.')) 
//                         deleteAllExhibitors()
//                         }} 
//                         loading={loading} negative content='Delete All Exhibitors'/>
//                 <input id="upload-csv" style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file" accept='.csv'/>
//                 <Button onClick={csvExport} floated='right' color='blue' content='Export Exhibitors'/>
//                 <Button onClick={fileSelectExhibitors} floated='right' color='blue' content='Import Exhibitors'/>

//             </Container>
//             <Container className='add-form create-form'>
//                 {editMode &&
//                 <ExhibitorForm />}
//             </Container>
//             <ExhibitorList />
//         </>
//     )
// })