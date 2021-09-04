
# Notice Board
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0. <br/>
Notice Board is a Platform that Shares Daily Activities & Updates to Students. 



# User
Admin - Can Read, Update, Add, Delete, Filter Notes. <br>
Use this cred to login
```bash
{
  username: 'admin_school',
  password: 'admin@123',
}
```

Student - Can Read, Filter Notes. <br>
Use this cred to login
```bash
{
  username: 'saurabh_patel',
  password: 'saurabh@123',
}
```



## Setting Up a Project

Use the npm package manager to install the required modules.

```bash
npm install --save
```
## Run The Application
Enter The Following Commands
```bash
ng serve - The app will be available `http://localhost:4200/`
json-server --watch db.json - The server will listen on port `http://localhost:3000/`
```


## Code scaffolding
```bash
ng generate component component-name` to generate a new component.
Examples ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Build

Run `ng build` to build the project. Use the `--prod` flag for a production build.

## Run Build Locally
```bash
npm install http-server - http-server is a simple, zero-configuration command-line http server
ng build - The build artifacts will be stored in the dist/ directory.
http-server dist/app - it will host your Build app to the browser
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
