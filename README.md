# insights-edge
A blockchain-based platform delivering actionable insights to small businesses by analyzing trends and competitor data. Users earn crypto tokens for data contributions, fostering smarter decisions and growth.

##  1. Features  
- **Actionable Insights**: Aggregates and analyzes public data to provide personalized recommendations for small businesses.  
- **Token Rewards**: Users earn tokens for contributing or engaging with the platform.  
- **Secure and Transparent**: Built on blockchain for enhanced security and data integrity.  
- **Intuitive Interface**: A user-friendly interface built with React.js. 

## 2. Tools and Technologies  

### **1. Blockchain**
- **[Celo](https://celo.org/)**: For building the blockchain infrastructure and issuing platform tokens.  
- **[Solidity](https://soliditylang.org/)**: For developing smart contracts to handle tokenization and rewards.  

### **2. Backend**
- **[Go](https://go.dev/)**: For high-performance API development, ensuring efficient data aggregation and analysis.  

### **3. Frontend**
- **[React.js](https://react.dev/)**: For building an interactive and responsive user interface. 

# Setup Instructions  

### **1. Prerequisites**  
Ensure you have the following installed:  
- Node.js and npm/yarn  
- Go (1.19 or later)  
- Solidity compiler (via Remix or Hardhat)  
- Celo Wallet and CLI  

### **2. Clone the Repository**  
```bash
git clone https://github.com/ombima56/insights-edge.git
cd insights-edge
```

## 3. Backend Setup (Go)

### 1. Navigate to the backend folder:
```sh
cd backend
```

### 2. Install dependencies:
```sh
go mod tidy

```

### 3. Run the server:
```sh
go run main.go
```

## 4. Smart Contracts

### 1. Navigate to the contracts directory:
```sh
cd contracts
```

### 2. Compile and deploy contracts using Hardhat:
```sh
npx hardhat compile
npx hardhat run scripts/deploy.js --network celo
```

## 5. Frontend Setup (React.js)
### 1. Navigate to the frontend folder:

```sh
cd frontend
```
### 2. Install dependencies:

```sh
npm install
```
### 3. Start the development server:

```sh
npm start
```
## Usage
### 1. Access the Platform:
Open your browser and navigate to http://localhost:3000.
### 2. Connect Wallet:
Use the Celo Wallet to connect and interact with the platform.
### 3. Explore Insights:

-    Browse data-driven insights.
-    Earn tokens by contributing anonymized data or engaging with content.

### 4. View Tokens:
Check token balances and redeem or transfer tokens via the platform.

## Roadmap
### Phase 1: MVP Development

-    Build core backend services for data aggregation.
-    Develop and deploy tokenization smart contracts.
-    Create a basic React.js interface for users.

### Phase 2: Tokenized Rewards System

-    Implement smart contracts for reward distribution.
-    Integrate token balances and redemption features.

### Phase 3: Advanced Analytics

-    Add machine learning for predictive insights.
-    Expand data sources and visualization tools.

### Phase 4: Scaling and Refinement

-    Deploy on mainnet.
-    Optimize for scalability and performance.

## License

This project is licensed under [MIT](https://github.com/Adamur-Tribe/insights-edge/blob/main/LICENSE).

## Authors:
[John E. Odhiambo](https://github.com/johneliud)

[Vinolia Esao](https://github.com/Vinolia-E)

[Hillary Ombima](https://github.com/ombima56)
