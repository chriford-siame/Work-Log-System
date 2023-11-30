import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Logs() {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className=" w-1/3 text-center">Date</TableHead>
                        <TableHead className=" w-1/3 text-center">Hours</TableHead>
                        <TableHead className=" w-1/3 text-center">Note</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className='border-botto'>
                        <TableCell className="text-center">{new Date(Date.now()).toISOString()}</TableCell>
                        <TableCell className="text-center">7</TableCell>
                        <TableCell className="text-center">I worked all day!</TableCell>
                    </TableRow>
                    <TableRow className='border-botto'>
                        <TableCell className="text-center">{new Date(Date.now()).toISOString()}</TableCell>
                        <TableCell className="text-center">7</TableCell>
                        <TableCell className="text-center">I worked all day!</TableCell>
                    </TableRow>
                    <TableRow className='border-botto'>
                        <TableCell className="text-center">{new Date(Date.now()).toISOString()}</TableCell>
                        <TableCell className="text-center">7</TableCell>
                        <TableCell className="text-center">I worked all day!</TableCell>
                    </TableRow>
                    <TableRow className='border-botto'>
                        <TableCell className="text-center">{new Date(Date.now()).toISOString()}</TableCell>
                        <TableCell className="text-center">7</TableCell>
                        <TableCell className="text-center">I worked all day!</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}
