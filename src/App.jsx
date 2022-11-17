import React, { useState } from 'react';


function App() {

const [posts, setPosts] = useState([{}])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Alex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              This is my post update
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
