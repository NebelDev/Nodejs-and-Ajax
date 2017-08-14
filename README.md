# Nodejs and Ajax request
In this tutorial I will show how to make a easier Ajax request using Node.js with the module Express.<br>
The page shows how to summ 2 numbers, take the result throgh jQuery and show an alert box on your browser. <br>
The web server works on the port <b><i>3000</i></b>. Also you can see how load static page into your Node.js project. THe directory HTML contains the pure HTML static pages and in the directory JS the jQuery library.

<p><b>Default homepage</b></p>

```javascript
var options = {
  index: "index.html"
};
```

Change the index var with your static homepage file.

```javascript
var options = {
  index: "index.html"
};
```
In the <i>*sum.html*</i> we set our 2 data to sum up then we make an async Ajax request toward your Nodejs server to the URL /sum. This path in the webserver gets the 2 incoming parameters, sum them up and give back the value. On our web page we can see the sum shown as an alert to the user.
