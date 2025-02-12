# Flower Shop (Frontend)

## Overview

This repository contains the frontend of our E-Commerce Reference Application, designed to guide our partner customers in integrating their eCommerce systems with our hosted payment pages. The application is built using **ReactJS, TypeScript, and NodeJS**.

This frontend connects to a backend service, which is available in a separate GitHub repository. For full functionality, ensure you have the backend set up and running. Refer to the backend repository for setup instructions.

## Prerequisites

Before setting up the project, ensure that you have the following installed on your machine:

### For macOS and Windows:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/)
- TypeScript (installed via npm install, but can be installed globally with npm install -g typescript if needed)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/exact-payments/flower-shop.git
cd flower-shop
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Application
```sh
npm start
```
This will start the development server, and the application will be available at `http://localhost:3000`.

## Backend Service
This frontend application interacts with a backend service that handles business logic and payment processing. Make sure you also set up the backend by following the instructions in its respective GitHub repository:

[Backend Repository](https://github.com/exact-payments/flower-shop-server.git)

## Additional Notes
- Ensure that your backend service is running before testing the frontend.
- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then reinstall:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- Contributions and improvements are welcome! Open a pull request or issue if you find bugs or have feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

