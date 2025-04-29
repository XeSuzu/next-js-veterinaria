"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Plus,
  Search,
  MoreHorizontal,
  FileEdit,
  Trash2,
  FileText,
  ChevronLeft,
  ChevronRight,
  PawPrintIcon as Paw,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample data
const clients = [
  {
    id: "C001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA",
    pets: 2,
    status: "Active",
  },
  {
    id: "C002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave, Somewhere, CA",
    pets: 1,
    status: "Active",
  },
  {
    id: "C003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 345-6789",
    address: "789 Pine Rd, Nowhere, CA",
    pets: 3,
    status: "Active",
  },
  {
    id: "C004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "(555) 456-7890",
    address: "101 Elm St, Everywhere, CA",
    pets: 1,
    status: "Active",
  },
  {
    id: "C005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "(555) 567-8901",
    address: "202 Maple Dr, Anywhere, CA",
    pets: 2,
    status: "Inactive",
  },
  {
    id: "C006",
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    phone: "(555) 678-9012",
    address: "303 Cedar Ln, Someplace, CA",
    pets: 1,
    status: "Active",
  },
  {
    id: "C007",
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    phone: "(555) 789-0123",
    address: "404 Birch Blvd, Otherplace, CA",
    pets: 4,
    status: "Active",
  },
  {
    id: "C008",
    name: "Sophia Thomas",
    email: "sophia.thomas@example.com",
    phone: "(555) 890-1234",
    address: "505 Walnut Way, Elsewhere, CA",
    pets: 2,
    status: "Inactive",
  },
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm),
  )

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <Button className="animate-transition">
          <Plus className="mr-2 h-4 w-4" /> Add Client
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search clients..."
            className="w-full sm:w-[300px] pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="rounded-md border animate-transition">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Pets</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Paw className="h-4 w-4 mr-1 text-primary" />
                      {client.pets}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={client.status === "Active" ? "default" : "secondary"}>{client.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>View details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Paw className="mr-2 h-4 w-4" />
                          <span>View pets</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileEdit className="mr-2 h-4 w-4" />
                          <span>Edit client</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete client</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>1</strong> to <strong>{filteredClients.length}</strong> of{" "}
            <strong>{filteredClients.length}</strong> clients
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="sm" className="w-8">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
