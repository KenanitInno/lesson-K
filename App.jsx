import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);  
    setName('');  
  };

  return (
    <div className="App">
      <h1>Ad:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınızı yazın"
        />
        <button type="submit">Göndər</button>
      </form>
    </div>
  );
}

export default App;