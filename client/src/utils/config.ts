export const baseUrl =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api"
        : process.env.NODE_ENV;
