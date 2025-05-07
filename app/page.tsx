"use client";

import { Button } from "@/components/ui/button";
import { PawPrintIcon as Paw } from "lucide-react";
import {
  Users,
  Briefcase,
  Calendar,
  Target,
  Code,
  Star,
  Facebook,
  Instagram,
  Github,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [stats, setStats] = useState({ users: 0, clinics: 0, appointments: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + Math.floor(Math.random() * 10),
        clinics: prev.clinics + Math.floor(Math.random() * 5),
        appointments: prev.appointments + Math.floor(Math.random() * 20),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
  });
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });

  const aboutAnimation = useAnimation();
  const featuresAnimation = useAnimation();
  const statsAnimation = useAnimation();
  const teamAnimation = useAnimation();

  useEffect(() => {
    if (aboutInView)
      aboutAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    if (featuresInView)
      featuresAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    if (statsInView)
      statsAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    if (teamInView)
      teamAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [aboutInView, featuresInView, statsInView, teamInView]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Paw className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">PawCare</span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="hover:bg-muted hover:scale-105 transition-transform"
              >
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary hover:bg-primary/80 hover:scale-105 shadow-md transition-all">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Hero Text */}
              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Bienvenido a la Nueva Era de la Gestión Veterinaria
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  PawCare no es solo un sistema, es el corazón digital de tu
                  clínica. Diseñado para veterinarios modernos, optimizado para
                  experiencias rápidas, fluidas y humanas.
                </motion.p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="/auth/register">
                      <Button
                        size="lg"
                        className="bg-primary shadow-lg hover:shadow-xl transition-all"
                      >
                        Empieza ahora
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="/auth/login">
                      <Button
                        size="lg"
                        variant="outline"
                        className="shadow-md hover:shadow-lg transition-all"
                      >
                        Iniciar sesión
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="Veterinary Care"
                  src="/layout1.jpeg"
                  width={600}
                  height={400}
                  priority
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg hover:scale-105 transition-transform"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutAnimation}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Sobre Nosotros
              </motion.h2>
              <motion.p
                className="max-w-[700px] mx-auto text-muted-foreground md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Conoce más sobre nuestra misión, las tecnologías que usamos y
                las características que hacen de PawCare una solución única.
              </motion.p>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-3">
              {/* Card 1: Objetivo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Nuestro Objetivo</h3>
                <p className="mt-2 text-muted-foreground">
                  Simplificar la gestión veterinaria y mejorar la experiencia
                  tanto para los veterinarios como para los dueños de mascotas.
                </p>
              </motion.div>

              {/* Card 2: Lenguajes Usados */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Lenguajes Usados</h3>
                <p className="mt-2 text-muted-foreground">
                  Utilizamos tecnologías modernas como React, Next.js, Tailwind
                  CSS y TypeScript para ofrecer una experiencia rápida y
                  confiable.
                </p>
              </motion.div>

              {/* Card 3: Características */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Características</h3>
                <p className="mt-2 text-muted-foreground">
                  Agenda inteligente, reportes en tiempo real, integración con
                  aplicaciones y mucho más para optimizar tu clínica.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0, y: 50 }}
          animate={featuresAnimation}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Novedades
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Descubre cómo PawCare puede transformar tu clínica veterinaria
                con herramientas modernas y eficientes.
              </p>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold">Nueva Agenda Inteligente</h3>
                <p className="mt-2 text-muted-foreground">
                  Organiza tus citas de manera más eficiente con nuestra nueva
                  agenda interactiva.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold">Reportes en Tiempo Real</h3>
                <p className="mt-2 text-muted-foreground">
                  Obtén métricas detalladas de tu clínica en tiempo real para
                  tomar mejores decisiones.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold">Integración con Apps</h3>
                <p className="mt-2 text-muted-foreground">
                  Conecta PawCare con tus aplicaciones favoritas para una
                  experiencia más fluida.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsAnimation}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Estadísticas en Tiempo Real
            </h2>
            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.users}
                </h3>
                <p className="text-muted-foreground">Usuarios registrados</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.clinics}
                </h3>
                <p className="text-muted-foreground">Clínicas activas</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-4xl font-bold text-primary">
                  {stats.appointments}
                </h3>
                <p className="text-muted-foreground">Citas programadas</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          ref={teamRef}
          initial={{ opacity: 0, y: 50 }}
          animate={teamAnimation}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
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
              {/* Team Member 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/member1.jpeg"
                  alt="Team Member"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Vsxn</h3>
                <p className="text-muted-foreground">CEO & Fundadora</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="http://facebook.com/janneralexander.garciaarteaga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/nt_1xs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/XeSuzu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/member2.webp"
                  alt="Team Member"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Juan Siguence</h3>
                <p className="text-muted-foreground">Diseñador UI/UX</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/member2.webp"
                  alt="Team Member"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Jose Pullaguari</h3>
                <p className="text-muted-foreground">Diseñador UI/UX</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg">
              ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>
              <textarea
                placeholder="Mensaje"
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                rows={5}
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Paw className="h-6 w-6 text-primary" />
            <p className="mt-2 text-sm text-muted-foreground">
              © 2025 PawCare. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold">Enlaces</h4>
            <Link href="#" className="hover:underline text-sm">
              Términos
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Privacidad
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Contacto
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold">Síguenos</h4>
            <Link
              href="https://twitter.com"
              className="hover:underline text-sm"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:underline text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:underline text-sm"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
