// dependencies
var express = require("express");
var path = require("path");

// setting up express
var app = express();
var PORT = process.env.PORT || 3000;

// setting up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// start the server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//   tables data
var tables = [
    {
        routeName: "reserve",
        name: "Fizzy",
        phoneNumber: "8587897777",
        email: "cc@yahoo.com",
        userID: "fizzy123"
    }
];

var waitlistPersons = [
    {
        routeName: "reserve",
        name: "Zuz",
        phoneNumber: "856-565-656",
        email: "zz@yahoo.com",
        userID: "Zuz123"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// display people reserving table
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/reservations", function(req, res) {
    return res.json(waitlistPersons);
});

//=============================================================

app.post("/api/tables", function(req, res){
    res.json(req.body);

    if (tables.length < 3) {
        tables.push(req.body)
    } else {
        waitlistPersons.push(req.body)
    }
    console.log("==============================")
    console.log(tables);
    console.log("==============================")
    console.log(waitlistPersons);

});