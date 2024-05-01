const jwt = require('jsonwebtoken');
const jwtConfig = require('../configs/jwtConfig');
const generateTokens = require('../utils/authutils');

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, 'R');
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, userName: user.userName },
    });
    res.locals.user = user;
    res
      .cookie(jwtConfig.refresh.type, refreshToken, {
        maxAge: jwtConfig.refresh.expiresIn,
        httpOnly: true,
      })
      .cookie(jwtConfig.access.type, accessToken, {
        maxAge: jwtConfig.access.expiresIn,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(jwtConfig.refresh.type).clearCookie(jwtConfig.access.type);
    next();
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, 'A');

    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = verifyAccessToken;
