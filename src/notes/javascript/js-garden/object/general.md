## Object Usage and Properties

Everything in JavaScript acts like an object, with the only two exceptions being
[`null`](#core.undefined) and [`undefined`](#core.undefined).

```js
false.toString(); // 'false'
[1, 2, 3].toString(); // '1,2,3'

function sayHello() {}
sayHello.count = 1;
sayHello.count; // 1
```

A common misconception is that number literals cannot be used as
objects. That is because a flaw in JavaScript's parser tries to parse the _dot
notation_ on a number as a floating point literal.

```javascript
    2.toString(); // raises SyntaxError
```

There are a couple of workarounds that can be used to make number literals act
as objects too.

```js
(2).toString(); // the second point is correctly recognized
(2).toString(); // note the space left of the dot
(2).toString(); // 2 is evaluated first
```

### Objects as a Data Type

Objects in JavaScript can also be used as [_Hashmaps_][1]; they mainly consist
of named properties mapping to values.

Using an object literal - `{}` notation - it is possible to create a
plain object. This new object [inherits](#object.prototype) from `Object.prototype` and
does not have [own properties](#object.hasownproperty) defined.

```javascript
var names = {}; // a new empty object

// a new object with a 'name' property with value 'Rob'
var rob = { name: "Rob" };
```

### Accessing Properties

The properties of an object can be accessed in two ways, via either the dot
notation or the square bracket notation.

```javascript
    var pet = {name: 'kitten'}
    pet.name; // kitten
    pet['name']; // kitten

    var get = 'name';
    pet[get]; // kitten

    pet.1234; // SyntaxError
    pet['1234']; // works
```

The notations work almost identically, with the only difference being that the
square bracket notation allows for dynamic setting of properties and
the use of property names that would otherwise lead to a syntax error.

### Deleting Properties

The only way to remove a property from an object is to use the `delete`
operator; setting the property to `undefined` or `null` only removes the
_value_ associated with the property, but not the _key_.

```javascript
var obj = {
	a: 1,
	b: 2,
	c: 3,
};
obj.a = undefined;
obj.b = null;
delete obj.c;

for (var i in obj) {
	if (obj.hasOwnProperty(i)) {
		console.log(i, "" + obj[i]);
	}
}
```

The above outputs both `a undefined` and `b null` - only `c` was
removed and is therefore missing from the output.

### Notation of Keys

```javascript
var test = {
	case: "I am a keyword, so I must be notated as a string",
	delete: "I am a keyword, so me too", // raises SyntaxError
};
```

Object properties can be both notated as plain characters and as strings. Due to
another mis-design in JavaScript's parser, the above will throw
a `SyntaxError` prior to ECMAScript 5.

This error arises from the fact that `delete` is a _keyword_; therefore, it must be
notated as a _string literal_ to ensure that it will be correctly interpreted by
older JavaScript engines.

[1]: http://en.wikipedia.org/wiki/Hashmap
