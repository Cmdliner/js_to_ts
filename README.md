# A typescript / javascript comparison 
- Ok, now that you've seen types its easier to get type-crazy, applying types to everything you see
or crafting unneccesarily complex types (just because you can)

- I was a bit biased in my previous example as I was just adding types to any var i declare.

- Sometimes, you don't need to explicitly declare the type of the variables as the typescript compiler can infer it directly. (Most especially with simple const variable types)

- We'll also dive into configuring the typescript compiler to a degree using a tsconfig file.

- In most cases your typescript file needs to be built back to javascript for it to be any useful.
that's why we have the typescritp compiler to build your typescript into javascript (transpilation)

- Usually our source typescript code lives in a `src` folder and the transpiled javascript lives in a separate folder like `dist` or `build` this can be configure in the tsconfig file:

- to create a tsconfig file you can start by running this
```sh
tsc --init
```

- After that you canfind the `rootDir` and `outDir` keys in the `compilerOptions` object and set them to the directory where you write your typescript source code and your build folder respectively


- Here i have set them to `src/` and `dist` respectively


## Problem
We are implementing an algorithm to get the no of times a particular token appears in a string 
(Here we are reading from a sample file)


## Run the program by using the command
```sh
npm run dev
```