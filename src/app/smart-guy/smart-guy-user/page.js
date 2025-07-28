"use client";
import Image from 'next/image'


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';

const users = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Khan",
    email: "ali.khan@example.com",
    city: "Lahore",
    country: "Pakistan",
    phone: "+92 300 1234567",
    created: "2025-06-01",
  },
  {
    id: 2,
    firstName: "Sara",
    lastName: "Ahmed",
    email: "sara.ahmed@example.com",
    city: "Karachi",
    country: "Pakistan",
    phone: "+92 300 9876543",
    created: "2025-06-15",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    country: "USA",
    phone: "+1 555 123 456",
    created: "2025-05-20",
  },
  {
    id: 4,
    firstName: "Fatima",
    lastName: "Iqbal",
    email: "fatima.iqbal@example.com",
    city: "Islamabad",
    country: "Pakistan",
    phone: "+92 311 1112233",
    created: "2025-06-05",
  },
  {
    id: 5,
    firstName: "Michael",
    lastName: "Smith",
    email: "michael.smith@example.com",
    city: "London",
    country: "UK",
    phone: "+44 7700 900123",
    created: "2025-06-03",
  },
  {
    id: 6,
    firstName: "Emma",
    lastName: "Jones",
    email: "emma.jones@example.com",
    city: "Sydney",
    country: "Australia",
    phone: "+61 400 555 888",
    created: "2025-05-25",
  },
  {
    id: 7,
    firstName: "Adeel",
    lastName: "Rehman",
    email: "adeel.rehman@example.com",
    city: "Multan",
    country: "Pakistan",
    phone: "+92 322 1234567",
    created: "2025-05-30",
  },
  {
    id: 8,
    firstName: "Maria",
    lastName: "Fernandez",
    email: "maria.fernandez@example.com",
    city: "Madrid",
    country: "Spain",
    phone: "+34 600 123 789",
    created: "2025-06-10",
  },
  {
    id: 9,
    firstName: "Liam",
    lastName: "Brown",
    email: "liam.brown@example.com",
    city: "Dublin",
    country: "Ireland",
    phone: "+353 89 123 4567",
    created: "2025-06-12",
  },
  {
    id: 10,
    firstName: "Noor",
    lastName: "Hassan",
    email: "noor.hassan@example.com",
    city: "Faisalabad",
    country: "Pakistan",
    phone: "+92 300 7654321",
    created: "2025-06-14",
  }
];

function SmartGuyUserPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='p-5' >
      <div className='flex justify-between'>
        <div>
          <div>
            <h3 className='text-3xl font-semibold'>Users</h3>
          </div>
          <div>
            <p className='font-1xl text-[#808080]'>Manage your user accounts</p>
          </div>
        </div>
        <Button variant="destructive" className="bg-[#1f2e96] hover:bg-#1f2e95 cursor-pointer px-6">  <Image
          src="/assests/smart-guy/plus.png"
          width={16}
          height={16}
          alt="Picture of the author"
        /> Add</Button>
      </div>
      <div className="border rounded-lg mt-7">
        <Table className="border-rounded-lg">
          <TableHeader>
            <TableRow className="border-b">
              <TableHead>#</TableHead>
              <TableHead className="px-10">First Name</TableHead>
              <TableHead className="px-10">Last Name</TableHead>
              <TableHead className="px-10">Email</TableHead>
              <TableHead className="px-10">City</TableHead>
              <TableHead className="px-10">Country</TableHead>
              <TableHead className="px-10">Phone</TableHead>
              <TableHead className="px-10">Created</TableHead>
              <TableHead className="px-10">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id} className="border-b">
                <TableCell>{index + 1}</TableCell>
                <TableCell className="px-10 py-4">{user.firstName}</TableCell>
                <TableCell className="px-10" >{user.lastName}</TableCell>
                <TableCell className="px-10">{user.email}</TableCell>
                <TableCell className="px-10">{user.city}</TableCell>
                <TableCell className="px-10">{user.country}</TableCell>
                <TableCell className="px-10">{user.phone}</TableCell>
                <TableCell className="px-10">{user.created}</TableCell>
                <TableCell>
                  <div className='flex justify-center items-center gap-4'>

                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <Image
                            src="/assests/smart-guy/edit.png"
                            width={20}
                            height={20}
                            alt="Picture of the author"
                            className='cursor-pointer'
                          />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when you&apos;re
                              done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">First Name</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.firstName || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Last Name</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.lastName || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Email</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.email || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">City</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.city || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Country</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.country || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Country</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.phone || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Created</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                defaultValue={user.created || ""}
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline" className="cursor-pointer">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" className="cursor-pointer">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                    <Image
                      src="/assests/smart-guy/delete.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className='cursor-pointer'
                      onClick={() => setSelectedUser(user)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  );
}

export default SmartGuyUserPage;
