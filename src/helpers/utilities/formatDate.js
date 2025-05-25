export function formatDate(inputDate) {
  // Split the input date string by "-"
  const parts = inputDate.split("-");

  // Rearrange the parts to form "DD/MM/YYYY" format
  const formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
  return formattedDate;
}
