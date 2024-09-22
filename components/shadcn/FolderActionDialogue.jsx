import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AlertDialogDemo = ({
  isDialogOpen,
  setIsDialogOpen,
  onConfirm,
  text,
}) => {
  const onCancel = () => {
    setIsDialogOpen(false);
  };
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent
        style={{ background: "var(--sub_bg)", color: "var(--text_color)" }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to {text.toUpperCase()} this folder?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {text.toUpperCase()} folder to designated folder?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDemo;
