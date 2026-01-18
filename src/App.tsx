import { useEventCallback } from 'usehooks-ts';
import './App.css';
import { Button } from '@heroui/react';

function App() {
  const handleClick = useEventCallback(() => {
    alert(1);
  });
  // start bilding your popup app here
  return (
    <h1 className="text-center text-3xl font-bold text-red-600 underline">
      Hello world!
      <Button onPress={handleClick}>test</Button>
    </h1>
  );
}

export default App;
