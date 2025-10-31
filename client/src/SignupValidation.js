// src/SignupValidation.js

export function validateSignup(name, email, password, confirmPassword) {
  if (!name || !email || !password || !confirmPassword) {
    return { valid: false, message: "All fields are required." };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  // Password length check
  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters long." };
  }

  // Password confirmation check
  if (password !== confirmPassword) {
    return { valid: false, message: "Passwords do not match." };
  }

  return { valid: true, message: "Validation successful!" };
}
