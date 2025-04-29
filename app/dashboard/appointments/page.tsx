"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, CalendarIcon, List } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample data
const appointments = [
  {
    id: "A001",
    patient: "Max (Golden Retriever)",
    owner: "John Smith",
    date: "2023-05-15",
    time: "10:00 AM",
    type: "Annual Checkup",
    veterinarian: "Dr. Johnson",
    status: "Scheduled",
  },
  {
    id: "A002",
    patient: "Luna (Siamese)",
    owner: "Sarah Johnson",
    date: "2023-05-15",
    time: "11:30 AM",
    type: "Vaccination",
    veterinarian: "Dr. Martinez",
    status: "Scheduled",
  },
  {
    id: "A003",
    patient: "Rocky (German Shepherd)",
    owner: "Michael Brown",
    date: "2023-05-15",
    time: "2:00 PM",
    type: "Surgery",
    veterinarian: "Dr. Wilson",
    status: "Confirmed",
  },
  {
    id: "A004",
    patient: "Bella (Labrador)",
    owner: "Emily Davis",
    date: "2023-05-16",
    time: "9:30 AM",
    type: "Dental Cleaning",
    veterinarian: "Dr. Johnson",
    status: "Scheduled",
  },
  {
    id: "A005",
    patient: "Oliver (Maine Coon)",
    owner: "David Wilson",
    date: "2023-05-16",
    time: "1:00 PM",
    type: "Checkup",
    veterinarian: "Dr. Martinez",
    status: "Cancelled",
  },
  {
    id: "A006",
    patient: "Charlie (Beagle)",
    owner: "Jessica Martinez",
    date: "2023-05-17",
    time: "11:00 AM",
    type: "Vaccination",
    veterinarian: "Dr. Wilson",
    status: "Scheduled",
  },
]

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "default"
      case "Confirmed":
        return "success"
      case "Cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <Button className="animate-transition">
          <Plus className="mr-2 h-4 w-4" /> New Appointment
        </Button>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar" className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar View
          </TabsTrigger>
          <TabsTrigger value="list" className="flex items-center">
            <List className="mr-2 h-4 w-4" />
            List View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-[300px_1fr]">
            <Card className="animate-transition">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
            <Card className="animate-transition">
              <CardHeader>
                <CardTitle>
                  Appointments for{" "}
                  {date?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardTitle>
                <CardDescription>Manage your appointments for the selected date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments
                    .filter((appointment) => appointment.date === "2023-05-15")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-start gap-4 p-3 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{appointment.patient}</h3>
                            <Badge variant={getStatusColor(appointment.status) as any}>{appointment.status}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {appointment.time} • {appointment.type} • {appointment.veterinarian}
                          </div>
                          <div className="text-sm text-muted-foreground">Owner: {appointment.owner}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="list">
          <Card className="animate-transition">
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>View and manage all scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Veterinarian</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-medium">{appointment.id}</TableCell>
                      <TableCell>{appointment.patient}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.type}</TableCell>
                      <TableCell>{appointment.veterinarian}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(appointment.status) as any}>{appointment.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
