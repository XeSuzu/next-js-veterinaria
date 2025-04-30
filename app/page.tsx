"use client";

import { Button } from "@/components/ui/button";
import { PawPrintIcon as Paw } from "lucide-react";
import { Users, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { FeatureCard } from "@/components/ui/featured-card";
import { Testimonial } from "@/components/ui/testimonial";
import { TeamMember } from "@/components/ui/team-member";
import { FAQ } from "@/components/ui/faq";
import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ users: 0, clinics: 0, appointments: 0 });

  useEffect(() => {
    // Simulación de estadísticas de prueba
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + Math.floor(Math.random() * 10),
        clinics: prev.clinics + Math.floor(Math.random() * 5),
        appointments: prev.appointments + Math.floor(Math.random() * 20),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Paw className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PawCare</span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/auth/login">
              <Button variant="ghost" className="hover:bg-muted">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="hover:bg-primary/80">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              {/* Hero Text */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bienvenido a la Nueva Era de la Gestión Veterinaria
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    PawCare no es solo un sistema, es el corazón digital de tu
                    clínica. Diseñado para veterinarios modernos, optimizado
                    para experiencias rápidas, fluidas y humanas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/register">
                    <Button
                      size="lg"
                      className="animate-transition shadow-lg hover:shadow-xl"
                    >
                      Empieza ahora
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="animate-transition shadow-lg hover:shadow-xl"
                    >
                      Iniciar sesión
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative flex items-center justify-center">
                <Image
                  alt="Veterinary Care"
                  src="/layout1.jpeg"
                  width={600}
                  height={400}
                  priority // ✅ mejora el LCP si está arriba del fold
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Novedades
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">
                  Descubre cómo PawCare puede transformar tu clínica veterinaria
                  con herramientas modernas y eficientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Feature 1 */}
              <FeatureCard
                title="Una plataforma, todas las soluciones"
                description="Desde la recepción hasta el quirófano, cada parte de tu clínica conectada con tecnología que simplifica."
                icon={
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                }
              />
              {/* Feature 2 */}
              <FeatureCard
                title="Agenda inteligente"
                description="Organiza tu día con un calendario que entiende tu ritmo. Arrastra, suelta, programa y olvídate."
                icon={
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                }
              />
              {/* Feature 3 */}
              <FeatureCard
                title="Análisis que inspiran decisiones"
                description="Mira el pulso de tu clínica en tiempo real. Pacientes atendidos, rendimiento del equipo y más."
                icon={<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Testimonios
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Lo que nuestros clientes dicen sobre PawCare.
              </p>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-3">
              <Testimonial
                name="Dr. Ana López"
                role="Veterinaria"
                quote="PawCare ha transformado completamente la forma en que gestionamos nuestra clínica. ¡Es increíblemente fácil de usar!"
              />
              <Testimonial
                name="Carlos Martínez"
                role="Propietario de mascotas"
                quote="Gracias a PawCare, puedo gestionar las citas de mis mascotas y acceder a su historial médico desde cualquier lugar."
              />
              <Testimonial
                name="Dr. Juan Pérez"
                role="Director de clínica"
                quote="La integración de reportes y métricas en tiempo real nos ha permitido tomar decisiones más informadas."
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Estadísticas en tiempo real
            </h2>
            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.users}
                </h3>
                <p className="text-muted-foreground">Usuarios registrados</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.clinics}
                </h3>
                <p className="text-muted-foreground">Clínicas activas</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.appointments}
                </h3>
                <p className="text-muted-foreground">Citas programadas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestro Equipo
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Conoce a las personas detrás de PawCare.
              </p>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-3">
              <TeamMember
                name="vsxn"
                role="CEO & Fundador"
                image="/member1.jpeg"
              />
              <TeamMember
                name="Juan Siguence"
                role="Diseñador UI/UX"
                image="/member2.webp"
              />
              <TeamMember
                name="Jose Pullaguari"
                role="Diseñador UI/UX"
                image="/member2.webp"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Listo para transformar tu clínica?
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 text-lg">
              Únete a PawCare y lleva la gestión de tu clínica al siguiente
              nivel.
            </p>
            <div className="mt-6">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Regístrate ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Paw className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © 2025 PawCare. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Términos
            </Link>
            <Link href="#" className="hover:underline">
              Privacidad
            </Link>
            <Link href="#" className="hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
