"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  FileText,
  PawPrintIcon as Paw,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPortalPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome, John Smith
        </h1>
        <p className="text-muted-foreground">
          Manage your pets, appointments, and medical records
        </p>
      </motion.div>

      {/* Dashboard Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* My Pets */}
        <Card className="animate-transition hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Pets</CardTitle>
            <Paw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Registered pets in your account
            </p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link
                href="/client-portal/pets"
                className="flex items-center w-full"
              >
                <Paw className="mr-2 h-4 w-4" />
                View Pets
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card className="animate-transition hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Appointments
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Scheduled for the next 30 days
            </p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link
                href="/client-portal/appointments"
                className="flex items-center w-full"
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                View Appointments
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Medical Records */}
        <Card className="animate-transition hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Medical Records
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Total medical records
            </p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link
                href="/client-portal/medical-records"
                className="flex items-center w-full"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Records
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Next Reminder */}
        <Card className="animate-transition hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Reminder</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">Vaccination Due</div>
            <p className="text-xs text-muted-foreground">Max - May 25, 2023</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link
                href="/client-portal/appointments/new"
                className="flex items-center w-full"
              >
                <Plus className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <Card className="animate-transition hover:shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Recent appointments and medical updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Annual Checkup Completed
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Max - April 15, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Vaccination Record Updated
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Bella - April 10, 2023
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
