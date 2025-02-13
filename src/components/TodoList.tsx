import { FC } from "react";
import { Checkbox, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Todolist: FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <VStack minBlockSize={200} justify="center" align="stretch" spacing={5}>
    {todos.map((todo) => (
      <HStack spacing={10} key={todo.id}>
        <Checkbox
          isChecked={todo.completed}
          colorScheme="green"
          size="lg"
          onChange={() => toggleTodo(todo.id)}
          sx={{
            "& > span:first-of-type": { borderRadius: "50%" },
          }}
        />
        <Text
          flex={1}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          textDecoration={todo.completed ? "line-through" : "none"}
          color={todo.completed ? "gray.400" : "inherit"}
          onClick={() => toggleTodo(todo.id)}
          _hover={{ cursor: "pointer" }}
        >
          {todo.text}
        </Text>
        <IconButton
          size="s"
          aria-label="Delete todo"
          icon={<DeleteIcon />}
          onClick={() => deleteTodo(todo.id)}
          _hover={{ color: "pink.500" }}
        />
      </HStack>
    ))}
  </VStack>
);

export default Todolist;
