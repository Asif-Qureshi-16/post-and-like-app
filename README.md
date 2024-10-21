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

## Screenshots

### Registration Page
![image](https://github.com/user-attachments/assets/0adadcc6-926b-4770-b1b6-d8809fd92736)

### Login Page
![image](https://github.com/user-attachments/assets/29d8e86b-7ea1-45d9-840c-af8c8c0fc7bc)

### Profile Page
![image](https://github.com/user-attachments/assets/727429be-ab78-42b3-b083-5e794e8d8dea)

### Edit Page
![image](https://github.com/user-attachments/assets/7e9d7573-32f2-4a0b-ae79-e1760d232373)


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
