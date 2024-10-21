<h1>Express Blog Application</h1>

This is a simple blog application built with Express.js, featuring user registration, login, and post management. Users can create, edit, and like posts. The application uses JWT for authentication and MongoDB for data storage.

<h3>Features</h3>
<ul>
        <li><strong>User Registration and Login</strong>
            <ul>
                <li>Create new user accounts</li>
                <li>Authenticate users with login credentials</li>
            </ul>
        </li>
        <li><strong>JWT-based Authentication</strong>
            <ul>
                <li>Secure token generation upon user login</li>
                <li>Token validation for protected routes</li>
            </ul>
        </li>
        <li><strong>Create, Edit, and Delete Posts</strong>
            <ul>
                <li>Users can create new posts</li>
                <li>Edit existing posts</li>
                <li>Delete posts as needed</li>
            </ul>
        </li>
        <li><strong>Like and Unlike Posts</strong>
            <ul>
                <li>Users can like posts</li>
                <li>Users can unlike posts</li>
            </ul>
        </li>
        <li><strong>User Profiles Displaying Posts</strong>
            <ul>
                <li>Profile pages showcasing user's posts</li>
                <li>Display post statistics (likes, comments, etc.) on profiles</li>
            </ul>
        </li>
    </ul>

<h3>Technologies Used</h3>
<ul>
        <li><strong>Node.js</strong> - JavaScript runtime for server-side development</li>
        <li><strong>Express.js</strong> - Web framework for building APIs and web applications</li>
        <li><strong>MongoDB</strong> - NoSQL database for data storage</li>
        <li><strong>EJS (Embedded JavaScript)</strong> - Templating engine for rendering HTML views</li>
        <li><strong>Bcrypt</strong> - Library for hashing passwords securely</li>
        <li><strong>JWT (JSON Web Token)</strong> - For token-based authentication</li>
    </ul>

<h3>Registration Page:</h3>
![image](https://github.com/user-attachments/assets/63470f7e-978f-4986-b04f-c9d81284ec49)

<h3>Login Page:</h3>
![image](https://github.com/user-attachments/assets/ed8b4dd7-a81c-49b1-a579-ccb93843d3ab)

<h3>Profile Page:</h3>
![image](https://github.com/user-attachments/assets/8d79de0a-68a4-4be4-b412-d875385e23e5)

<h3>Edit Page:</h3>
![image](https://github.com/user-attachments/assets/2eae73c0-d101-4ac8-a16d-f963eb7e55f2)

<h2>Installation</h2>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/USERNAME/express-blog-app.git</code></pre>
    <li>Navigate into the project directory:</li>
    <pre><code>cd express-blog-app</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Create a <code>.env</code> file for environment variables (like your JWT secret).</li>
    <li>Start the server:</li>
    <pre><code>npm start</code></pre>
    <li>Open your browser and go to <code>http://localhost:3000</code>.</li>
</ol>

## Usage
- Visit the home page to register or log in.
- After logging in, you can create new posts, edit existing posts, and manage likes.

## Contributing
Feel free to fork the repository and submit pull requests. If you find any issues, please report them.
