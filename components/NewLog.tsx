import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from 'react-icons/gr';
import { DatePicker } from "./DatePicker";

export function NewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border border-dashed sm:w-72 w-full p-5 flex justify-center items-center hover:border-solid hover:border-spacing-1 cursor-pointer">
          <GrAdd />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A Time Log</DialogTitle>
          <DialogDescription>
            Time is your most valuable asset - Invest it wisely with our  Time Log App
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="date" className="text-right">
              Date
            </label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="hours" className="text-right">
              Hours
            </label>
            <input
              id="hours"
              type="number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="note" className="text-right">
              Note
            </label>
            <input
              id="note"
              type="text"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
