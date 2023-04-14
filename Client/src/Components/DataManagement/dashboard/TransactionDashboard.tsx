import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import TransactionForm from '../form/TransactionForm';
import TransactionList from './TransactionList';

export default observer( function TransactionDashboard() {
    const {transactionStore} = useStore();
    const {editMode, openForm, deleteAllTransactions, loading, csvImport, csvExport} = transactionStore;
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    const fileInputRef = React.createRef<any>();
    
    // const inputFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        transactionStore.loadTransactions();
    }, [transactionStore])

    if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

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

      const importTransactions = (e: any) => {
        handleOnChange(e);
        handleOnSubmit(e);
      }

    // const fileSelectTransactions = () => {
    //     inputFile.current?.click();
    // }

    return (
        <>
            <Container className='container-data-buttons' fixed='top' style={{marginBottom: '1em'}}>
              <Segment.Group horizontal>
                <Segment>
                  <Button onClick={() => openForm()} positive content='Add Transaction'/>
                  <Button
                      onClick={() => { 
                      if (window.confirm('Are you sure you want to DELETE ALL BUYERS?\nA csv file will download to preserve the data.')) 
                      deleteAllTransactions()
                      }} 
                      loading={loading} negative content='Delete All Transactions'/>
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
                    <Button onClick={csvExport} floated='right' color='blue' content='Export Transactions'/>
                  </Segment>
                </Segment.Group>
              </Segment.Group>
            </Container>
            <Container className='add-form create-form'>
                {editMode &&
                <TransactionForm />}
            </Container>
            <TransactionList />
        </>
    )
})

// import { observer } from 'mobx-react-lite';
// import React, { useEffect, useRef } from 'react';
// import { Button, Container } from 'semantic-ui-react';
// import LoadingComponent from '../../../app/layout/LoadingComponent';
// import { useStore } from '../../../app/stores/store';
// import TransactionForm from '../form/TransactionForm';
// import TransactionList from './TransactionList';

// export default observer(function TransactionDashboard() {
//     const {transactionStore} = useStore();
//     const {editMode, openForm, deleteAllTransactions, loading, csvImport, csvExport} = transactionStore;
//     const inputFile = useRef<HTMLInputElement | null>(null);

//     useEffect(() => {
//         transactionStore.loadTransactions();
//     }, [transactionStore])

//     if (transactionStore.loadingInitial) return <LoadingComponent content='Loaading ...' />

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
//                 <Button onClick={() => openForm()} positive content='Add Transaction'/>
//                 <Button 
//                     onClick={() => { 
//                         if (window.confirm('Are you sure you want to DELETE ALL TRANSACTIONS?\nA csv file will download to preserve the data.')) 
//                         deleteAllTransactions()
//                         }} 
//                         loading={loading} negative content='Delete All Transactions'/>
//                 <input id="upload-csv" style={{display: "none"}} ref={inputFile} onChange={handleFileUpload} type="file" accept='.csv'/>
//                 <Button onClick={csvExport} floated='right' color='blue' content='Export Transactions'/>
//                 <Button onClick={fileSelectExhibitors} floated='right' color='blue' content='Import Transactions'/>
//             </Container>
//             <Container className='add-form create-form'>
//                 {editMode &&
//                 <TransactionForm />}
//             </Container>
//             <TransactionList />
//         </>
//     )
// })
