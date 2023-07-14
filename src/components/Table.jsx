import React from "react";

const Table = ({ tableTH }) => {
  return (
    <div>
      <div className="container mx-auto  border border-gray-300 rounded-lg p-4 ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {tableTH &&
                  tableTH.map((el, index) => <th key={index}> {el}</th>)}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>US Dollar</td>
                <td>0.68932</td>
                <td>+1.3%</td>
                <td>BUY</td>
              </tr>
              <tr>
                <th>2</th>
                <td>US Dollar</td>
                <td>0.68932</td>
                <td>+1.3%</td>
                <td>BUY</td>
              </tr>
              <tr>
                <th>3</th>
                <td>US Dollar</td>
                <td>0.68932</td>
                <td>+1.3%</td>
                <td>BUY</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
