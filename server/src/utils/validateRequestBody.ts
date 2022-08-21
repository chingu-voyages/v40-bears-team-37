import { Request, Response, NextFunction } from "express"
import { ZodError, AnyZodObject } from "zod"

const validateRequestBody = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body)
        return next()
    } catch(e) {
        if (e instanceof ZodError) {
            return res.status(400).json(e.issues[0].message)
        } else {
            return res.status(500).json(e)
        }
    }
}

export default validateRequestBody 