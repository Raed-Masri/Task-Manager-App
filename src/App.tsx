import './App.css';
import {Box,List,Typography, Toolbar,AppBar} from "@mui/material";
import React, { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import TodoListItem from "./components/TodoListItem";
import CircularProgress from '@mui/material/CircularProgress';



export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export type TodoFilter = { completed: null | boolean };
const intialTodos: Todo[] = [
 // { id: 0, text: "Click here", completed: false },
];

function App() {
  
  const [todos, setTodos] = useState<Todo[]>(intialTodos);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState<TodoFilter>({ completed: null });
  const filteredTodos =
    filter.completed === null ? todos: todos.filter((todo) => todo.completed === filter.completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const toggleTodoById = (id: number, value: boolean) => {
    setTodos((oldTodos) => {
      return oldTodos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, completed: value };
        }

        return todoItem;
      });
    });
  };

  const removeTodoById = (id: number) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todoItem) => todoItem.id !== id);
    });
  };

  const toggleFilterTodo = () => {
    if (filter.completed !== false) {
      setFilter({ completed: false });
    } else {
      setFilter({ completed: null });
    }
  };

  const toggleFilterCompleted = () => {
    if (filter.completed !== true) {
      setFilter({ completed: true });
    } else {
      setFilter({ completed: null });
    }
  };

  const handleAddTodo: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setTodos((oldTodos) => {
      return [
        ...oldTodos,
        {
          id: oldTodos.length,
          text: value.trim(),
          completed: false,
        },
      ];
    });
    setValue("");
  };
  
  
  return (
    
    <Box maxWidth={400} margin="auto">
      <Box padding={6}>
      <AppBar>
            <Toolbar className="toolbar">
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Tasks Manager App
              </Typography>
              
            </Toolbar>
          </AppBar>
      </Box>
      <Box display="flex" flexDirection="column">
        <ControlPanel
          value={value}
          filter={filter}
          onChange={handleChange}
          onAddTodo={handleAddTodo}
          onToggleFilterTodo={toggleFilterTodo}
          onToggleFilterCompleted={toggleFilterCompleted}
        />
        <List 
          subheader={<Typography className='list-style' >{`${filteredTodos.length} Tasks `}</Typography>}
        >
          {filteredTodos.map((todo, i) => (
            
            <TodoListItem
              key={`todo-item-${i}`}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onRemove={removeTodoById}
              onToggle={toggleTodoById}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
}
export default App;
