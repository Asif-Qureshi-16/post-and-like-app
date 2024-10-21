const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./Models/userModel");
const postModel = require("./Models/postModel");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser"); // Add this line

const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

// Add the GET route for login
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  let { username, name, age, email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User already Registered");

  bcrypt.genSalt(10, async (err, salt) => {
    if (err) return res.status(500).send("Error generating salt");

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) return res.status(500).send("Error hashing password");

      try {
        const user = await userModel.create({
          username,
          name,
          age,
          email,
          password: hash,
        });

        let token = jwt.sign({ emailid: email, userid: user._id }, "secret");
        res.cookie("token", token, { httpOnly: true });
        res.redirect("/profile");
      } catch (createError) {
        res.status(500).send("Error creating user");
      }
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong");

  const result = await bcrypt.compare(password, user.password);
  if (result) {
    let token = jwt.sign({ emailid: email, userid: user._id }, "secret");
    res.cookie("token", token, { httpOnly: true });
    res.status(200).redirect("profile");
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.emailid }).populate("posts")
  // console.log(user); // why giving me null
  res.render("profile",{user}); // Example usage of req.user
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.emailid });
  let post= await postModel.create({
    user: user._id,
    content:req.body.content
  })

  user.posts.push(post._id)
  await user.save()
  res.redirect('/profile')
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate('user');
  
  if(post.likes.indexOf(req.user.userid)===-1){
    post.likes.push(req.user.userid)
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1)
  }
  
  await post.save()
  res.redirect('/profile')
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate('user');
 
  res.render('edit',{post})
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate({ _id: req.params.id },{content:req.body.content});
 
  res.redirect('/profile')
});

function isLoggedIn(req, res, next) {
  if (!req.cookies.token) {
    // Check if the token exists
    return res.redirect("/login");
  }
  try {
    let data = jwt.verify(req.cookies.token, "secret");
    req.user = data;
    next();
  } catch (err) {
    console.error(err);
    return res.redirect("/login"); // Redirect if token verification fails
  }
}

app.listen(3000, () => {
  console.log("The Port is Listening on 3000");
});
