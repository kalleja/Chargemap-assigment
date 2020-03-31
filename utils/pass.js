"use strict";
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtraactJWT = passportJWT.ExtractJwt;

const userModel = require("../models/user");

passport.use(
    new Strategy(
        { usernameField: "username", passwordField: "password" },
        (username, password, done) => {
            try {
                const user = userModel.getUserLogin(username);
                console.log("Local strategy", user); // result is binary row
                if (user === undefined) {
                    return done(null, false, { message: "Error email." });
                }
                if (user.password !== password) {
                    return done(null, false, {
                        message: "Error password."
                    });
                }
                delete user.password;
                return done(
                    null,
                    { ...user },
                    { message: "Logged In" }
                ); 
            } catch (err) {
                return done(err);
            }
        }
    )
);

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtraactJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        },
        (jwtPayload, done) => {
            try {
                const user = userModel.getUserID(jwtPayload.id);

                if (user === undefined) {
                    return done(null, false, { message: "Access denide" });
                }
                delete user.password;
                return done(
                    null,
                    { ...user },
                    { message: "Access granted" }
                );
            } catch (err) {
                return done(err);
            }
        }
    )
);

module.exports = passport;




















