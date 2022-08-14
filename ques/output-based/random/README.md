#### 1. Reference Type ([source](https://javascript.info/reference-type))
```javascript
let user = {
  name: "John",
  go: function() { alert(this.name) }
}
(user.go)()
```
<details><summary>Answer</summary>
<code>Uncaught ReferenceError: can't access lexical declaration 'user' before initialization</code>
<p>The error appears because a semicolon is missing after <code>user={...}</code>, so it reads like: <code>let user = { go:... }(user.go)()</code> and see we are accessing user on the line where it is not even defined yet.<br/> After inserting <code>;</code> it will give <code>John</code> as a output.</p>
</details>

------

<!--
#### n. ques ([source](link))
```javascript
// code
```
<details><summary>Answer</summary>
<pre></pre>
<p></p>
</details>

------
-->
