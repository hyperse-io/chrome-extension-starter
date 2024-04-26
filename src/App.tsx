import { useEventCallback } from 'usehooks-ts';
import './App.css';
import { Button } from './components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
function App() {
  const handleClick = useEventCallback(() => {
    alert(1);
  });
  // start bilding your popup app here
  return (
    <h1 className="text-3xl text-center font-bold underline">
      Hello world!
      <Button onClick={handleClick}>test</Button>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </h1>
  );
}

export default App;
