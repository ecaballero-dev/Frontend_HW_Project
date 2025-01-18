# Casetext Homework Assignment
Your task in this challenge is to build a demo web app that is a functional ATM machine. Please use a stubbed backend as if you were interacting with a server (ie reading from a file or local storage). Feel free to add any bells and whistles you’d like.

## How to Use:

- **Run** `npm install` in project's folder
- **Run** `npm run dev`
- Enter http://localhost:5173/ in browser (preferably Google Chrome)
- All data is being stored in Local Storage, once the user inputs a PIN (4 digit), it will randomly select a **Name**, **Card Brand** and a **Balance**
- The user will see the **Welcome** screen with the **name** and the **card brand** selected on top of the screen
- Once the user selects **Balance**, **Withdraw** or **Deposit**, the funds will appear on screen and depending on the amount the user will be able to **withdraw an specific amount or not**
- If the user **doesn't have enough funds a red alert will appear**

## Guidelines:
- Please work in React, using Javascript or Typescript, and utilize any additional frameworks or libraries as needed.
- Incorporate state management effectively in your application.
- Utilize React hooks for managing state and side effects.
- Match the provided mocks as closely as possible.
- Please use provided assets.
- A user should be able to check their balance, withdraw funds, and deposit funds after entering their PIN at a minimum.
- Funds should be correctly reflected after a deposit or withdrawal.
- A user's card type should be highlighted once they have entered their correct PIN.
- Please put your code up on your GitHub account.
- Please include instructions about how we can run your app. (If your solution works better in one browser over the others, let us know which one.)

## Optional:
- While a backend is not required for this assignment, if you feel like it will help you, please create one. You may consider setting up a NodeJS backend server with Express to handle all transactions on the server.

## Mocks:
![Mock 1](assets/Mock_1.png "Mock")
![Mock 2](assets/Mock_2.png "Mock2")
