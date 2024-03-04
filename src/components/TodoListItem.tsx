import {Checkbox,IconButton,ListItem,ListItemIcon,ListItemSecondaryAction,ListItemText,Typography,} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { FC } from "react";


type TodoListItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onRemove: (id: number) => void;
  onToggle: (id: number, value: boolean) => void;
};
const TodoListItem: FC<TodoListItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onRemove,
}) => {
  return (
    <ListItem className="list">
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          onChange={({ target: { checked } }) => onToggle(id, checked)}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            style={{ textDecoration: completed ? "line-through" : "initial" }}
            color={completed ? "textSecondary" : "initial"}
          >
            {text}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton style={{color:'red'}}
          edge="end"
          aria-label="delete"
          onClick={() => onRemove(id)}
        >
          <DeleteForever />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default TodoListItem;
