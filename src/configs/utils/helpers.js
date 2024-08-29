// Utility function for date formatting
export const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  const year = d.getFullYear();
  return [year, month, day].join("-");
};

export const flattenObject = (obj, parentKey = "") => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = parentKey ? `${parentKey}[${key}]` : key;
    if (value === null) {
      // Convert null to an empty string
      return { ...acc, [newKey]: "" };
    } else if (
      typeof value === "object" &&
      value !== null &&
      !(value instanceof File) &&
      !(value instanceof Date)
    ) {
      // Recursively flatten nested objects except for File and Date instances
      return { ...acc, ...flattenObject(value, newKey) };
    } else if (value instanceof Date) {
      // Format date objects
      return { ...acc, [newKey]: formatDate(value) };
    } else if (typeof value === "boolean") {
      // Convert boolean to "Yes" or "No"
      return { ...acc, [newKey]: value ? "yes" : "no" };
    } else {
      return { ...acc, [newKey]: value };
    }
  }, {});
};

export function generateUsername(firstName, lastName) {
  // Get the current date and time
  const now = new Date();

  // Generate a unique number based on the current timestamp
  const timestamp = now.getTime(); // Number of milliseconds since January 1, 1970

  // Extract a 3-digit number from the timestamp
  const randomNumber = timestamp % 1000; // Get last 3 digits of timestamp

  // Ensure the random number is 3 digits
  const uniqueNumber = randomNumber.toString().padStart(3, "0");

  // Combine the first name, last name, and the unique number
  const username = `${firstName}${lastName}${uniqueNumber}`;

  return username;
}
