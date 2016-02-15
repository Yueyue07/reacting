# AngularJS
AngularJS initially released in 2009 by google. Right now, Angular is updated to version 2.0.
AngularJS lets us create dynamic application by extending HTMl attributes.  

# React



# Comparison between AngularJS and React

## Example 1

![Alt text](/screen_shots/example1.png?raw=true "Optional Title" {width=40px height=40px})

### AngularJS

```js
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>

```
