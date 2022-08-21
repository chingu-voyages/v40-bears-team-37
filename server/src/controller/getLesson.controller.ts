import { Request, Response } from 'express'
import getLesson from '../services/getLesson'

export default async function (_req: Request, res: Response) {
    try {
        const lesson = await getLesson()
        return res.status(200).json(lesson)
    } catch (e) {
        return res.status(400).json({error: e.message})
    }
}