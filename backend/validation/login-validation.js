const { z } = require("zod");


//creating an object schema

const loginValidation = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .max({ message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password Must Contain At Least 6 Characters!" })
        .max(12, { message: "Password Must Contain At Most 12 Characters!" }),

});

module.exports = loginValidation;