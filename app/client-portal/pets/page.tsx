import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, FileText, CalendarDays } from "lucide-react";
import Link from "next/link";

// Sample data
const pets = [
  {
    id: 1,
    name: "Max",
    species: "Dog",
    breed: "Golden Retriever",
    age: 5,
    weight: "65 lbs",
    lastCheckup: "April 15, 2023",
    nextVaccination: "May 25, 2023",
    image: "/mascotas/golde1.webp",
  },
  {
    id: 2,
    name: "Bella",
    species: "Cat",
    breed: "Siamese",
    age: 3,
    weight: "10 lbs",
    lastCheckup: "April 10, 2023",
    nextVaccination: "October 10, 2023",
    image: "/mascotas/siames1.webp",
  },
  {
    id: 2,
    name: "Tobby",
    species: "Perro",
    breed: "French Puddle",
    age: 3,
    weight: "13 lbs",
    lastCheckup: "April 10, 2023",
    nextVaccination: "October 10, 2023",
    image: "/mascotas/puddle1.webp",
  },
];

export default function PetsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mis mascotas</h1>
          <p className="text-muted-foreground">
            Maneje sus mascotas y su informacion
          </p>
        </div>
        <Button className="animate-transition" asChild>
          <Link href="/client-portal/pets/new">
            <Plus className="mr-2 h-4 w-4" /> Registrar Nueva Mascota
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <Card key={pet.id} className="animate-transition">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{pet.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {pet.age} años
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Especie:</span>
                  <span>{pet.species}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Raza:</span>
                  <span>{pet.breed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Peso:</span>
                  <span>{pet.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Ultima revision:
                  </span>
                  <span>{pet.lastCheckup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Siguien vacunacion:
                  </span>
                  <span>{pet.nextVaccination}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href={`/client-portal/medical-records?pet=${pet.id}`}>
                  <FileText className="mr-2 h-4 w-4" />
                  Registro Medico
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/client-portal/appointments/new">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Horarios Programados
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
