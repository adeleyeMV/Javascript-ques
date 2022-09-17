#### 1. Promise Executor (#2)
```javascript
new Promise((resolve, reject) => {
  resolve(1)
  resolve(2)
  reject('error')
}).then((value) => {
  console.log(value)
}, (error) => {
  console.log('error')
})
```
<details><summary>Answer</summary>
<p>
<code>1</code>
<br />
<b>Reason-</b> When a promise gets settled (resolved or rejected) additional calls to resolve() or reject() will not have any effect.
</p>
</details>

------

#### 2. Equal III (#79)
```javascript
console.log(2.0 == "2" == new Boolean(true) == "1")
```
<details><summary>Answer</summary>
<p>
<code>true</code>
<br />
<b>Reason-</b> Since '==' attempts to convert and compare operands that are of different types and comparisons happen from Left to Right.
<pre>
2 == 2 == true == '1'
true == true == '1'
true == '1'
1 == 1
true
</pre>
</p>
</details>

------

#### 3. undefined (#69)
```javascript
function foo(a, b, undefined, undefined) {
  console.log('BFE.dev')
}
console.log(foo.length)
```
<details><summary>Answer</summary>
<p>
</b> <code>4</code>
<br />
<b>Reason-</b> A Function object's <code>length</code> property indicates how many arguments the function expects, i.e. the number of formal parameters. Hence it logs <code>4</code>.
<br />
Also, We have just called the <code>foo.length</code> not invoked the <code>foo</code>. So, <code>'BFE.dev'</code> will not be logged.
</p>
</details>

------

#### 4. let (#89)
```javascript
let a = 1;
(function() {
  let foo = () => a
  let a = 2;
  console.log(foo())
}())
```
<details><summary>Answer</summary>
<p>
<code> 2 </code>
<br />
<b>Reason-</b> <code>foo</code> will simply return value of <code>a</code> defined at that point. Since <code>foo</code> is invoked after a is assigned with <code>2</code> and locally a's value is 2. Hence, <code>2</code> is logged out .
</p>
</details>

------

#### 5. RegExp.prototype.test (#40)
```javascript
console.log(/^4\d\d$/.test('404'))
console.log(/^4\d\d$/.test(404))
console.log(/^4\d\d$/.test(['404']))
console.log(/^4\d\d$/.test([404]))
```
<details><summary>Answer</summary>
<p>
<pre>
true
true
true
true
</pre>
<b>Reason-</b> <code>/^4\d\d$/</code> says Start with 4, followed by a digit and end with a digit
<br />
Also, <code>test()</code> expects a string as input, against which to match the regular expression. So, if the input is not a string it simply converts the input to a string and then matches with regex.
</p>
</details>

------

#### 6. Implicit Coercion (#46)
```javascript
const foo = [0]
if (foo) {
  console.log(foo == true)
} else {
  console.log(foo == false)
}
```
<details><summary>Answer</summary>
<p>
<code>false</code>
<br />
<b>Reason-</b>
Since <code>if</code> takes boolean values so foo will converted to <code>true</code> (as array is truthy value)
<br />
Now come to if block. Here both values is converted into Number (due to <code>==</code>). so <code>1 == 0</code> ==> <code>false</code>
</p>
</details>

------

#### 7. Precedence (#34)
```javascript
let a = 1;  console.log(a +++ a)
let b = 1;  console.log(b + + + b)
let c = 1; console.log(c --- c)
let d = 1; console.log(d - - - d)
```
<details><summary>Answer</summary>
<p>
<pre>
3
2
1
0
</pre>
<b>Reason-</b> the catch is <code>(a +++ a)</code> is equivalent to <code>(a++ + a)</code>
<br />
And, <code>(a + + + a)</code> is equivalent to <code>(a + a)</code>
</p>
</details>

------

#### 8. Var (#39)
```javascript
function foo() {
  console.log(i)
  for (var i = 0; i < 3; i++) {
    console.log(i)
  }
}
foo()
```
<details><summary>Answer</summary>
<p>
<pre>
undefined
0
1
2
</pre>
<b>Reason-</b> In general, <code>var</code> can be hoisted before its initialization, hence got <code>undefined</code> in first console. Futher, <code>for</code> loop is normal 
</p>
</details>

------

#### 9. Function call (#44)
```javascript
function a() {
  console.log(1)
  return {
    a: function() {
      console.log(2)
      return a()
    }
  }
}
a().a()
```
<details><summary>Answer</summary>
<p>
<pre>
1
2
1
</pre>
<b>Reason-</b> First outer <code>a()</code> is called and printed <code>1</code> and returned object with another func a.
<br />
Calling <code>a().a()</code> invoked the returned Object method <code>a()</code> and that printed <code>2</code> and returned <code>a()</code> that printed <code>1</code>
</p>
</details>

------

#### 10. Operator Precedence (#13)
```javascript
console.log(0 == 1 == 2)
console.log(2 == 1 == 0)
console.log(0 < 1 < 2)
console.log(1 < 2 < 3)
console.log(2 > 1 > 0)
console.log(3 > 2 > 1)
```
<details><summary>Answer</summary>
<p>
<pre>
false   // (0 == 1)--- (false == 2)--- (0 == 2)--- false  
true    // (2 == 1)--- (false == 0)--- (0 == 0)--- true  
true    // (0 < 1)--- (true < 2)--- (1 < 2)--- true 
true    // (1 < 2)--- (true < 3)--- (1 < 3)--- true
true    // (2 > 1)--- (true > 0)--- (1 > 0)--- true 
false   // (3 > 2)--- (true > 1)--- (1 > 1)--- false 
</pre>
</p>
</details>

------

#### 11. in (#63)
```javascript
const obj = {
  foo: 'bar'
}
console.log('foo' in obj)
console.log(['foo'] in obj)
```
<details><summary>Answer</summary>
<pre>
console.log('foo' in obj);  // true
console.log(['foo'] in obj) // true - ['foo'] coerced to string
</pre>
</details>

------

#### 12. Prototype 2 (#53)
```javascript
function F() {
  this.foo = 'bar'
}
const f = new F()
console.log(f.prototype)
```
<details><summary>Answer</summary>
<p>
<code>undefined</code>
<br />
<b>Reason-</b> Only constructor functions have <code>.prototype</code>. So when a new object (<code>f</code> in our case) is created, it gets its internal [ [Prototype] ] which cannot be directly accessed. Hence result is <code>undefined</code>
</p>
</details>

------

#### 13. Two-way Generator (#71)
```javascript
function* gen() {
  yield 2 * (yield 100)
}
const generator = gen()
console.log(generator.next().value)
console.log(generator.next(1).value)
console.log(generator.next(1).value)
```
<details><summary>Answer</summary>
<pre>
generator.next().value   // 100: inner yield resolved first
generator.next(1).value  // 2: replaces (yield 100) with 1 & perfomed 2 * 1
generator.next(1).value  // undefined: gen status is done at this point
</pre>
</details>

------

#### 14. Push unshift (#37)
```javascript
const arr = [1,2]
arr.push(3,4)
arr.unshift(5,6)
console.log(arr)
```
<details><summary>Answer</summary>
<p>
<code>[5,6,1,2,3,4]</code>
<br />
<b>Reason-</b> <code>push()</code> adds 1 or more elements to the end & <code>unshift()</code> adds 1 or more elements to the beginning of an array
</p>
</details>

------

#### 15. Override Setter (#59)
```javascript
class A {
  val = 1
  get foo() {
    return this.val
  }
}
class B {
  val = 2
  set foo(val) {
    this.val = val
  }
}
const a = new A()
const b = new B()
console.log(a.foo)
console.log(b.foo)
b.foo = 3
console.log(b.val)
console.log(b.foo)
```
<details><summary>Answer</summary>
<pre>
1
undefined
3
undefined
</pre>
<p>Missing getter means we can never get the value of the prop even if we have a set for it</p>
</details>

------

#### 16. Array Length (#72)
```javascript
class MyArray extends Array {
  get length() {
    return 3
  }
}
const arr1 = new MyArray(10); console.log(arr1.length)
const arr2 = new Array(10); console.log(arr2.length)
```
<details><summary>Answer</summary>
<pre>
10
10
</pre>
<p>Subclasses (<code>MyArray</code>) cannot override parent class (<code>Array</code>) properties. This is by design.
</p>
</details>

------

#### 17. setTimeout III (#86)
```javascript
let func = () => {
  console.log(1)
}
setTimeout(() => {
  func = () => {
    console.log(2)
  }
}, 0)
setTimeout(func, 100)
```
<details><summary>Answer</summary>
<pre>
setTimeout(func, 100)  // 1 after 100ms
</pre>
<p>func is changed inside the first setimeout but since this is part of the callback it will not execute until the first setTimeout is invoked.</p>
</details>

------

#### 18. Hosting VI (#45)
```javascript
var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo)
})()
```
<details><summary>Answer</summary>
<pre>
(function () {
  // var foo;              // var declaration can be hoisted
  console.log(foo);        // undefined- as foo is unintialized till now
  foo = 2;
  console.log(window.foo); // 1- outer foo
  console.log(foo);        // 2- local foo
  var foo = 3;
  console.log(foo);        // 3- local foo
  console.log(window.foo)  // 1- outer foo
})()
</pre>
</details>

