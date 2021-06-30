import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request?.headers?.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "c012754f5acbd1e47db7d50864d98af1"
    ) as IPayload;

    request.user_id = sub;

    next();
  } catch (error) {
    return response.status(401).end();
  }

  return next();
}
