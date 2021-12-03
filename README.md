# Auction-Display-Project-V2

- [ ] Configurations

## Client
### Setup
* Install node v14.16
* Install npm v6.14
* cd ~/.../Auction-Display-Project-V2/Client
* npm install
### Run
* cd ~/.../Auction-Display-Project-V2/Client
* npm start
### Tasks
  - [ ] Login
  - [ ] Navigation bar
    - [ ] Data Management
      - [ ] Exhibitor
        - [ ] <List> Add New Exhibitor
        - [ ] Delete All Exhibitors
        - [ ] Import .csv
        - [ ] Export .csv
        - [ ] Table
          - [ ] <List> edit
          - [ ] delete
      - [ ] Buyer
        - [ ] <List> Add New Buyer
        - [ ] Delete All Buyers
        - [ ] Import .csv
        - [ ] Export .csv
        - [ ] Table
          - [ ] <List> edit
          - [ ] delete
      - [ ] Transaciton
        - [ ] <List> Add New Transaction
        - [ ] Delete All Transaction
        - [ ] Import .csv
        - [ ] Export .csv
        - [ ] Table
          - [ ] <List> edit
          - [ ] delete
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
