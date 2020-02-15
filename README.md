Agular Application Development

1. Forms
   1. Template Forms
      1. @angular/forms
         1. <form></form> maps with ngForm internally
   2. Reactive Forms aka Data-Driven Forms aka Model-Driven Forms
      1. @angular/forms
         1. ReactiveFormsModule 
            1. FormGroup, create a Group of FormControls (aka editable elemnts )
               1. FormGroup is bound to [formGroup] property of <form> tag
               2. FormGroup, defines collection of Model class public properties 
                  1. FormControlsCollection
               3. Each editable element in <form></form> is known as 'FormControl'
                  1. FormControl is bound to editable element using
                     1. formControlName attribute
               4. The (ngSubmit) event is used to post the FormGroup data 
            2. Use the 'name' attribute for each editable element (input, select)
   3. Data Validations
      1. Standard Validations
      2. Custom Validations
2. Services
3. Component Communication
4. Routing
5. Directives
   1. Three (3) typef of Directives
   2. Component Directive
      1. Every component is directive
   3. Structural Directive
      1. Used to add/remove DOM elements based on condition
      2. *ngFor, executes a loop over a collection to generate DOM elements
      3. *ngIf, execute an if condition to add/remove DOM element
      4. *ngSwitch--*ngSwitchCase
   4. Attribute Directives
      1. Used to change behavior of DOM elements based on attribute
         1. ngModel
