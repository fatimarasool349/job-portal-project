import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  // console.log("🛡️ MIDDLEWARE CALLED");
  
  try {
    const authHeader = req.headers.authorization;
    
    // console.log(`Raw authHeader: ${JSON.stringify(authHeader)}`);
    // console.log(`authHeader type:${typeof authHeader}`);
    // console.log(`authHeader length:${authHeader?.length}`);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];
    
    // console.log(`Token after split:${JSON.stringify(token)}`);
    // console.log("Token length:", token?.length);
    
    // // DEBUG: Log the secret being used
    // console.log("JWT_SECRET:", process.env.JWT_SECRET);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = decoded;

    next();
  } catch (error) {
    console.log("❌ Token verification error:", error.message);
    return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};