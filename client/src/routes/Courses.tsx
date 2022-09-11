import { useForm, useFieldArray } from "react-hook-form";
import { addCourse } from "../services/courses";
import { CourseStyles } from "styles/CourseStyles";
import { CourseHoursType, DraftCourseType } from "types/courses";

const transformWeeklySchedule = (scheduleData: DraftCourseType) => {
  const transformedWeeklySchedule: {
    [key: string]: CourseHoursType;
  } = {};
  const originalWeeklySchedule = scheduleData.weekly_schedule;
  for (const prop in originalWeeklySchedule) {
    const { day_of_week, start_time, end_time } = originalWeeklySchedule[prop];
    transformedWeeklySchedule[day_of_week] = { start_time, end_time };
  }
  return transformedWeeklySchedule;
};

const Courses = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "weekly_schedule",
    control,
  });

  const onSubmit = async (values: DraftCourseType) => {
    const transformedWeeklySchedule = transformWeeklySchedule(values);
    const response = await addCourse({
      ...values,
      weekly_schedule: transformedWeeklySchedule,
    });
    console.log(response.data);
  };

  return (
    <CourseStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Course Name: </label>
          <input type="text" id="name" {...register("name")} />
        </section>
        <section>
          <label htmlFor="color">Course Color: </label>
          <input type="color" id="color" {...register("color")} />
        </section>

        <section>
          <label htmlFor="start_date">Start Date: </label>
          <input
            type="date"
            id="start_date"
            {...register("start_date", {
              required: true,
            })}
          />

          <label htmlFor="end_date">End Date: </label>
          <input
            type="date"
            id="end_date"
            {...register("end_date", {
              required: true,
            })}
          />
        </section>

        {fields.map((field, index) => (
          <section key={field.id}>
            <label htmlFor="day_of_week">Day: </label>
            <select
              {...register(`weekly_schedule.${index}.day_of_week`, {
                required: true,
              })}
              id="day_of_week"
            >
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </select>

            <label htmlFor="start_time">Start Time: </label>
            <input
              type="time"
              id="start_time"
              {...register(`weekly_schedule.${index}.start_time`, {
                required: true,
              })}
            />

            <label htmlFor="end_time">End Time: </label>
            <input
              type="time"
              id="end_time"
              {...register(`weekly_schedule.${index}.end_time`, {
                required: true,
              })}
            />

            <button
              className="btn-delete"
              type="button"
              onClick={() => remove(index)}
            >
              Delete
            </button>
          </section>
        ))}
        <section>
          <button
            className="btn-schedule"
            type="button"
            onClick={() =>
              append({
                day_of_week: "monday",
                start_time: "",
                end_time: "",
              })
            }
          >
            Add Daily Schedule
          </button>
        </section>
        <section>
          <button type="submit">Add Course</button>
        </section>
      </form>
    </CourseStyles>
  );
};

export default Courses;
