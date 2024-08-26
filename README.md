## Projects requirements

-  Node version : >= 18.x
-  npm version : >= 9.x
-  yarn version : >= 1.22.x

-  To install node version use this command : `nvm install` or `nvm install 18` and use `nvm use 18`

## Projects Setup scripts

-  copy env variables `cp .env.example .env`
-  install dependencies => `yarn`
-  work in dev mode => `yarn dev`
-  to format and lint => `yarn format:fix`

## Recommendation

-  Before commit run `yarn precommit` to check all is good for the CI/CD

### Use No-Keycloak Dev Mode

If you don't want to use keycloak for authentication and pass by the auth wall (usefull for frontend development), you can simple use env variable like this in your .env file `VITE_NODE_ENV="no-kc"`.