------

#### 19. Typed Array Length (#74)
```javascript
class MyArray extends Uint8Array {
  get length() {
    return 3
  }
}
const arr1 = new MyArray(10)
console.log(arr1.length)

const arr2 = new Uint8Array(10)
console.log(arr2.length)
```
<details><summary>Answer</summary>
<p>Here, we are extending from Uint8Array typed array that uses ArrayBuffer and in this case Subclass constructors may over-ride it to change the constructor assignment</p>
<pre>
console.log(arr1.length)  // 3
console.log(arr2.length)  // 10
</pre>
</details>

------

#### 20. comma (#66)
```javascript
var obj = {
  a: "BFE",
  b: "dev",
  func: (function foo(){ return this.a; }, function bar(){ return this.b; })
}
console.log(obj.func())
```
<details><summary>Answer</summary>
<code>'dev'</code>
<p>comma operator evaluates from left to right and returns the last(right most) operand</p>
</details>

------

#### 21. non-writable (#57)
```javascript
const a = {}
Object.defineProperty(a, 'foo1', {
  value: 1
})
const b = Object.create(a)
b.foo2 = 1

console.log(b.foo1)
console.log(b.foo2)

b.foo1 = 2
b.foo2 = 2

console.log(b.foo1)
console.log(b.foo2)
```
<details><summary>Answer</summary>
<p><code>Object.defineProperty()</code> takes 3 parameters: the target object, name of the property and descriptor. The <code>writable descriptor</code> describes if the value associated with the property can be changed with an assignment operator. Defaults to false.
</p>
<pre>
const b = Object.create(a)
b.foo2 = 1

console.log(b.foo1)  // 1
console.log(b.foo2)  // 1

b.foo1 = 2  // fails because it is non-writable property
b.foo2 = 2

console.log(b.foo1)  // 1
console.log(b.foo2)  // 2
</pre>
</details>

------

#### 22. Promise executor II (#18)
```javascript
const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => resolve(p1))
const p3 = Promise.resolve(p1)
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))
const p5 = p4.then(() => p4)

console.log(p1 == p2)
console.log(p1 == p3)
console.log(p3 == p4)
console.log(p4 == p5)
```
<details><summary>Answer</summary>
<p><code>Promise.resolve()</code> returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; otherwise, the returned promise will be fulfilled with the value.</p>
<pre>
const p1 = Promise.resolve(1)                                     // Object=> Promise { 1 }
const p2 = new Promise((resolve) => resolve(p1))                  // Object => Promise { <pending> }
const p3 = Promise.resolve(p1)                                    // Object => pointing to same object that p1 is pointing i.e. Promise { 1 }
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))   // Object => Promise { <pending> }
const p5 = p4.then(() => p4)                                      // Object => Promise { <pending> }

console.log(p1 == p2)   // false-- both are pointing to different object
console.log(p1 == p3)   // true -- both point to same object
console.log(p3 == p4)   // false-- both are pointing to different object
console.log(p4 == p5)   // false-- both are pointing to different object
</pre>
</details>

------

#### 23. Math (#31)
```javascript
console.log(1 / 0)
console.log(0 / 0)
console.log(-1 / 0)
console.log(1 / 0 * 0)
console.log(1 / 0 * 1)
console.log(1 / 0 * -1)
console.log(1 / 0 * 1 + 1 / 0 * 1)
console.log(1 / 0 * 1 - 1 / 0 * 1)
console.log(1 / 0 * 1 * (1 / 0 * 1))
console.log(1 / 0 * 1 / (1 / 0 * 1))
console.log(0 / Infinity)
console.log(0 * Infinity)
```
<details><summary>Answer</summary>
<pre>
(1 / 0)         // Infinity
(0 / 0)         // NaN
(-1 / 0)        // -Infinity
(1 / 0 * 0)     // NaN = Infinity * 0
(1 / 0 * 1)     // Infinity = Infinity * 1
(1 / 0 * -1)    // -Infinity = Infinity * -1
(1 / 0 * 1 + 1 / 0 * 1)     // Infinity = (Infinity * 1) + (Infinity * 1) 
(1 / 0 * 1 - 1 / 0 * 1)     // NaN = (Infinity * 1) - (Infinity * 1)
(1 / 0 * 1 * (1 / 0 * 1))   // Infinity = Infinity * 1 * (Infinity * 1)
(1 / 0 * 1 / (1 / 0 * 1))   // NaN = Infinity * 1 / (Infinity * 1)
(0 / Infinity)    // 0
(0 * Infinity)    // NaN
</pre>
</details>

