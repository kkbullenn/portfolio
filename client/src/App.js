import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchProjects
  }, []);

  return (
    <div className="App">
      <h1>My Projects</h1>
      {projects.map(p => (
        <div key={p._id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
