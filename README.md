# learning_react
Learning notes for React with TypeScript

<hr>

## 1. When does react render?
1. state changes
2. parent component renders
3. prop changes
4. shouldComponentUpdate function returns true
5. forceUpdate

for numbers 1 and 2, React decides whether to render through shallow compare.
I.E. pass by referenced values (shallow copy)
<br>
<hr>
