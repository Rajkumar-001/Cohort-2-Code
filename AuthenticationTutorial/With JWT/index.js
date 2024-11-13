const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const users = [];

const app = express();
app.use(cors());

const port = 3000;
app.use(express.json());

const JWT_SECRET = "USER_APP";

function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; 

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({ message: "Unauthorized" });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
}

app.use(express.static("./"));

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send({ message: "User already exists" });
    }

    users.push({ username, password });
    res.send('User created successfully');
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token;
        res.send({
            token
        });

        console.log(users);

    } else {
        res.status(403).send({
            message: "Invalid username or password"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
