import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  DollarSign,
  LineChart,
  Users,
  PawPrintIcon as Paw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="animate-transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                <Paw className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +12.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card className="animate-transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +8.2%
                  </span>{" "}
                  from last week
                </p>
              </CardContent>
            </Card>
            <Card className="animate-transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +5.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card className="animate-transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    -3.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 animate-transition">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Revenue chart will be displayed here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 animate-transition">
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
                <CardDescription>You have 24 appointments today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Max (Golden Retriever)</p>
                        <p className="text-xs text-muted-foreground">Annual checkup • 10:00 AM</p>
                      </div>
                      <div className="text-xs text-muted-foreground">Dr. Johnson</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <LineChart className="h-10 w-10 mx-auto text-muted" />
            <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
            <p className="text-sm text-muted-foreground mt-2">Detailed analytics will be displayed here</p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <LineChart className="h-10 w-10 mx-auto text-muted" />
            <h3 className="mt-4 text-lg font-medium">Reports Dashboard</h3>
            <p className="text-sm text-muted-foreground mt-2">Detailed reports will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
