## 1. Introduction to React
### 1.1 - Hi, my name is React

**SPA (Single Page Application):**
- Web app/site that dynamically rewrites the current page rather than loading new pages from the server.
    
**MVC (Model View Controller):**
- A software design pattern used for developing UI's by separating logic into different parts (Model, View, and Controller)

**JSX:**
- Syntax to build components in React, which allows for mixing of HTML and JavaScript.

| Item | Action | Item |
|---:|:---:|:---|
| Controller | maipulates | Model | 
| Model | updates | View |
| User | uses | Controller |
| View | sees | User |

--------

| Exercises | (Have Read) |
| :---: | :---: |
| [Article 1](https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/) | True |
| [Article 2](https://www.robinwieruch.de/essential-react-libraries-framework/) | True |
| [Article 3](https://www.robinwieruch.de/how-to-learn-framework/) | True |

--------

### 1.2 - Requirements

| Type | Choice | Installed |
| --- | --- | --- |
| Editor | VSC | Latest |
| Terminal | VSC Terminal | Latest |
| Node | Node.js | v12.13.1 |
| npm | npm | 6.12.1 |

| npm input | result |
| --- | --- |
| `install -g <package>` | (`-g` = globally) |
| `install react` | Install the react module for node |
| `init -y` | (`-y` = init defaults) initialize the node_modules folder |
| `install --save-dev <package>` | indicate only to use package in dev environment, not deployment |
    
--------

| Exercises | (Have Done) |
| :---: | :---: |
| Create new Folder (`mkdir`) | True |
| Navigate to folder (`cd`) | True |
| Exec `npm init`/`npm init -y` | True |
| Install react (`npm i react`) | True |
| Check `package.json` & `node_modules/` | True |
| uninstall/reinstall `react` package | True |
| Read about [npm](https://docs.npmjs.com/) | True |
| Read about [yarn](https://yarnpkg.com/en/docs/) | True |

(Exercise results located in `/ex_1.2/`)

--------

### 1.3 - Installation

**CDN:**
- Content Delivery Network
- Used to host files publicly for consumers, such as libraries

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Read about [react installation](https://reactjs.org/docs/getting-started.html) | True |

--------
  
### 1.4 - Zero-Configuration Setup

| Todo | (Have Done) |
| :---: | :---: |
| `npm i -g create-react-app` | Done |
| `create-react-app --version` | 3.3.0 |
| `create-react-app <name>` | "zero_config" |
| `cd <name>` | Done |

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Confirm source code for (`zero_config`) | True |
| Exec `npm start` | True |
| Exec `npm test` | True |
| Exec `npm run build` | True |
| Read about [create-react-app](https://github.com/facebookincubator/create-react-app) | True |

(Exercise results located in `/ex_1.4/`)

--------
  
### 1.5 - Introduction to JSX

| Todo | (Have Done) |
| :---: | :---: |
| remove all excess HTML in `src/App.js` | Done |
| define `helloWorld` variable | Done |
| Exec `npm start` | Done |

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Confirm source code for (`zero_config`) | Done |
| Define more variables for `src/App.js` | Done |
| Read about [JSX](https://reactjs.org/docs/introducing-jsx.html) | Done |
| Read about [React Components](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html) | Done |

--------
  
### 1.6 - ES6 const and let

**const**
- Can not be re-assigned, re-declared, changed, or modified after declaration.
- const array/object values Can be updated through indirect means

**let**
- Can be re-assigned, modified, etc after declaration

--------

| Exercises | (Have Done) |
| :---: | :---: |
| use `const` and `let` declaration in `src/App.js` | Done |
| Read about [ES6 const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) | Done |
| Read about [ES6 let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) | Done |

**Question:** Why do immutable data structures make sense in programming?
- Mutable type state updates change all references to that variable, but immutable objects references are always assigned to new objects.

**Question:** Why are immutable data structures embraced in React and its ecosystem?
- Immutability helps to remove the complexity of changing and updating variables constantly.

--------
  
### 1.7 - ReactDOM

**ReactDOM.render()**
- Uses a DOM node to replace HTML with JSX.
- Used to integrate React

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Check React hooks into HTML in `public/index.html` | Done |
| Read about [ReactDOM](https://reactjs.org/docs/rendering-elements.html) | Done |

--------
  
### 1.8 - Hot Module Replacement

`if (module.hot) {
    module.hot.accept();
}`

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Hot Module replacement in `src/App.js` | Done |
| Watch first 10 min of [Live React: HRWTT](https://www.youtube.com/watch?v=xsSnOQynTHs) | Done |

--------
  
### 1.9 - Complex JavaScript in JSX

**list.map()**
- Iterate over a list of items to display them according to specific attributes.

--------

| Exercises | (Have Done) |
| :---: | :---: |
| Mapping exercises in `src/App.js` | Done |
| Recap on [Article 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/) | Done |
| Recap on [Article 2](https://www.robinwieruch.de/javascript-map-array/) | Done |
| Use more JavaScript expressions in my JSX | Done |

--------
  
### 1.10 - ES6 Arrow Functions

--------

--------
  
### 1.11 - ES6 Classes

--------

--------
