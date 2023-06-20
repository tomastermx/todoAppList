 const passport =  require('passport');


const LocalStrategy = require('../utils/auth/passport');
const JwtStrategy = require('../utils/auth/jwt');

passport.use(LocalStrategy);
passport.use(JwtStrategy);

