[KJL_](https://iq-tree.github.io/KJL_) — New Short, Easy JavaScrpt
==================================================

What is KJL?
--------------------------------------
KJL_ is a JavaScript Library. It has shortened JavaScript a lot. It helps developers to write JavaScript fast.


Documentation
--------------------------------------
To use KJL_, you can use constant "_". While using KJL, you won't be able to make a variable with name _.

To use KJL_, you can also use kjlobject. This is also a constant.

<h2>Changing CSS Style</h2>
```js
_.css("#button", "display", "none");
```
CSS Style changing is a function of JavaScript minified.
So, if you want to change `z-index`, then you will have to type it as `zIndex`.
The first argument, `#button` could be a class element `.button` which will all change elements with that class. It also could be a tag name like `h2`. In this case, it would be the same as class element. It will change all elements with that tag name.

<h2>Setting/Getting/Deleting Cookies</h2>
```
_.cookie("set", "myCookie", "value", 3);
```
For, Setting/Getting/Deleting Cookies, we used [js-cookie](https://github.com/js-cookie/js-cookie) library.
Thanks to that, you can simply enter `"set"`, `"get"`, `"delete"` one of three and if it is a `set`, you will enter all 4 arguments and if it is one of `get` or `delete`, you can only enter 2 arguments.
The 4th argument is the date argument. You can either type it as a Number or String.
For the example on the top, it will create a cookie named `myCookie` with value `value`. The cookie will last for 3 days.
If you don't enter the date, it will set as 'delete when close tab'

<h2>Return element with ID</h2>
```
_.id("button");
```
This will simply return element with that id.



Questions
--------------------------------------
For questions, contact [here](mailto:desbey7@naver.com)


Reminder
--------------------------------------
This project is not released or completed yet.
It is just on alpha stage.
Contact to the link on type for bug reports.
Thank you.
