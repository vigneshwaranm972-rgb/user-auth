// LoginValidation.js

/**
 * Validates login input fields.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {object} - { valid: boolean, message: string }
 */
export function validateLogin(email, password) {
  if (!email || !password) {
    return { valid: false, message: "Email and password are required." };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  // Fake credentials check
  if (email === "ddhanushkumar809@gmail.com" && password === "123456") {
    return { valid: true, message: "Login successful!" };
    
  }

  return { valid: false, message: "Login failed. Please check your credentials." };
}
