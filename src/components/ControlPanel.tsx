import {Box,Button,ButtonGroup,TextField,} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { FC } from "react";
import { TodoFilter } from "../App";

type ControlPanelProps = {
  value: string;
  filter: TodoFilter;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: React.MouseEventHandler<HTMLButtonElement>;
  onToggleFilterTodo: () => void;
  onToggleFilterCompleted: () => void;
};
const ControlPanel: FC<ControlPanelProps> = ({
  value,
  filter,
  onChange,
  onAddTodo,
  onToggleFilterTodo,
  onToggleFilterCompleted,
}) => {

  return (
    <>
    
      <form>
          <Box display="flex" alignItems="center">
          
          <TextField label="New todo"
          fullWidth
            placeholder="Add a task..."
            value={value}
            onChange={onChange}
          />
          <Box marginLeft={2}>
            <Button
              disableRipple
              disabled={!value.trim()}
              type="submit"
              color="secondary"
              variant="contained"
              onClick={onAddTodo}
            >
              Create
            </Button>
          </Box>
        </Box>
      </form>
      <Box
        marginY={6}
        display="flex"
        
      >
        <ButtonGroup>
          <Button
            sx={{
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "yellow", 
                color: "#FFF",
              },
            }}
            disableRipple
            variant={filter.completed === false ? "contained" : "outlined"}
            
            color="primary"
            startIcon={<AccessTimeIcon />}
            onClick={onToggleFilterTodo}
          >
            active
          </Button>
          <Button
            sx={{
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "#00ab41", 
                color: "#FFF", 
              },
            }}
            disableRipple
            variant={filter.completed === true ? "contained" : "outlined"}
            color="primary"
            startIcon={<TaskAltIcon />}
            onClick={onToggleFilterCompleted}
          >
            Complete
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
export default ControlPanel;
