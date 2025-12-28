// src/components/UndoSnackbar.tsx
import { Snackbar, Button } from '@mui/material';
import { useTasksContext } from '@/context/TasksContext';

export default function UndoSnackbar() {
  const { lastDeleted, undoDelete, resetLastDeleted } = useTasksContext();

  return (
    <Snackbar
      open={!!lastDeleted}
      onClose={resetLastDeleted}        // reset lastDeleted on close
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={undoDelete}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}
