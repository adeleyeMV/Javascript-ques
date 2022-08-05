#### 1. Promise Executor
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

#### 2. Comparison Operator (==)
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

#### 3. undefined
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

#### 4. let
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

#### 5. RegExp.prototype.test
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

#### 6. Implicit Coercion
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

#### 7. Precedence
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

#### 8. Var
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

#### 9. Function call
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

#### 10. Operator Precedence
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

<!--
#### n. ques
```javascript
// code
```
<details><summary>Answer</summary>
<p>
<code>ans</code>
<br />
<b>Reason-</b> reason
</p>
</details>
------
-->
