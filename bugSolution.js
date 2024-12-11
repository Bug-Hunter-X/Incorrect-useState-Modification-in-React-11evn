```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use the setter function to update state
    setCount(prevCount => prevCount + 1);
    console.log(count); //This will update the component
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```