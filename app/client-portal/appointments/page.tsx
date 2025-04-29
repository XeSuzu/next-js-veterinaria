import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Plus, CalendarIcon, Clock, PawPrintIcon as Paw } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Sample data
const appointments = [
  {
    id: "A001",
    pet: "Max",
    petType: "Golden Retriever",
    date: "2023-05-25",
    time: "10:00 AM",
    type: "Vaccination",
    veterinarian: "Dr. Johnson",
    status: "Scheduled",
  },
  {
    id: "A002",
    pet: "Bella",
    petType: "Siamese",
    date: "2023-06-10",
    time: "2:30 PM",
    type: "Annual Checkup",
    veterinarian: "Dr. Martinez",
    status: "Scheduled",
  },
  {
    id: "A003",
    pet: "Max",
    petType: "Golden Retriever",
    date: "2023-04-15",
    time: "11:00 AM",
    type: "Annual Checkup",
    veterinarian: "Dr. Johnson",
    status: "Completed",
  },
  {
    id: "A004",
    pet: "Bella",
    petType: "Siamese",
    date: "2023-04-10",
    time: "9:30 AM",
    type: "Vaccination",
    veterinarian: "Dr. Wilson",
    status: "Completed",
  },
  {
    id: "A005",
    pet: "Max",
    petType: "Golden Retriever",
    date: "2023-03-22",
    time: "3:00 PM",
    type: "Dental Cleaning",
    veterinarian: "Dr. Martinez",
    status: "Completed",
  },
]

export default function AppointmentsPage() {
  const upcomingAppointments = appointments.filter((app) => app.status === "Scheduled")
  const pastAppointments = appointments.filter((app) => app.status === "Completed")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">View and manage your pet appointments</p>
        </div>
        <Button className="animate-transition" asChild>
          <Link href="/client-portal/appointments/new">
            <Plus className="mr-2 h-4 w-4" /> Schedule Appointment
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Appointments</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAppointments.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <CalendarIcon className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">No upcoming appointments</p>
                <p className="text-sm text-muted-foreground mb-6">
                  You don't have any scheduled appointments at the moment.
                </p>
                <Button asChild>
                  <Link href="/client-portal/appointments/new">
                    <Plus className="mr-2 h-4 w-4" /> Schedule Appointment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="animate-transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full p-2 bg-primary/10">
                          <CalendarIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{appointment.type}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {appointment.date} at {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center gap-1">
                          <Paw className="h-3 w-3 text-primary" />
                          <span className="font-medium">{appointment.pet}</span>
                          <span className="text-sm text-muted-foreground">({appointment.petType})</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{appointment.veterinarian}</div>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4">
            {pastAppointments.map((appointment) => (
              <Card key={appointment.id} className="animate-transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full p-2 bg-muted">
                        <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{appointment.type}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {appointment.date} at {appointment.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center gap-1">
                        <Paw className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium">{appointment.pet}</span>
                        <span className="text-sm text-muted-foreground">({appointment.petType})</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{appointment.veterinarian}</div>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Badge variant="outline">Completed</Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/client-portal/medical-records?appointment=${appointment.id}`}>View Record</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-[300px_1fr]">
            <Card className="animate-transition">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View your appointments by date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={new Date("2023-05-25")} className="rounded-md border" />
              </CardContent>
            </Card>
            <Card className="animate-transition">
              <CardHeader>
                <CardTitle>Appointments for May 25, 2023</CardTitle>
                <CardDescription>1 appointment scheduled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Vaccination</h3>
                        <Badge>Scheduled</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">10:00 AM • Dr. Johnson</div>
                      <div className="text-sm text-muted-foreground">Pet: Max (Golden Retriever)</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
