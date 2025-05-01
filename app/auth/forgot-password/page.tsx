"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PawPrintIcon as Paw, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Alert, AlertDescription } from "@/components/alert";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background p-4 animate-transition">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {/* Logo */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-2 group"
      >
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 20 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Paw className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </motion.div>
        <span className="text-xl font-bold tracking-tight text-primary group-hover:text-primary/80 transition-colors">
          PawCare
        </span>
      </Link>

      {/* Forgot Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white dark:bg-muted shadow-lg rounded-lg animate-transition">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center">
              <Paw className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Restablecer contraseña
            </CardTitle>
            <CardDescription>
              Ingresa tu correo electrónico y te enviaremos un enlace para
              restablecer tu contraseña.
            </CardDescription>
          </CardHeader>
          {isSubmitted ? (
            <CardContent className="space-y-4">
              <Alert className="bg-primary/10 border-primary/20">
                <AlertDescription>
                  Si existe una cuenta con ese correo, hemos enviado
                  instrucciones para restablecer tu contraseña.
                </AlertDescription>
              </Alert>
              <div className="flex justify-center">
                <Link href="/auth/login">
                  <Button variant="outline" className="mt-2">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al inicio de sesión
                  </Button>
                </Link>
              </div>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Por
                      favor espera
                    </>
                  ) : (
                    "Enviar enlace de restablecimiento"
                  )}
                </Button>
                <div className="text-center text-sm">
                  <Link
                    href="/auth/login"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Volver al inicio de sesión
                  </Link>
                </div>
              </CardFooter>
            </form>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
