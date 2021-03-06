var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var common = {
	aboutme: {
		title: 'About Me | Abhinandan Raju',
		heading: 'About Me page',
		date: 'Sep 5, 2016',
		content: `
				<p> 
					This page talks about me. 
				</p>
				<p> 
					I have developed this page by myself. 
				</p>
				<p> 
					Lets see if this works. 
				</p>
				<p> 
					This is my common content page for all three pages.
				</p>`
		
	},
	aboutmylistings: { 
		title: 'Lisitings | Abhinandan Raju',
		heading: 'Lisitings page',
		date: 'Sep 10, 2016',
		content: `
				<p> 
					My listings include many.
				</p>
				<p> 
					I have developed this page by myself. 
				</p>
				<p> 
					Lets see if this works. 
				</p>
				<p> 
					This is my common content page for all three pages.
				</p>`
	            },
	aboutmyjob: {
		title: 'My Job | Abhinandan Raju',
		heading: 'My job page',
		date: 'Sep 15, 2016',
		content: `
				<p> 
					I work as an Associate at Cognizant. 
				</p>
				<p> 
					I have developed this page by myself. 
				</p>
				<p> 
					Lets see if this works. 
				</p>
				<p> 
					This is my common content page for all three pages.
				</p>
				`
				},
};

var content = {
	title: 'About Me | Abhinandan Raju',
	heading: 'About Me page',
	date: 'Sep 5, 2016',
	content: `
			<p> 
				This page talks about me. 
			</p>
			<p> 
				I have developed this page by myself. 
			</p>
			<p> 
				Lets see if this works. 
			</p>
			<p> 
				This is my common content page for all three pages.
			</p>`
		
};

function createTemplate (data) {
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;
	
	var htmlTemplate = `
	<html>
		<head>
			<title>
				${title}
			</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href="/ui/style.css" rel="stylesheet" />
		</head>
		<body> 
			<div class="container">
					<div>
						<a href="/">Home</a>
					</div>
					<hr/>
					<h3> 
						${heading}
					</h3>
					<div>
						${date}
					</div>
					<div>
						${content}
					</div>
			</div>
		</body>
	</html>
	`;
	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/', function(req, res) { //URL: /submit-name?name=xxxxx
    //Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    //JSON: Javascript Object Notation
    res.send(JSON.stringify(names)); //TODO
});

app.get('/:aboutName', function (req, res) {
	var aboutName = req.params.aboutName;
	res.send(createTemplate(common[aboutName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

