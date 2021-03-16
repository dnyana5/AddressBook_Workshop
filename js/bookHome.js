window.addEventListener('DOMContentLoaded', (event)=>{
  createInnerHtml();
});

const createInnerHtml = () => { 
  const headerHtml = "<tr><th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th>"+
                      "<th>State</th><th>Zip</th><th>Actions</th></tr>";
  let innerHtml = `${headerHtml}
   
    <tr>
      <td>Dnyaneshwari</td>
      <td>7020945216</td>
      <td>Vidya Nagar Solapur</td>
      <td>Solapur</td>
      <td>Maharashtra</td>
      <td>413003</td>
      <td>
        <img name="1" onclick="remove(this)" alt="delete"
          src="../assets/icon/delete-black-18dp.svg">
        <img name="1"  alt="edit" onclick="update(this)"
          src="../assets/icon/create-black-18dp.svg">
      </td>
    </tr>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}
