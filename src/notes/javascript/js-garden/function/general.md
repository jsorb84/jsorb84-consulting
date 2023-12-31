## Function Declarations and Expressions

Functions in JavaScript are first class objects. That means they can be
passed around like any other value. One common use of this feature is to pass
an _anonymous function_ as a callback to another, possibly an asynchronous function.

### The `function` Declaration

```javascript
function foo() {}
```

The above function gets [hoisted](#function.scopes) before the execution of the
program starts; thus, it is available _everywhere_ in the scope it was
_defined_, even if called before the actual definition in the source.

```javascript
foo(); // Works because foo was created before this code runs
function foo() {}
```

### The `function` Expression

```javascript
var foo = function () {};
```

This example assigns the unnamed and _anonymous_ function to the variable `foo`.

```javascript
foo; // 'undefined'
foo(); // this raises a TypeError
var foo = function () {};
```

Due to the fact that `var` is a declaration that hoists the variable name `foo`
before the actual execution of the code starts, `foo` is already declared when
the script gets executed.

But since assignments only happen at runtime, the value of `foo` will default
to [undefined](#core.undefined) before the corresponding code is executed.

### Named Function Expression

Another special case is the assignment of named functions.

```javascript
var foo = function bar() {
	bar(); // Works
};
bar(); // ReferenceError
```

Here, `bar` is not available in the outer scope, since the function only gets
assigned to `foo`; however, inside of `bar`, it is available. This is due to
how [name resolution](#function.scopes) in JavaScript works, the name of the
function is _always_ made available in the local scope of the function itself.
