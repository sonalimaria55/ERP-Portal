const { body } = require("express-validator");

const updateUserValidation = [
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  body("phone")
    .optional()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits")
    .isNumeric()
    .withMessage("Phone number must contain only numbers"),

  body("role")
    .optional()
    .isIn(["super_admin", "branch_admin", "sales_person"])
    .withMessage("Invalid role"),
];

module.exports = {
  updateUserValidation,
};