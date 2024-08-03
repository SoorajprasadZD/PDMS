# Patient Record Blockchain Project

This is a blockchain-based project for storing patient records securely using Ethereum smart contracts. The project involves four types of users: admin, hospital, insurance company, and patient. The admin user has the authority to create hospitals and insurance companies, while hospitals can create patients, add patient records, and assign patients to other hospitals or insurance companies. Insurance companies can view the details of patients shared with them, and patients can access their own profile and see which hospitals and insurance companies have access to their data.

## Features

- Admin functionality:
  - Create hospitals and insurance companies
- Hospital functionality:
  - Create patients
  - Add patient records
  - Assign patients to other hospitals or insurance companies
- Insurance company functionality:
  - View patient details shared with them
- Patient functionality:
  - Access their profile
  - See which hospitals and insurance companies have access to their data

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm

## Installation

1. Clone the repository:

   ```console
   git clone https://github.com/adarshvs6665/patient_dms_ui
2. Navigate to the project directory:

   ```console
   cd patient_dms_ui
3. Install the dependencies:

   ```console
   npm install

## Usage

1. Start the development server:

   ```console
    npm start
This command will start the development server, and the application will be accessible at http://localhost:3000.

2. Open your web browser and visit http://localhost:3000 to access the application.

3. Use the provided user interfaces and functionality based on your user role (admin, hospital, insurance company, or patient) as described above.

# Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.