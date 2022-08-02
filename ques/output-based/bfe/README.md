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

<!--
#### n. ques
```javascript
// code
```
<details><summary>Answer</summary>
<p>
<b>Answer-</b> <code>ans</code>
<br />
<b>Reason-</b> reason
</p>
</details>
-->
