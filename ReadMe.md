# My Library Application (mybrary)

A simple library application developed using Node, Express, and MongoDB. This application was built by following along [this](https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5) YouTube series.

## Packages Used

This project is dependent on the following packages:

- *express* - a web framework for node.
- *ejs* - the view engine.
- *express-ejs-layouts* - provides html layout support for express.
- *mongoose* - easy integration to the *MongoDb* server.
- *cross-env* - sets environment variables in the script that works across all environments.

To assist with the development of this project, the following *DEV* dependencies were also added.

- *nodemon* - automatically restarts the application when any file changes, in the directories monitored.
- *dotenv* - loads the contents of a .env. file as environment variables.

## Scripts

The following scripts have been defined in the package.json.

- *start* - during the development phase, this will be the primary script used, since it is easier to call. This just runs the *nodemon* package against the *main* js file.

## Environment Variables

For this application to work properly, the following environment variables need to be defined:

- *APP_ENV* - specifies the current environment (DEV / UAT / PROD).
- *HTTP_PORT* - specfies the http port to listen on. Default is 21000.
- *DB_URL* - the MongoDb connection string.

## Common Git Commands

Initialize a local Git repository.

```
.\> git init
```

Stage all files.

```
.\> git add .
```

Commit staged files.

```
.\> git commit -m "<comment>"
```

Link the local repository to a remote repository.

```
.\> git remote add origin <git-url>
```

Push local commits to the remote repository.

```
.\> git push -u origin main
```


## References

- Web Dev Simplified's [Full Stack Web Development Course](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM)