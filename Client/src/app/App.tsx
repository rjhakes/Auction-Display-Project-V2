import React, { Fragment, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './layout/styles.css';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { useTheme, theme as themex, ThemeContext } from './theme/theme';
import { observer } from 'mobx-react-lite';
// import NavBar from './layout/NavBar';
// import HomePage from '../../components/home/HomePage';
// import BuyerManager from '../../components/dataManagement/BuyerManager';
// import DataManagement from '../../components/dataManagement/DataManagement';
// import ExhibitorManager from '../../components/dataManagement/ExhibitorManager';
// import TransactionManager from '../../components/dataManagement/TransactionManager';
// import TransactionGUI from '../../components/transactionGUI/TransactionGUI';
// import LiveSaleDisplay from '../../components/liveSaleDisplay/LiveSaleDisplay';
// import SaleScrollDisplay from '../../components/saleScrollDisplay/SaleScrollDisplay';
// import AddonGUI from '../../components/addonGUI/AddonGUI';
// import AddonDisplay from '../../components/addonDisplay/AddonDisplay';

export default observer(function App() {
  const {themer} = useTheme();  
  const {theme} = themer; 

  return (
    <>
    <ThemeContext.Provider value={themex}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            {/* <Sidebar /> */}
            <main className="content">
              <Topbar />
            </main>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>

      
    {/* </ThemeProvider> */}
    
    
    {/* <ColorModeContext.Provider value={useMemo(
        () => ({
          toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
      )}>
      <ThemeProvider theme={useMemo(() => createTheme(themeSettings(mode)), [mode])} >
        <div className="app">
          Hello
          <Sidebar isSidebar={true} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> */}


    {/* <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={partialTheme} >
        <div className="app">
          Hello
          <Sidebar isSidebar={true} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> */}


    {/* <Grid style={{padding: '1em'}}>
      <Grid.Row>
        <NavBar/>
      </Grid.Row>
      <Grid.Row>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/dataManagement' element={<DataManagement />}/>
            <Route path='/dataManagement/buyers' element={<BuyerManager />}/>
            <Route path='/dataManagement/exhibitors' element={<ExhibitorManager />}/>
            <Route path='/dataManagement/transactions' element={<TransactionManager />}/>
            <Route path='/transactionGUI' element={<TransactionGUI />}/>
            <Route path='/liveSaleDisplay' element={<LiveSaleDisplay />}/>
            <Route path='/saleScrollDisplay' element={<SaleScrollDisplay />}/>
            <Route path='/addonGUI' element={<AddonGUI />}/>
            <Route path='/addonDisplay' element={<AddonDisplay />}/>
          </Routes>
      </Grid.Row>
    </Grid>       */}
    </>
  );
})

