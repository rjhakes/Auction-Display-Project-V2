m# Auction-Display-Project-V2

- [ ] Configurations

## Client
### Setup
* Install node v18.16.0
* Install npm v9.5.1
* cd ~/.../Auction-Display-Project-V2/Client
* npm install
### Run
* cd ~/.../Auction-Display-Project-V2/Client
* npm start
### Tasks
  - [ ] Login
  - [ ] Main page - authenticated state
    - [ ] event calendar
    - [ ] professional contact sheet 
    - [ ] fairgrounds info
    - [ ] software and git info
  - [ ] Main page - non-authenticated state
    - [ ] event calendar
    - [ ] fairgrounds info
    - [ ] services contact info
    - [ ] sponser info?
  - [ ] Navigation bar
    - [ ] Data Management
      - [x] Exhibitor
        - [x] <List> Add New Exhibitor
        - [x] Delete All Exhibitors
        - [x] Import .csv
        - [x] Export .csv
        - [x] Table
          - [x] <List> edit
          - [x] delete
      - [x] Buyer
        - [x] <List> Add New Buyer
        - [x] Delete All Buyers
        - [x] Import .csv
        - [x] Export .csv
        - [x] Table
          - [x] <List> edit
          - [x] delete
      - [x] Transaciton
        - [x] <List> Add New Transaction
        - [x] Delete All Transaction
        - [x] Import .csv
        - [x] Export .csv
        - [x] Table
          - [x] <List> edit
          - [x] delete
    - [ ] GUI Transaction
      - [ ] Sale Number
      - [ ] Buyer Bidder Number
      - [ ] Processor
      - [ ] Current Sale
      - [ ] Previous Sale
    - [ ] Current/Previous Sale Dispplay
    - [ ] Exhibitor History Display
    - [ ] Addon Display
    - [ ] Addon Transaction Table
  - [ ] Logout
## Server
### Setup
* Install [.NET 5.0+](https://dotnet.microsoft.com/download)
* create ~/.../Auction-Display-Project-V2/Service/API/appsettings.Development.json
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data source=auction.db"
  }
}
```
* create ~/.../Auction-Display-Project-V2/Service/API/appsettings.json
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```
### Run
* cd ~/.../Auction-Display-Project-V2/Server/API
* dotnet tool install --global dotnet-ef --version 5.0.1
* dotnet build
* dotnet run
### Tasks
  - [x] API
  - [x] BL
  - [x] DL
  - [x] DB
  - [x] Models
  - [ ] Tests
