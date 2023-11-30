"use client"
import React, { useState } from 'react'
import dayjs from 'dayjs'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from '@/lib/utils';

export default function Calendar() {
    const getDayInMonth = (year = dayjs().year(), month = dayjs().month()) => {
        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = dayjs().endOf('month');
        const datesArray = [];
        for (let i = startDate.date(); i <= endDate.date(); i++) {
            const date = startDate.date(i).format('YYYY-MM-DD');
            datesArray.push(date)
        }
        return datesArray;
    }
    const getColor = (value: number) => {
        if (value === 0) {
            return "bg-muted";
        } else if (value < 5) {
            return "bg-warning";
        } else if (value < 10) {
            return "bg-success";
        } else {
            return "bg-success";
        }
    }
    const hour = 10;
    return (
        <div className='gap-2 flex flex-wrap justify-between items-center border border-dashed p-10 mt-10'>
            {getDayInMonth().map((value, index) => {
                return (
                    <HoverCard key={index}>
                        <HoverCardTrigger>
                            <div className={cn("h-5 w-5 rounded-sm cursor-pointer", getColor(hour))}></div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            {hour || 0} hours on {value}
                        </HoverCardContent>
                    </HoverCard>
                )
            })}
        </div>
    );
}
