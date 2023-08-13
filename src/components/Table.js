const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <ht>Name</ht>
          <th>Type of satellite</th>
          <ht>Launch Date</ht>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            return(
               <tr>
               <td>{data.name}</td>
               <td>{data.type}</td>
               <td>{data.launchDate}</td>
               <td>{data.operational ? "Active" : "Inactive"}</td>
              </tr>
            )
          })}
        
        </tbody>
      </table>
  );
};

export default Table;