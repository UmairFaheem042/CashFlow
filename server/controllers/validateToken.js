const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1]; // Getting token from cookie or header
  
  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication failed. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store decoded user info in request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = validateToken;
