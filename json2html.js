// json2html.js
export default function json2html(data) {
  // Extract headers from the data
  const headers = Array.from(
    new Set(data.flatMap((item) => Object.keys(item)))
  );

  // Generate HTML for the table
  let html = '<table data-user="akhilalle3510@gmail.com">';
  html += "<thead><tr>";
  headers.forEach((header) => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead><tbody>";

  // Generate HTML for each row
  data.forEach((row) => {
    html += "<tr>";
    headers.forEach((header) => {
      html += `<td>${row[header] || ""}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}
