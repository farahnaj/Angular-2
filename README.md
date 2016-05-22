# Angular JS 2 Pipes
Example Code

### 1. How to use code?
  - Download files/folder.
  - Clone repository.

### 2. How to run code?
  After fetching code, run "npm install" in folder where we have package.json.
  It will create node_modeules folder with libarary scripts.
  Check all script path with index.html.
  Run "npm start", It will open app in brwoser.

### 3. What will be the result?
  You will get index page with greeting text, range input for slice pipe as well as table with students details.

### 4. UI :
  - "AngularJS Sample Application" : Using simple h1 tag.
  - "Hello Friends!!!"" : Using component variable.
  - "behold the majesty of your page title" : Displyed in title case using custom pipe titleCase.
  - Range selector : To limit number of rows in table using slice pipe.
  - Table : Displays student's details with applied built in pipes like uppercase, date, number, currency and loswrcase1 custom pipe.

### 5. Code Content:
```sh
Angular2Pipe
   |- css
      |- styles.css 
   |- app
      |- component
         |- app.component.js
      |- pipe
         |- lowercase1.pipe.js
         |- titlecase.pipe.js      
      |- service
         |- student.service.js
      |- template
         |- app.component.html
      |- main.js
   |- index.html
   |- package.json
   |- README.md
   ```
