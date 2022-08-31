import { Request, Response, NextFunction } from "express";
import { ZodError, AnyZodObject } from "zod";

export const validateRequestBody =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (e) {
      if (e instanceof ZodError) {
        return res.status(400).send({
          success: false,
          data: e.issues,
        });
      }
      return res.status(500).send({
        success: false,
        data: e,
      });
    }
  };

export const validateRequestQuery =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.query);
      return next();
    } catch (e) {
      if (e instanceof ZodError) {
        return res.status(400).send({
          success: false,
          data: e.issues,
        });
      }
      return res.status(500).send({
        success: false,
        data: e,
      });
    }
  };
