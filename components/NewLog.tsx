"use client"
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
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from 'react-icons/gr';
import { DatePicker } from "./DatePicker";
import { ChangeEvent, useState } from "react";

export function NewDialog() {
  const [date, setDate] = useState<Date>()
  const [log, setLog] = useState({
    hour: 0,
    date: date,
    note: "",
  });

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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="hours" className="text-right">
              Hours
            </label>
            <input
              id="hours"
              type="number"
              value={log.hour}
              onChange={(e: any) => setLog({ ...log, hour: e.value })}
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
              onChange={(e: any) => setLog({ ...log, note: e.value })}
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
