<img src="public\images\hero.png" alt="Markdownify">

<h4 align="center">A simple application to menage lists</h4>

<hr>

<p align="center">
  <a href="#description">Description</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#how-to-use">How to Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<!-- ### Technologies
<div style='display: flex; flex-direction: row; gap: 20px; padding: 10px 0;'>
    <a href='https://nextjs.org/' target='_blank'>
        <img src='public\images\nextjs.png' width=50>
    </a>
</div> -->


## Description
This project was made using the NextJs in the version 13, using the <i>app</i> folder to handle the <strong>Front-End routes</strong> and the <i>app/api</i> folder to handle the <strong>API routes</strong>. For the <strong>Back-End</strong> side was used  Prisma to handle the database interations and Next Auth with Firebase to handle the authentication.

## Project Structure
<img src='public\images\folders.png'>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 prisma: </h3> 
    <p style='margin-top: 25px'>
        Contains all database migrations needed to init the project and build the database itself
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 public: </h3> 
    <p style='margin-top: 25px'>
        Contains all public files
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/app: </h3> 
    <p style='margin-top: 25px'>
        Contains all Front-End and API routes
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/assets: </h3> 
    <p style='margin-top: 25px'>
        Contains all files assets
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/components: </h3> 
    <p style='margin-top: 25px'>
        Contains all components used among all the pages 
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/conts: </h3> 
    <p style='margin-top: 25px'>
        Contains all constants 
    </p>
</div>
    
<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/hooks: </h3> 
    <p style='margin-top: 25px'>
        Contains all custom hooks
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/i18n: </h3> 
    <p style='margin-top: 25px'>
        Contains all the files needed to handle the internationalization and translate the application
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/libs: </h3> 
    <p style='margin-top: 25px'>
        Contains all the external libs
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/pages: </h3> 
    <p style='margin-top: 25px'>
        This folder was used to only handle the authentication with Next Auth by the server side
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/services: </h3> 
    <p style='margin-top: 25px'>
        Contains all the client services that interacts with the server side api
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/store: </h3> 
    <p style='margin-top: 25px'>
        Contains all the shared state shared between the application
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/types: </h3> 
    <p style='margin-top: 25px'>
        Contains all types definitions
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>📁 src/utils: </h3> 
    <p style='margin-top: 25px'>
        Contains all utilities functions
    </p>
</div>

<div style='display: flex; flex-direction: row; align-items: center; gap: 10px;'>
    <h3>🗃️ middleware.ts: </h3> 
    <p style='margin-top: 25px'>
        File that intercept all the pages and api routes calls and execute some actions
    </p>
</div>

## How to Use
```bash
# Clone this repository
$ git clone https://github.com/jeffnts/next-todo.git

# Go into the repository
$ cd next-todo

# Create and set the environment variables in the .env file
# See the environments variables in the .env.example in the root directory

# Install dependencies
$ npm install

#Run Prisma Client
$ npx prisma generate

# Run the app
$ npm run dev
```

## Credits
This software uses the following open source packages:
<div style='display: flex; flex-direction: row; align-items:center; gap: 20px; padding: 10px 0;'>
    <a href='https://nextjs.org/' target='_blank'>
    <img src="public\images\nextjs.png" style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  width=100>
    </a>
    <a href='https://next-auth.js.org/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\next-auth.png' width=100>
    </a>
    <a href='https://firebase.google.com/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\firebase.png' width=100>
    </a>
    <a href='https://www.prisma.io/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\prisma.png' width=100>
    </a>
    <a href='https://zustand-demo.pmnd.rs/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\zustand.png' width=100>
    </a>
     <a href='https://react-hook-form.com/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\react-hook-form.jpg' width=100>
    </a>
    <a href='https://tailwindcss.com/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\tailwind.png' width=100>
    </a>
    <a href='https://daisyui.com/' style="transform: scale(1); transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"  target='_blank'>
        <img src='public\images\daisyui.svg' width=100>
    </a>
</div>

## License

MIT