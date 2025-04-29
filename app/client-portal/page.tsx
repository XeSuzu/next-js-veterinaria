import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, FileText, PawPrintIcon as Paw, Plus } from "lucide-react"
import Link from "next/link"

export default function ClientPortalPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, John Smith</h1>
        <p className="text-muted-foreground">Manage your pets, appointments, and medical records</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Pets</CardTitle>
            <Paw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Registered pets in your account</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/client-portal/pets" className="flex items-center w-full">
                <Paw className="mr-2 h-4 w-4" />
                View Pets
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="animate-transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Scheduled for the next 30 days</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/client-portal/appointments" className="flex items-center w-full">
                <CalendarDays className="mr-2 h-4 w-4" />
                View Appointments
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="animate-transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medical Records</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Total medical records</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/client-portal/medical-records" className="flex items-center w-full">
                <FileText className="mr-2 h-4 w-4" />
                View Records
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="animate-transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Reminder</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Vaccination Due</div>
            <p className="text-xs text-muted-foreground">Max - May 25, 2023</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/client-portal/appointments/new" className="flex items-center w-full">
                <Plus className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-transition">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Recent appointments and medical updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Annual Checkup Completed</p>
                  <p className="text-xs text-muted-foreground">Max - April 15, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Vaccination Record Updated</p>
                  <p className="text-xs text-muted-foreground">Bella - April 10, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Dental Cleaning Completed</p>
                  <p className="text-xs text-muted-foreground">Max - March 22, 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-transition">
          <CardHeader>
            <CardTitle>My Pets</CardTitle>
            <CardDescription>Quick overview of your registered pets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <Paw className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Max</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/client-portal/pets/1">View</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Golden Retriever • 5 years old</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <Paw className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Bella</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/client-portal/pets/2">View</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Siamese Cat • 3 years old</p>
                </div>
              </div>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/client-portal/pets/new" className="flex items-center justify-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Register New Pet
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
