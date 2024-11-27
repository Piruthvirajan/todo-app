export function Header(props) {
  const { todos } = props;




  const isPlural =  todos.length != 1
  const taskorTasks = isPlural ? "tasks" : "task"

  return (
    <h1>
      You have {todos.length} open {taskorTasks}
    </h1>
  );
  
}
