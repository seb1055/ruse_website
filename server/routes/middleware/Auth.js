const jwt = require('jsonwebtoken');

// Verify Token
function verifyToken(req, res, next) {

  
  // Get auth header value
  const bearerHeader = req.headers['fuckyou-key'];

  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {

    jwt.verify(bearerHeader, process.env.JWT_SECERT, (err, authData) => {
      if (err){
        console.log("Token failed to verifiy");
           
        res.sendStatus(403);
      }
      else {
        res.authData = authData
        next();
      }
    })


    // Next middleware
    
  } else {
    // Forbidden
 
    res.sendStatus(403);
  }
}

module.exports = verifyToken;
