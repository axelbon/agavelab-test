const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const moment = require('moment');

const { JWT_SECRET } = require('./config/index');
const { User } = require('./db')

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('auth-token'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    if (payload.expiredAt < moment().unix()) {
        return done(null, false, { message: 'token has expired' });
    }
    try {
        // finds the user specified in the token
        const user = await User.findByPk(payload.userId);
        //if user does not exist
        if (!user) {
            return done(null, false);
        }
        //else returns user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));