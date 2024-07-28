import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: string | object;
}

export default function (req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("token", token);

  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded: any = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    ) as { userId: string };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}