------

#### 24. Prototype (#48)
```javascript
function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar)

Foo.prototype.bar = 2
const b = new Foo()
console.log(a.bar)
console.log(b.bar)

Foo.prototype = {bar: 3}
const c = new Foo()
console.log(a.bar)
console.log(b.bar)
console.log(c.bar)
```
<details><summary>Answer</summary>
<pre>
function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar)       // 1  

Foo.prototype.bar = 2
// Value of bar in Foo.prototype is updated

const b = new Foo()
console.log(a.bar)      // 2
console.log(b.bar)      // 2

Foo.prototype = {bar: 3}  // Foo.prototype starts pointing to a completly new object
const c = new Foo()

// proto property of a and b is still pointing to the object which was pointed by previous prototype of Foo. Thus a.bar & b.bar will print 2.
console.log(a.bar)      // 2
console.log(b.bar)      // 2
console.log(c.bar)      // 3
</pre>
</details>

------

#### 25. Hoisting II (#28)
```javascript
const func1 = () => console.log(1)
func1()

func2()
function func2() {
  console.log(2)
}

func3()
var func3 = function func4() {
  console.log(3)
}
```
<details><summary>Answer</summary>
<pre>
1
2
Error  
</pre>
</details>

------

#### 26. `this` II (#33)
```javascript
const obj = {
  a: 1,
  b() {
    return this.a
  }
}
console.log(obj.b())
console.log((true ? obj.b : a)())
console.log((true, obj.b)())
console.log((3, obj['b'])())
console.log((obj.b)())
console.log((obj.c = obj.b)())
```
<details><summary>Answer</summary>
<pre>
obj.b()               // 1 -- return reference
(true ? obj.b : a)()  // undefined  -- ternary operator returns value, which does not carry the info allowing to set this.
(true, obj.b)()       // undefined  -- comma operator returns value, which does not carry the info allowing to set this.
(3, obj['b'])()       // undefined  -- comma operator returns value, which does not carry the info allowing to set this.
(obj.b)()             // 1  -- returns reference
(obj.c = obj.b)()     // undefined  -- assignment operator returns value, which does not carry the info allowing to set this.
</pre>
<p></p>
</details>

------

#### 27. Largest Array index (#91)
```javascript
const arr = []
arr[(2 ** 32) - 2] = 1
arr[(2 ** 32) - 1] = 2
console.log(arr.at(-1))
```
<details><summary>Answer</summary>
<p>Check out about <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at'>Array.at()</a> and highest possible index is (2^32 - 2). Therefore, arr[(2 ** 32) - 1] = 2 can't be accessed due to exceeding array max length</p>
<pre>
console.log(arr.at(-1))  // 1
</pre>
</details>

------

#### 28. Meaningless Calculation (#75)
```javascript
const num = +((~~!+[])+(~~!+[])+[]+(~~!+[]))
console.log(num)
```
<details><summary>Answer</summary>
<pre>
+((~~!+[])+(~~!+[])+[]+(~~!+[]))
+( 1 + 1 + [] + 1 )
+( 2 + [] + 1)
+( '2' + '' + '1' ) 
+('21') = 21
</pre>
</details>

------

#### 29. Increment Operator (#7)
```javascript
let a = 1
const b = ++a
const c = a++

console.log(a)
console.log(b)
console.log(c)
```
<details><summary>Answer</summary>
<pre>
3
2
2
</pre>
</details>

------

#### 30. Equality & Sameness (#24)
```javascript
console.log(0 == '0')
console.log(0 === '0')
console.log(Object.is(0, '0'))

console.log(0 == 0)
console.log(0 === 0)
console.log(Object.is(0, 0))

console.log(0 == -0)
console.log(0 === -0)
console.log(Object.is(0, -0))

console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))

console.log(0 == false)
console.log(0 === false)
console.log(Object.is(0, false))
```
<details><summary>Answer</summary>
<p>Check out about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is">Object.is()</a> and <code>NaN</code> compares unequal to any other value, including itself</p>
<pre>
console.log(0 == '0')          // true
console.log(0 === '0')         // false
console.log(Object.is(0, '0')) // false

console.log(0 == 0)            // true
console.log(0 === 0)           // true 
console.log(Object.is(0, 0))   // true

console.log(0 == -0)           // true
console.log(0 === -0)          // true 
console.log(Object.is(0, -0))  // false

console.log(NaN == NaN)          // false
console.log(NaN === NaN)         // false
console.log(Object.is(NaN, NaN)) // true

