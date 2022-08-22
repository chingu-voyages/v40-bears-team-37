import Lesson, { LessonDocument } from "../models/lesson.model";
import { Lesson as ILesson } from "../routes/lesson.route"

export default async function (lesson: ILesson) {
    try {
        const lessonDoc: LessonDocument = new Lesson({
            unit: lesson.unit,
            note: lesson.note,
            date: lesson.date ?? Date.now(),
            attachments: lesson.attachments,
            schedule_id: lesson.schedule_id
        })

        await lessonDoc.save()
        return lessonDoc
    } catch(e) {
        throw new Error(e.message)
    }
}