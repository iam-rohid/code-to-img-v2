import { Dispatch, SetStateAction, useCallback, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const ExportModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl z-30" />
        <Dialog.Content className="bg-white dark:bg-zinc-900 max-w-[512px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-slate-900 dark:text-zinc-50">
          <Dialog.DialogTitle>Export your code</Dialog.DialogTitle>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const useExportModal = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => JSX.Element
] => {
  const [open, setOpen] = useState(false);

  const Modal = useCallback(() => {
    return <ExportModal open={open} onOpenChange={setOpen} />;
  }, [open]);

  return [open, setOpen, Modal];
};