console.log(0 == false)          // true
console.log(0 === false)         // false
console.log(Object.is(0, false)) // false
</pre>
</details>

------

#### 31. Block Scope (#5)
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}
```
<details><summary>Answer</summary>
<pre>
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)   // 5 5 5 5 5
}
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)   // 0 1 2 3 4
}
</pre>
<p>If we have any closures created in the loop, let variables will be bound to the value from only that iteration of the loop, whereas var variables will be the current value of the variable, which at that point of the settimeout it is 5</p>
</details>

------

#### 32. Equal II (#30)
```javascript
console.log([1] == 1)
console.log([1] == '1')
console.log(['1'] == '1')
console.log(['1'] == 1)
console.log([1] == ['1'])
console.log(new Boolean(true) == 1)
console.log(new Boolean(true) == new Boolean(true))
console.log(Boolean(true) == '1')
console.log(Boolean(false) == [0])
console.log(new Boolean(true) == '1')
console.log(new Boolean(false) == [0])
console.log(null == undefined)
```
<details><summary>Answer</summary>
<pre>
([1] == 1)              // true-- (1 == 1)
([1] == '1')            // true-- (1 == 1)
(['1'] == '1')          // true-- (1 == 1)
(['1'] == 1)            // true-- (1 == 1)
([1] == ['1'])            // false-- 2 different arrays
(new Boolean(true) == 1)  // true-- (1 == 1)
(new Boolean(true) == new Boolean(true))   // false-- 2 different objects 
(Boolean(true) == '1')       // true-- (true == '1')--(1 == 1)
(Boolean(false) == [0])      // true-- (false == [0])--(0 == 0)
(new Boolean(true) == '1')   // true-- (true == '1')--(1 == 1)
(new Boolean(false) == [0])  // false-- 2 different objects
(null == undefined)          // true
</pre>
</details>

------

#### 33. true or false (#26)
```javascript
console.log([] == 0)
console.log([] == false)
console.log(!![])
console.log([1] == 1)
console.log(!![1])
console.log(Boolean([]))
console.log(Boolean(new Boolean([])))
console.log(Boolean(new Boolean(false)))
```
<details><summary>Answer</summary>
<p>When types mismatch then JavaScript tries to coerce the right-side value to match the type of the left-side</p>
<pre>
([] == 0)        // true-- (0 == 0)
([] == false)    // true-- (0 == 0)
(!![])           // true-- (!!true)
([1] == 1)       // true-- (1 == 1)
(!![1])          // true-- (!!true)
(Boolean([]))    // true
(Boolean(new Boolean([])))      // true-- Boolean(any object)
(Boolean(new Boolean(false)))   // true-- Boolean(any object)
</pre>
</details>

------

#### 34. Comparison (#96)
```javascript
console.log(10 > 9)
console.log(10 > '9')
console.log('10' > 9)
console.log('10' > '9')
```
<details><summary>Answer</summary>
<pre>
(10 > 9)        // true
(10 > '9')      // true
('10' > 9)      // true
('10' > '9')    // false; get compared lexicographically and '1' < '9' so '10' < '9'
</pre>
</details>

------

#### 35. Inherit Getter Setter (#58)
```javascript
let val = 0

class A {
  set foo(_val){ val = _val }
  get foo(){ return val }
}

class B extends A { }

class C extends A {
  get foo(){ return val}
}

const b = new B()
console.log(b.foo)
b.foo = 1
console.log(b.foo)

const c = new C()
console.log(c.foo)
c.foo = 2
console.log(c.foo)
console.log(b.foo)
```
<details><summary>Answer</summary>
<pre>
console.log(b.foo)    // 0
b.foo = 1             // global variable 'val' got updated
console.log(b.foo)    // 1 <br/>
const c = new C()
console.log(c.foo)    // 1
c.foo = 2             // no effect as there is no setter in class C
console.log(c.foo)    // 1
console.log(b.foo)    // 1
</pre>
</details>

------

#### 36. 'this' (#97)
```javascript
const obj = {
  prefix: 'BFE',
  list: ['1', '2', '3'],
  log() {
    this.list.forEach(function (item) {
      console.log(this.prefix + item);
    });
  },
};
obj.log();
```
<details><summary>Answer</summary>
<pre>
'undefined1'
'undefined2'
'undefined3'
</pre>
<p><code>this</code> inside <code>forEach</code> callback func will refer to window as it's not the obj invoking callback. Hence <code>this.prefix</code> will be <code>undefined</code></p>
</details>

------

<!--
#### n. ques (#)
```javascript
// code
```
<details><summary>Answer</summary>
<pre></pre>
<p></p>
</details>

------
-->
