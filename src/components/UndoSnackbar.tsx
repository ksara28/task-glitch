// src/components/UndoSnackbar.tsx
import { Snackbar, Button } from '@mui/material';
import { useTasksContext } from '@/context/TasksContext';

export default function UndoSnackbar() {
  const { lastDeleted, undoDelete, resetLastDeleted } = useTasksContext();

  const handleClose = () => {
    resetLastDeleted(); // reset lastDeleted when snackbar closes
  };

  return (
    <Snackbar
      open={!!lastDeleted}
      onClose={handleClose} // call handleClose instead of directly resetLastDeleted
      autoHideDuration={4000}
      message="Task deleted"
      action={
        <Button
          color="secondary"
          size="small"
          onClick={undoDelete} // undo the last deleted task
        >
          Undo
        </Button>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}
