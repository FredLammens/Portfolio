# Coding guidelines

This document will change over time. Keeping it versioned in the monorepo allows us to track changes over time.
It is also closely located to the code, making it easy accessible by the developers.

## Table of contents:

- [General note](#general-note)
- [Connect labels with inputs](#connect-labels-with-inputs)
- [Method and property ordering](#method-and-property-ordering)
- [Modifiers / Annotations / Decorators / Readonly usage](#modifiers--annotations--decorators--readonly-usage)
- [Function / method return type](#function--method-return-type)
- [Typing const lambda functions](#typing-const-lambda-functions)
- [Component selector specificity](#component-selector-specificity)
- [Output / EventEmitter naming](#output--eventemitter-naming)
- [Naming private variables, observables and (\*)subjects](#naming-private-variables-observables-and-subjects)
- [Correct usage of `ChangeDetectionStrategy.OnPush`](#correct-usage-of-changedetectionstrategyonpush)
- [Avoiding the use of getters in component public interfaces](#avoiding-the-use-of-getters-in-component-public-interfaces)
- [No import of `BrowserModule` or `BrowserAnimationModule` in libraries](#no-import-of-browsermodule-or-browseranimationmodule-in-libraries)
- [Usage of `_` parameter](#usage-of-_-parameter)

## General note

Many of these guidelines are baked into rules that are enforced on the monorepo using eslint and other QA tools.
When you are developing it is advised that you fix the warnings you see from those tools about the files you've touched while coding.

Using this approach we will gradually fix all the warnings over the entire codebase.

Not all rules are enforced by failing the build, some are deliberatly outputting warnings to not
block the development. Those warnings should be addressed at some point,
so please try not to ignore them, and fix them whenever you can.

## Connect labels with inputs

It is a general good practice to connect labels with their related input, textareas, selects and other form fields.

Always try to prefix the context of the component where you are connecting the label and the input field.
For example; different forms on one page can have similar named fields.
In the example below this is the `login-form` as the prefix on the `id` value.

If input fields are part of an iteration, like for example an `*ngFor`, the `id`s should receive an index.
The main reason for this is that id's should always be unique on an HTML page.

### Example

```html
<label for="login-form-email">Email:</label> <input type="text" id="login-form-email" />
```

```html
<div *ngFor="let email of emails; let index = index">
  <label for="login-form-email-{{index}}">Email:</label>
  <input type="text" id="login-form-email-{{index}}" />
</div>
```

## Method and property ordering

Methods and properties should be ordered when defining a class implementation.
The following order is a good practice:

- static above non-static
- `public` above `protected` above `private` modifier
- `readonly` above `not readonly`
- properties over `constructor` over methods
- angular lifecycle methods above other public methods, below constructor

### Example

```ts
@Component({
  // ...
})
export class ExampleComponent implements OnInit {
  // the properties are above the constructor

  // the static properties are above the other properties
  public static Name = 'ExampleComponent';

  // the public properties are above the private properties

  // the public readonly output is above the public not-readonly input property
  @Output() public readonly dataChange = new EventEmitter<Array<string>>();
  @Input() public data: Array<string>;

  //the private readonly property is above the private not-readonly property
  private readonly configuration: string;
  private currentData: Array<string>;

  // the constructor is above the methods
  constructor() {
    // ..
  }

  // the methods are last
  // the public methods are above the protected and private methods

  // the ngOnInit lifecycle method is above the other public methods
  public ngOnInit(): void {}

  public addData(): void {}

  // the protected methods are above the private methods
  protected deleteData(): void {
    // ..
  }

  private changeConfiguration(): void {}
}
```

### Related eslint rules

- member-ordering - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md

## Modifiers / Annotations / Decorators / Readonly usage

- Always explictly write the modifier, don't rely on implicit modifiers
  - Angular lifecycle methods also explicit `public`
- Be careful with modifiers in the constructor
  - Adding a modifier (public, private, protected, readonly) will expose the argument of the constructor on the instance of the class ( `this.constructorArgument`)
  - You don't necessarily always want to do that
- `@Input()` / `Output()` / .. before the property on the same line

### Example

Consider the following class / component / service. The comments show / highlight the rules.

```ts
@Component({
  // ...
})
export class ExampleComponent implements OnInit {
  public static Name = 'ExampleComponent';

  // defining the output property readonly guards us from reinstantiating the EventEmitter
  // in the component instance itself
  @Output() public readonly dataChanged = new EventEmitter<Array<string>>();

  // defining the input property public allows us to use the value directly in the template
  @Input() public data: Array<string>;

  // we can define readonly on a property, but still assign it in the constructor
  private readonly configuration: string;
  private currentData: Array<string>;

  // even getters can be made private or public
  // but be careful with the usage of getters in templates
  // ( see dedicated section: "Avoiding the use of getters in component public interfaces" )
  private get config(): string {
    return this.configuration;
  }

  // adding a modifier to an argument exposes it on the instance
  constructor(
    private readonly exampleService: ExampleService,
    // don't add a modifier, as it will expose it on the instance
    // in this case it's only used here, locally in the constructor
    configurationService: ConfigurationService,
  ) {
    this.configuration = configurationService.generateConfiguration();
  }

  // Angular lifecycle method, right after constructor
  // explicit public modifier and void return type
  public ngOnInit(): void {
    // do something
  }

  // Explicitly mention the void return type as this defines the interface
  // This guards against returning a value by accident and potentially relying on it
  // See rule below
  public addData(): void {
    // ..
  }

  private changeConfiguration(): void {
    // ..
  }

  // linter will complain that protected method should be before private method / after public
  // besides that we favor composition over inheritance so the use of protected modifier
  // should be rare ( see dedicated section about favoring composition over inheritance )
  protected deleteData(): void {
    // ..
  }
}
```

### Related eslint rules

## Function / method return type

Always explicitly mention the return type of a method or (arrow) function.
If nothing is returned, explicitly mention `void`.

Explicitly mentioning the return type on a function guards you from returning the wrong type
if you already know the interface/contract up-front. When implementing a function of which you know
the result should be of type `number`, by not explicitly defining the `number` type as return type, you could still return a `string` without any warning or what so ever.

As a consequence, thez implementations / developers using that function will wrongly use the implicit/inferred `string` return type from the return statement.

### Example

```ts
// arrow function
const addTwoNumbers = (one: nunber, two: number): number {
  return one + two;
}

// function
function addTwoNumbers(one: number, two: number): number {
  return one + two;
}

class MyService {
  public addTwoNumbers(one: number, two: number): number {
    return one + two;
  }

  private doesSomethingInternally(): void {

  }
}
```

### Related eslint rules

// TODO

## Typing const lambda functions

Wherever we write a const lamba function, we should type the parameters of the function.
This does not necessarily apply on local/anonymous arrow functions.

### Examples

```ts
// wrong
const myFunction = (param): string => {
  // do something with param
};

// right
const myFunction = (param: string): string => {
  // do something iwht param
};
```

This does not apply to arrow functions like this:

```
// type infered from myObs$ or previous pipeable operator
myObs$.pipe(
   map(e => e.prop)
)
// or ( but the first is better )
myObs$.pipe(
   map((e) => e.prop)
)
// or ( type inferred from users array )
const userNames = users.map(user => user.name)
```

### Related eslint rules

// TODO

## Output / EventEmitter naming

EventEmitters should follow a correct naming pattern.
The imperative present tense should be used over the past tense.

### Example

- `eventChange` should be used over `eventChanged`.
- `selectPatient` should be used over `selectedPatient` or `patientSelect`

The general naming convention should be the one that sounds the most logical.

```ts
@Component({
  // ...
})
class MyInputComponent {
  @Output() public readonly selectValue = new EventEmitter<string>();
  @Output() public readonly eventChange = new EventEmitter<string>();
}
```

The functions that are coupled to those EventEmitters can follow the same pattern.

```ts
@Component({
  template: `<aja-uds-dropdown type="user" 
  (selectValue)="selectUser($event)"
  (eventChange)="handleEventChange($event)>
</aja-uds-dropdown>`,
})
class MyComponent {
  public selectUser(user: string): void {
    // ..
  }
  public handleEventChange($event: string): void {
    // ..
  }
}
```

### Related eslint rules

// TODO

## Component selector specificity

The rule is that we properly configure the correct and expected component selector prefixes.
This can be done in the `angular.json` per library or application, for use with the generator of the Angular CLI.
Defining it in the eslint rules of a specific library we can check for the correct appliances.

### Example

- `aja-f-uds-input` => denotes a `frontend` `ui-design-system` `input` component that is ready for production usage
- `aja-pg-ui-input` => denotes a `playground` `ui-design-system` `input` component which is currently in a playground / not stable for production usage state

### Related eslint rules

// TODO

## Clean code basic rules

```
// todo
```

- no ternary operator use if it can't be written on one line
- always surround if statement with curly braces
- ...

WIP: this needs more work

### Ternary operator

The usage of the ternary operator is limited. It can only be used if it fits in is whole on one line only.

```ts
// readable & allowed
const result = isPostive ? 1 : -1;

// less readable, not allowed
const users$ = isScullyGenerated()
  ? this.transferStateService.getState<Users>(usersStateKey)
  : this.httpClient
      .get<Users>('/assets/users.json')
      .pipe(tap((users) => this.transferStateService.setState<Users>(usersStateKey, users)));
```

## Typedef

These are general recommendations about adding types to the code:

We don't specify the return type here as it would become unreadable

```ts
// This is good:
export const getGreeting = () => cy.get('h1');

// Because the following is unreadable, unnecessary long/complex
import Chainable = Cypress.Chainable;
export const getGreeting: Function = (): Chainable<JQuery<HTMLHeadingElement>> => cy.get('h1');
```

In this example we do it, because it adds more security and stricter type checking
to our code. See the related [Function / method return type](#function--method-return-type) chapter

```ts
// The recommendation here is to define the return type of the arrow function
export const calculateSum = (one: number, two: number): number => {
  // makes the implementation fail
  return 'one + two';
};

// The type of `const sum` is correctly inferred
// from the explicit arrow function return type
// But extra typing to the assigned variable can be provided
// to make its declaration even more strict
const sum: number = calculateSum(10, 20);
```

## Naming private variables, observables and (\*)subjects

// TODO: needs a review

Variables / properties on a class can be of different types. We would like
to follow a naming pattern that will allow a developer to quickly identify the
specific nature of a property or variable.

To facilitate that, we like to distinguish between:

- **`observable$`**, that have a `$` dollar suffix
- **`(*)subject$$`**, that have a double `$$` dollar suffix
- **`private _variable`**, that have an `_` underscore prefix

The underscore prefix for private variables does not necessarily originate from having a clear visual distinction between a private and public variable.
A decent IDE should be able to handle that for you.

It has more to do with using a setter with the same name, that can have side effects (on the value to set), but where we still want to keep a local state of the value used by the setter.
This includes for example additional, future processing of other logic in the class.

There are some rules to follow tough, as using / keeping a local copy of that value might not always be required.:

1. We can use (a combination of) observable(s) if combined logic of different setters results in particular state or is used as a seperate property on the instance of the class.
1. Only if the original value of the setter will be used by other logic in the class, that needs imperative access to that value, we keep a private shadow variable with the underscore prefix. **If this is the case, a peer review is required from other developers to make sure it is the best approach possible.**

### Example:

The follow code block highlights the possible usages of the described rules above:

```ts
@Component({
  template: `{{ combinedColorMaterial$ | async }}`,
})
export class MyComponent {
  public readonly combinedColorMaterial$: Observable<string>;

  private readonly color$$ = new Subject<string>();
  // private readonly color$ = this.color$$.asObservable();
  // private _color: string;
  @Input() set color(color: string) {
    this.color$$.next(color);
    // this._color = color;
  }

  private readonly material$$ = new Subject<string>();
  // private readonly material$ = this.material$$.asObservable();
  // private _material: string;
  @Input() set material(material: string) {
    this.material$$.next(material);
    // this._material = material;
  }

  constructor() {
    this.combinedColorMaterial$ = combineLatest([this.color$$, this.material$$]).pipe(
      map(([color, material]) => `${color}${material}`),
    );
  }
}
```

## Correct usage of `ChangeDetectionStrategy.OnPush`

**WIP: To revisit**

The current configuration of tslint will issue a warning if you don't use the `OnPush` strategy for the `ChangeDetection` on your components.
This is the default rule as it will optimize the performance of our application, but it issues only a warning if you remove it because it might not always be the best approach possible in some particular scenarios.

While the `OnPush` strategy could give us performance improvements. It could be dangerous to use it in the wrong places.
This strategy will block changedetection every time unless:

- The changedetection is triggered from within the component itself
- The component has inputs that are receiving **new references**

This means that we can only use it when one of the 2 conditions above are met.

When to use it:

- When you have a typical dumb component that works on fully immutable state.
- When there is no dynamic part in the component at all (e.g. a pure representational component that does not change)

When to be careful:

- We should always be careful and reason about every component separately

When to not use it:

- Application root component
- Any other container component
- When the component fetches data (but that functionality should be encapsulated in containers)
- Form components, since they rely on prototyped objects that are not immutable (FormGroup, FormControl)

### Suppressing the tslint warning

**WIP: To revisit, tslint to eslint**
Update example

If you are convinced that you should not use the `ChangeDetectionStrategy.OnPush` on your component you should suppress the tslint warning:

```ts
// tslint:disable-next-line: prefer-on-push-component-change-detection
@Component({
  // ..
})
export class RootComponent {
  // ..
}
```

## trackBy

One of the moest important performance optimisations is the use of trackBy in `*ngFor` directives.
Be sure to always use this when possible

## Avoiding the use of getters in component public interfaces

For example:

```ts
@Component({
  // ...
})
export class ExampleComponent implements OnInit {
  private readonly configuration: string;

  // a getter is a function, so not ideal for CD / performance when used in the view
  // can still be used without issues in the typescript itself..
  // implicit public property / getter defined after private property: linter will complain
  // linter should fail on an implicit public modifier
  get config(): string {
    return this.configuration;
  }

  constructor(readonly configurationService: ConfigurationService) {
    this.configuration = configurationService.generateConfiguration();
  }
}
```

TODO: Add example alternative to not using getter functions in templates

More information about the why can be found here:
https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496

Summary:

> Function calls in expression can cause serious performance issues that may go unnoticed and cause your application to become slow, even with ChangeDetectionStrategy.OnPush enabled.

## Empty methods / unused variables or properties

Always remove empty methods and unused variables.
We don't want that code to be lingering around. This includes empty constructors, empty Angular lifecycles methods, etc.

When removing an empty Angular lifecycle method, for example `ngOnChanges` you will also need to remove the related `implements OnInit` on the class definition and the relevant import.

Related tslint rules:

- https://palantir.github.io/tslint/rules/no-empty/
- https://palantir.github.io/tslint/rules/no-unused-variable/ (DEPRECATED)

Related tsconfig compiler options:

- `--noUnusedParameters`
- `--noUnusedLocals`

## no-unused-expression tslint rule exception

To avoid 'no-unused-expressions' linting violations triggered on chai assertions that are not in a function form, tslint rule "no-unused-expression" has been replaced with "no-unused-expression-chai"

Example:

```ts
expect(myRequest.body).not.to.be.empty;
```

will not trigger anymore linter warnings.

## No import of `BrowserModule` or `BrowserAnimationModule` in libraries

Be careful not to import `BrowserModule` or `BrowserAnimationModule` in libraries as this is the responsibility of the application.
If you need Browser functionality in the library, like `*ngIf` or `*ngFor`, use `CommonModule`.
If you want animations, the import `BrowserAnimationModule` should be part of the including application, or storybook setup.

If you don't follow this recommendation or requirement, you might start seeing errors in console like:

```
Error: BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.
```

## Usage of `_` parameter

The `_` parameter can be used if we have a parameter in a list of parameters that is not used.
TypeScript and related linters will not complain if we define this parameter name and still not use it in the function body.

But it is only useful if we have other but used parameters after the unused parameter, because in the other case we could just omit the parameter.

### Examples

If the unused parameter is not followed by another params, we can just omit it:

```ts
// wrong
const test = (unused: any) => {
  // processed code
};
// better
const test = (_: any) => {
  // processed code
};
// best
const test = () => {
  // processed code
};
```

If the unused parameter is followed by other params, like for example in the case of predefined callback interfaces, we name it with `_`:

```ts
// wrong
app.register(require('fastify-cors'), {
  origin: (origin: string, cb: any) => {
    cb(null, true);
    return;
  },
});

// good
app.register(require('fastify-cors'), {
  origin: (_: string, cb: any) => {
    cb(null, true);
    return;
  },
});
```

## TODO

- Revisit tslint rules to eslint rules
- Display block by default
- Favor composition over inheritance
- Component selector specificity
- Extend clean code basic rules
- Add example alternative to not using getter functions in templates
- Add other missing examples
