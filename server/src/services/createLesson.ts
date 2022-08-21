import Lesson, { LessonDocument } from "../models/lesson.model";

export default async function (lesson: LessonDocument) {
    try {
        /* TODO: remove nullish coaelesing after we start to validate req body with zod */
        const lessonDoc: LessonDocument = new Lesson({
            unit: lesson.unit ?? "",
            note: lesson.note ?? "",
            date: Date.now(),
            attachments: lesson.attachments ?? [],
            schedule_id: lesson.schedule_id ?? "63018311e598d7fe707700b7" // TODO: remove dummy mongo id once the new lesson can reference a real schedule id
        })

        await lessonDoc.save()
        return lessonDoc
    } catch(e) {
        throw new Error(e.message)
    }
}