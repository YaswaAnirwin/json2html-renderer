export default function json2html(data) {
    // Define table header with data-user attribute
    let tableHTML = `<table data-user="dyanirwin123@gmail.com">
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>
      <tbody>`;
  
    // Loop through each data entry and add rows
    data.forEach(item => {
      tableHTML += `<tr><td>${item.Name || ""}</td><td>${item.Age || ""}</td><td>${item.Gender || ""}</td></tr>`;
    });
  
    tableHTML += `</tbody></table>`;
    
    return tableHTML;
  }
  