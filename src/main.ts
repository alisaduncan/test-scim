import express from 'express';
// import { PrismaClient, Todo, User } from '@prisma/client';
import passport from 'passport';
import passportBearer from 'passport-http-bearer';

// body-parser is required to accept the header content-type application/scim+json from Okta
// https://www.npmjs.com/package/body-parser
// RFC Notes: https://datatracker.ietf.org/doc/html/rfc7644#section-3.1
// import bodyParser from 'body-parser';

// For logging http requests
// import morgan from 'morgan';

// Import the scimRoute from the scim.ts file
import { scimRoute } from './scim';


// const prisma = new PrismaClient();
// const BearerStrategy = passportBearer.Strategy;

const app = express();
app.use(express.json())

// app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Express!');
});

///////////////////////////////////////////////////////
// SCIM-related routes

// passport.use(new BearerStrategy(
//   async (apikey, done) => {

//     return done(null);
//   }
// ));

// app.use(bodyParser.json({ type: 'application/scim+json' }));

// app.use(morgan('combined'))

// '/scim/v2' path appends to every SCIM Endpoints
// Okta recommended url - https://developer.okta.com/docs/guides/scim-provisioning-integration-prepare/main/#base-url
// app.use('/scim/v2', scimRoute);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/scim/v2`);
});
server.on('error', console.error);