## Getting the Project to Run:
- Download the project folder to your local machine.
- Run the following command from the terminal:
```sh
  npm install
```
- This will begin to install all of the necessary dependencies to have the project run. Once that process is done, run the following command to start the application locally:
```sh
  npm start
```
- The application will then open in the browser, hosted on port 3000.

## Further Library Considerations:
- There are two libraries that were utilized beyond just those directly associated with React and Redux. These two libraries were "reactstrap" and "react-bootstrap-table".
- The original styling library that was intended to be used in this project was "React Bootstrap," however due to some built-in stylings with the form components, "reactstrap" was used instead due to greater flexibility on those components. It is used primarily as a styling library, although it's functional improvements of certain standard components, such as form input, make it an ideal choice for further content implementation.
- For the table implementation, "react-bootstrap-table" was picked for similar reasons as "reactstrap": It is simple to integrate into the project, and has rich functionality that could be further implemented if need be.