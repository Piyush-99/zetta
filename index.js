var express                  = require("express"),
    app                      = express(),
    mongoose                 = require("mongoose"),
    bodyParser               = require("body-parser"),
    passport                 = require("passport"),
    LocalStrategy            = require("passport-local"),
    passportLocalMongoose    = require("passport-local-mongoose");


mongoose.connect("mongodb://localhost/zettadb"); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs" );
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
  secret: "PP",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

UserSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User",UserSchema);

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
});


app.get("/",function(req,res){
  res.render("home");
});

app.get("/gallery",function(req,res){
  res.render("gallery");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get('/gamehome',isLoggedIn,function(req,res){
   res.render("gamehome");
});

app.get('/game',isLoggedIn,function(req,res){
   var pname = req.user.username;
   res.render("game",{pname:pname});
});

app.get('/contact',function(req,res){
   res.render("contact");
});


app.post("/login",passport.authenticate("local",
 {
  successRedirect: "/", 
  failureRedirect: "/login"
}),function(req,res){
  
});                              

app.get("/signup", function(req,res){
  res.render("signup");
});

app.post("/signup",function(req,res){
   var newUser = new User(
   	{ username: req.body.username
   	}); 
   User.register(newUser, req.body.password, function(err,user){
     if (err) {
      console.log(err);
      return res.render("signup");
     }
     passport.authenticate("local")(req,res,function(){
       res.redirect("/");
     });
   });
});


app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login"); 
}      


app.listen(process.env.PORT||3000,function(){
console.log("App listening on port 3000!");
});