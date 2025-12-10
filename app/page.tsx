"use client";

import Link from "next/link";
import { Trophy, Users, Calendar, Bell, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Verificamos si el usuario está logueado
    const loggedUser = pb.authStore.model;
    console.log("user: " + loggedUser);
    if (loggedUser) {
      setUser(loggedUser); // Si está logueado, guardamos el usuario
    }
  }, []);

  const handleProfileClick = () => {
    router.push("/profile"); // Redirigimos a la página de perfil
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">Fixturem</h1>
          </div>
          <nav className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#features">Características</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#about">Acerca de</Link>
            </Button>
            <Button asChild>
              {user ? (
                // Si hay un usuario logueado, mostramos el botón "Perfil"
                <Button onClick={handleProfileClick}>Perfil</Button>
              ) : (
                // Si no hay usuario logueado, mostramos el botón "Empezar"
                <Link href="/auth">Empezar</Link>
              )}
            </Button>
          </nav>
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild>
            <Link href="/tournaments/create">
              <Trophy className="mr-2 h-5 w-5" />
              Crear Torneo
            </Link>
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium">
            <Heart className="h-4 w-4" />
            Gratuito para la comunidad de ETEC UBA
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
            Organiza Torneos Escolares de Forma{" "}
            <span className="text-blue-600">Simple y Moderna</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 text-pretty leading-relaxed">
            Bienvenidos a <strong>Fixturem</strong>, una aplicación diseñada
            para gestionar torneos escolares de forma sencilla y eficiente. Aquí
            podrás crear, administrar o unirte a competencias locales, seguir
            resultados y vivir la emoción de cada partido desde un solo lugar.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/auth">
                <Zap className="mr-2 h-5 w-5" />
                Comenzar Ahora
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent"
              asChild
            >
              <Link href="#about">Saber Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gradient-to-b from-white to-blue-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Qué hace especial a Fixturem?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diseñado específicamente para la comunidad educativa, sin costos
              ni complicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Creación Rápida de Torneos
                </h4>
                <p className="text-gray-600">
                  Crea torneos en minutos: define nombre, categoría, reglas y
                  límite de inscripciones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Fixtures Automáticos</h4>
                <p className="text-gray-600">
                  El sistema genera automáticamente los enfrentamientos y
                  horarios del torneo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Gestión de Inscripciones
                </h4>
                <p className="text-gray-600">
                  Permite inscripciones individuales o por equipos con control
                  de cupos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Notificaciones en Tiempo Real
                </h4>
                <p className="text-gray-600">
                  Recibe avisos sobre cambios de horarios y actualizaciones de
                  partidos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Interfaz Intuitiva</h4>
                <p className="text-gray-600">
                  Diseño simple y accesible, sin necesidad de conocimientos
                  técnicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-400 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-cyan-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">100% Gratuito</h4>
                <p className="text-gray-600">
                  Sin suscripciones ni costos ocultos. Creado para nuestra
                  escuela.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4">
              ¿Por qué Fixturem en lugar de otras plataformas?
            </h3>
            <p className="text-center text-gray-600 mb-12">
              A diferencia de plataformas como Matcherino, Score7, Tourney o
              Copa Fácil...
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 text-red-900">
                  Otras Plataformas
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Orientadas a competencias profesionales</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Requieren suscripción o pago</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Interfaces complejas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>No adaptadas al entorno escolar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 text-green-900">
                  Fixturem
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Diseñado para torneos escolares</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Totalmente gratuito</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Interfaz simple e intuitiva</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Adaptado a la comunidad ETEC UBA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Sobre Fixturem</h3>
            <div className="bg-white rounded-lg shadow-lg p-8 text-left">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Para:</strong> El Colegio Técnico UBA
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Quiénes:</strong> Necesitan una forma moderna de
                gestionar inscripciones, fixtures, resultados y la comunicación
                con los participantes, evitando errores o desorganización de
                torneos.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>El producto:</strong> Fixturem es un sistema web
                desarrollado por Adan Coronel de la Escuela Técnica UBA, pensado
                para simplificar la organización de torneos amateur de cualquier
                tipo.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Qué hace:</strong> Permite registrar equipos, genera
                fixtures automáticos, envía notificaciones sobre cambios de
                horarios y actualizaciones de partidos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Nuestro enfoque:</strong> Simplicidad, accesibilidad y
                facilidad de uso, adaptado al entorno escolar y comunitario, sin
                necesidad de conocimientos técnicos ni costos adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            ¿Listo para organizar tu próximo torneo?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Únete a la comunidad ETEC UBA y comienza a disfrutar de una forma
            moderna y eficiente de gestionar competencias escolares.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            asChild
          >
            <Link href="/auth">
              <Trophy className="mr-2 h-5 w-5" />
              Comenzar Gratis
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            Desarrollado con <Heart className="inline h-4 w-4 text-red-500" />{" "}
            por Adan Coronel
          </p>
          <p className="text-sm text-gray-400">
            Escuela Técnica UBA © 2025 - Sistema de Gestión de Torneos Escolares
          </p>
        </div>
      </footer>
    </div>
  );
}
