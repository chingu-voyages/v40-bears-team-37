// @ts-nocheck
import { useForm, useFieldArray } from "react-hook-form";
import { addCourse } from "../services/courses";
import { CourseStyles } from "styles/CourseStyles";

interface Schedule {
  start_time: string;
  end_time: string;
}

interface FormValues {
  name: string;
  color: string;
  start_date: string;
  end_date: string;
  weekly_schedule: {
    monday: [Schedule];
    tuesday: [Schedule];
    wednesday: [Schedule];
    thursday: [Schedule];
    friday: [Schedule];
  };
}

const Courses = () => {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "weekly_schedule",
    control,
  });
  const onSubmit = async (data: FormValues) => {
    const transformedWeeklySchedule = {};
    data.weekly_schedule.forEach(
      (schedule) =>
        (transformedWeeklySchedule[schedule.day_of_week] = [
          { start_time: schedule.start_time, end_time: schedule.end_time },
        ]),
    );
    const response = await addCourse({
      ...data,
      weekly_schedule: transformedWeeklySchedule,
    });
    console.log(response.data);
  };

  return (
    <CourseStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Course Name</label>
          <input type="text" id="name" {...register("name")} />
        </section>
        <section>
          <label htmlFor="color">Course Color</label>
          <input type="color" id="color" {...register("color")} />
        </section>

        <section>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            {...register("start_date", {
              required: true,
            })}
          />
        </section>
        <section>
          <label htmlFor="end_date">End Date</label>
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
            <label htmlFor="day_of_week">Day of the week</label>
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

            <label htmlFor="start_time">Start Time</label>
            <input
              type="time"
              id="start_time"
              {...register(`weekly_schedule.${index}.start_time`, {
                required: true,
              })}
            />

            <label htmlFor="end_time">End Time</label>
            <input
              type="time"
              id="end_time"
              {...register(`weekly_schedule.${index}.end_time`, {
                required: true,
              })}
            />

            <button type="button" onClick={() => remove(index)}>
              DELETE
            </button>
          </section>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              day_of_week: "monday",
              start_time: "",
              end_time: "",
            })
          }
        >
          Add weekly schedule
        </button>
        <div>
          <input type="submit" value="add course" />
        </div>
      </form>
    </CourseStyles>
  );
};

export default Courses;
