import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="p-4">
      <p className="font-bold pb-4 text-5xl">{message}</p>
      <Button variant={'destructive'}>Click Me</Button>
    </div>
  );
}

export default App;
