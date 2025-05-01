"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data
const veterinarians = [
  {
    id: "V001",
    name: "Dra. Sarah Johnson",
    specialty: "General Practice",
    experience: "8 years",
    email: "sarah.johnson@pawcare.com",
    phone: "(555) 123-4567",
    availability: "Full-time",
    avatar: "/veterinarios/veterinario1.webp",
    initials: "SJ",
  },
  {
    id: "V002",
    name: "Dra. Emily Wilson",
    specialty: "Surgery",
    experience: "12 years",
    email: "michael.wilson@pawcare.com",
    phone: "(555) 234-5678",
    availability: "Full-time",
    avatar: "/veterinarios/veterinario2.webp",
    initials: "MW",
  },
  {
    id: "V003",
    name: "Dra. Emily Martinez",
    specialty: "Dermatology",
    experience: "6 years",
    email: "emily.martinez@pawcare.com",
    phone: "(555) 345-6789",
    availability: "Part-time",
    avatar: "/veterinarios/veterinario3.webp",
    initials: "EM",
  },
  {
    id: "V004",
    name: "Dra. Ashley Smith",
    specialty: "Cardiology",
    experience: "10 years",
    email: "david.thompson@pawcare.com",
    phone: "(555) 456-7890",
    availability: "Full-time",
    avatar: "/veterinarios/veterinario4.jpg",
    initials: "DT",
  },
  {
    id: "V005",
    name: "Dr. Johan Xeneize",
    specialty: "Neurology",
    experience: "9 years",
    email: "jessica.brown@pawcare.com",
    phone: "(555) 567-8901",
    availability: "Part-time",
    avatar: "/veterinarios/veterinario5i.webp",
    initials: "JB",
  },
  {
    id: "V006",
    name: "Dr. Robert Davis",
    specialty: "Dentistry",
    experience: "7 years",
    email: "robert.davis@pawcare.com",
    phone: "(555) 678-9012",
    availability: "Full-time",
    avatar: "/veterinarios/veterinrio6.webp",
    initials: "RD",
  },
];

export default function VeterinariansPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Veterinarians</h1>
        <Button className="animate-transition">
          <Plus className="mr-2 h-4 w-4" /> Add Veterinarian
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search veterinarians..."
              className="w-full sm:w-[300px] pl-8"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {veterinarians.map((vet) => (
            <Card key={vet.id} className="animate-transition">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={vet.avatar || "/placeholder.svg"}
                      alt={vet.name}
                    />
                    <AvatarFallback>{vet.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{vet.name}</CardTitle>
                    <CardDescription>{vet.specialty}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>{vet.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="truncate max-w-[180px]">{vet.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>{vet.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <Badge
                      variant={
                        vet.availability === "Full-time"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {vet.availability}
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex gap-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
