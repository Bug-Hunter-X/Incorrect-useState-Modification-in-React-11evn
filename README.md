# Incorrect useState Modification in React

This example demonstrates an uncommon error in React: directly modifying a state variable declared using `useState` without using the setter function.  This leads to unexpected behavior because React's state management system is not notified, preventing the component from re-rendering and reflecting the changes.