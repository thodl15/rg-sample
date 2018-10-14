## Getting the Project to Run:
- Download the project folder to your local machine.
- Navigate to "/rg-sample/src/Quotes-SPA/Components/OptionActionsLogic.js" and add in the desired authentication key into the const variable "rg_auth" in order to have the data queries to the API pass authentication.
- Run the following command from the terminal:
```sh
  npm install
```
- This will begin to install all of the necessary dependencies to have the project run. Once that process is done, run the following command to start the application locally:
```sh
  npm start
```
- The application will then open in the browser, hosted on port 3000.

## Design Considerations:
- For the Component creation, each component was separated into three parts: Structural, Logical, and Store. By sub-diving into these three parts, the project now clearly delineates between how a given component is organized, how it looks to process dynamics sections of the application, and how that information is shared respectively. While it does increase the number of individual code files, the clarity gained from the separation more than makes up for the increased sidebar size.

## Further Library Considerations:
- There are two libraries that were utilized beyond just those directly associated with React and Redux. These two libraries were "reactstrap" and "react-bootstrap-table".
- The original styling library that was intended to be used in this project was "React Bootstrap," however due to some built-in stylings with the form components, "reactstrap" was used instead due to greater flexibility on those components. It is used primarily as a styling library, although it's functional improvements of certain standard components, such as form input, make it an ideal choice for further content implementation.
- For the table implementation, "react-bootstrap-table" was picked for similar reasons as "reactstrap": It is simple to integrate into the project, and has rich functionality that could be further implemented if need be.

## Future Improvements
- If this project was to be used as the basis of work going beyond this submission, the following improvements are where I would start work: First, consolidating the application constants into a single file that is referenced as needed, such as a .env file with dev and prod variants. Second, improving the display of table values across the board, most likely doing manipulations client-side in order to have them fit the screen more effectively. Third, I would look to add in visual cues for the end-user when they enter data to ensure they know exactly when a value is valid/invalid, and when a request is being submitted. 