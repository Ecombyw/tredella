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
