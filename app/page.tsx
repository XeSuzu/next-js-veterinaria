import { Button } from "@/components/ui/button"
import { PawPrintIcon as Paw } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Paw className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PawCare</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bienvenido a la Nueva Era de la Gestión Veterinaria
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  No es solo un sistema. Es el corazón digital de tu clínica.
                  </p>

                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Diseñado para veterinarios modernos, optimizado para experiencias rápidas, fluidas y humanas.
                  </p>

                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Gestiona todo — desde mascotas hasta métricas — con estilo, precisión y cero complicaciones.
                  </p>

                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/register">
                    <Button size="lg" className="animate-transition">
                      Empieza ahora
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="animate-transition">
                      Iniciar sesión
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Veterinary Care"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/images/layout.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Novedades</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                No es solo un sistema. Es el corazón digital de tu clínica.
                Diseñado para veterinarios modernos, optimizado para experiencias rápidas, fluidas y humanas.
                Gestiona todo — desde mascotas hasta métricas — con estilo, precisión y cero complicaciones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Una plataforma, todas las soluciones</h3>
                  <p className="text-muted-foreground">
                  Descubre una herramienta que piensa como tú y trabaja por ti.
                  Desde la recepción hasta el quirófano, cada parte de tu clínica conectada con tecnología que simplifica.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Agenda inteligente</h3>
                  <p className="text-muted-foreground">
                  Organiza tu día con un calendario que entiende tu ritmo.
                  Arrastra, suelta, programa y olvídate: los recordatorios harán el resto.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Análisis que inspiran decisiones</h3>
                  <p className="text-muted-foreground">
                  Mira el pulso de tu clínica en tiempo real.
                  </p>
                  <p className="text-muted-foreground">
                  Pacientes atendidos, rendimiento del equipo, días de mayor demanda...
                  </p>
                  <p className="text-muted-foreground">
                  Tu próxima mejora empieza con un gráfico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Paw className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 PawCare. All rights reserved.</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terminos
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
  )
}
