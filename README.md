## Quick Start & Documentation

Structuring NX Workspace:

1. create inside libs => a folder per project + seperate shared folder
2. inside this project folder you add new folder per route
3. inside this one you create libs with naming convention (feature,ui,data-access,utility)
   1. feature (smart component with injected services)
   2. ui (dumb components presentational)
   3. data-access (ngrx, services)
   4. utility (helper functions)
   5. [Unconventional]: added type lib naming convention for factories and models
4. always generate with `ng g @nrwl/angular:lib my-lib` and dont forget to add the appropriate tags
5. if multiple child components inside feature => create feature folder (grouping) with libraries inside to hold each smart component
   ex: libs/mobile/home/feature/src/lib/
6. tsconfig.base.json => paths are links to path you create
7. common practice to have library for application shell to hold routes and hold root levels , like store effects routermodule etc. [App.ts module file]

the library dependencies are configured with the tags in eslint.json in rules => depConstraints

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@fred/mylib`.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## ESLINT

https://www.youtube.com/watch?v=tEVNYmJ05Ew
Added custom Nx eslint rules (created with astexplorer.net)

https://www.freecodecamp.org/news/these-tools-will-help-you-write-clean-code-da4b5401f68e
on explanation on how to use and write eslint

#TODO:

1. add svg library and implement code-logo in navigation
2. change navigation component to shared one and remove constructor
3. fix linting before push (husky integration)
4. put mixin from navigation to mixins (fix it)

#Usefull sites:

1. https://nekocalc.com/px-to-rem-converter
2. https://css.glass/
