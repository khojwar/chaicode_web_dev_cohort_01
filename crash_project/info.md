# Initial configurations

create a ```package.json```

    $ npm init

create entry point: ```index.js```

    import express from 'express';
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

Now, install Express
    
    $ npm install express

install nodemon
    
    npm i -D nodemon

update file ```package.json``` file with

    { 
        "type": "module",
        "scripts": {
            "start": "nodemon index.js"
        },
    }

install dotenv

    npm install dotenv

Create ```.env``` file and set ```port = 3000```

    PORT = 3000

Again, update ```index.js``` file

    import dotenv from 'dotenv';
    dotenv.config();

    const port = process.env.PORT || 3000;


Now, configuration for ```Cors (Cross Origin Resource Sharing)```

**NOTE:** ```cors``` errro solve in backend side

install cors
    
    Npm i cors

Again, update ```index.js``` file

    import cors from 'cors';

    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    }));

telling express accept the ```json``` file and ```urlencoded``` data. 

Again, update ```index.js``` file

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


### Working with db (mongodb)

install mongoose

    npm i mongoose


#### Watch hour = 1:45 hr



