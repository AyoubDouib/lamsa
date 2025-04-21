"use client"
// Modules
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
// Icons
import { Leaf, Package, Recycle, ShieldCheck, Star, Users } from "lucide-react"
// Images
import LogoImage from "@/public/img/logo.jpg"

export default function LandingPage() {
  // State
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  // Colors
  const primaryColor = "#e1dcd5"
  const primaryDarker = "#c5bdb3"
  const textDark = "#333333"

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" style={{ color: primaryDarker }} />
            <span className="text-xl font-bold" style={{ color: textDark }}>
              Lamsa
            </span>
          </div>
          {/* Links */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#fonctionnalites"
              className="text-sm font-medium hover:text-gray-800"
              style={{ color: textDark }}
            >
              Fonctionnalités
            </Link>
            <Link href="#temoignages" className="text-sm font-medium hover:text-gray-800" style={{ color: textDark }}>
              Témoignages
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-gray-800" style={{ color: textDark }}>
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-800" style={{ color: textDark }}>
              Contact
            </Link>
          </nav>
          {/* Commander Button */}
          <button
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:opacity-90 transition-colors"
            style={{ backgroundColor: primaryDarker }}
          >
            Commander
          </button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-14 max-md:py-20" style={{ backgroundColor: "#f8f6f3" }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{ color: textDark }}
                  >
                    Des solutions d&apos;hygiène nomades et écologiques
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl mx-auto lg:mx-0">
                    Découvrez nos pochettes hygiéniques compactes contenant une variété de produits de soin et
                    d&apos;hygiène, conçues pour être pratiques, durables et accessibles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <button
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:opacity-90 transition-colors"
                    style={{ backgroundColor: primaryDarker }}
                  >
                    Découvrir nos produits
                  </button>
                  <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={LogoImage}
                  width={400}
                  height={400}
                  alt="Hero Image"
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="fonctionnalites" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium text-gray-900"
                  style={{ backgroundColor: primaryDarker }}
                >
                  Nos Avantages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: textDark }}>
                  Pourquoi choisir Lamsa?
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos pochettes hygiéniques sont conçues pour répondre à vos besoins quotidiens tout en respectant
                  l&apos;environnement.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white shadow-sm h-full">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: primaryDarker }}
                >
                  <Package className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: textDark }}>
                  Compact et Pratique
                </h3>
                <p className="text-center text-gray-700">
                  Nos pochettes sont conçues pour être facilement transportables et utilisables partout.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white shadow-sm h-full">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: primaryDarker }}
                >
                  <Leaf className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: textDark }}>
                  Écologique
                </h3>
                <p className="text-center text-gray-700">
                  Tous nos produits sont sélectionnés pour leur faible impact environnemental.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white shadow-sm h-full">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: primaryDarker }}
                >
                  <ShieldCheck className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: textDark }}>
                  Qualité Supérieure
                </h3>
                <p className="text-center text-gray-700">
                  Des produits de haute qualité pour prendre soin de vous au quotidien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#f8f6f3" }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: textDark }}>
                  Nos Pochettes Hygiéniques
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez notre gamme de pochettes adaptées à tous vos besoins.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Pochette ${item}`}
                      alt={`Product Image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold" style={{ color: textDark }}>
                      Pochette {item}
                    </h3>
                    <p className="text-sm text-gray-700">
                      Pochette description {item}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold" style={{ color: textDark }}>
                        120 MAD
                      </span>
                      <button
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm hover:opacity-90 transition-colors"
                        style={{ backgroundColor: primaryDarker }}
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium text-gray-900"
                  style={{ backgroundColor: primaryDarker }}
                >
                  Témoignages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: textDark }}>
                  Ce que nos clients disent
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez les expériences de nos clients avec les pochettes Lamsa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Yassine El Farhany",
                  text: "Ces pochettes sont devenues indispensables dans mon sac. Pratiques et écologiques, exactement ce que je cherchais!",
                },
                {
                  name: "Nour El Hayat",
                  text: "La qualité des produits est exceptionnelle. Je recommande vivement Lamsa à toutes mes amies.",
                },
                {
                  name: "Ayoub Douib",
                  text: "J'ai offert une pochette à mon ami, il en est ravie. Service client impeccable!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" style={{ color: primaryDarker }} />
                        ))}
                    </div>
                  </div>
                  <p className="mb-6 text-gray-700">"{testimonial.text}"</p>
                  <p className="font-bold" style={{ color: textDark }}>
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eco-friendly Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#f8f6f3" }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Eco-friendly"
                  width={400}
                  height={400}
                  alt="Produits écologiques Lamsa"
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <div
                    className="inline-block rounded-lg px-3 py-1 text-sm font-medium text-gray-900"
                    style={{ backgroundColor: primaryDarker }}
                  >
                    Engagement Écologique
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: textDark }}>
                    Notre engagement pour la planète
                  </h2>
                  <p className="max-w-[600px] text-gray-700 md:text-xl mx-auto lg:mx-0">
                    Chez Lamsa, nous nous engageons à réduire notre impact environnemental à chaque étape de notre
                    production.
                  </p>
                </div>
                <ul className="space-y-2 mx-auto lg:mx-0">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Recycle className="h-5 w-5" style={{ color: primaryDarker }} />
                    <span className="text-gray-700">Emballages recyclables et biodégradables</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Leaf className="h-5 w-5" style={{ color: primaryDarker }} />
                    <span className="text-gray-700">Ingrédients naturels et respectueux de l&apos;environnement</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Users className="h-5 w-5" style={{ color: primaryDarker }} />
                    <span className="text-gray-700">Partenariats avec des producteurs locaux</span>
                  </li>
                </ul>
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="w-fit rounded-md px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:opacity-90 transition-colors"
                    style={{ backgroundColor: primaryDarker }}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: textDark }}>
                  Prêt à essayer Lamsa?
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Commandez dès maintenant et profitez de la livraison gratuite pour votre première commande.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <button
                  className="w-full rounded-md px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:opacity-90 transition-colors"
                  style={{ backgroundColor: primaryDarker }}
                >
                  Commander maintenant
                </button>
                <p className="text-xs text-gray-700">Livraison disponible partout au Maroc</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#f8f6f3" }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: textDark }}>
                  Questions Fréquentes
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trouvez les réponses à vos questions sur nos produits et services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-md border border-gray-200 bg-white shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-3"
                  onClick={() => toggleAccordion("item-1")}
                >
                  <h3 className="text-base font-medium" style={{ color: textDark }}>
                    Quels produits contiennent vos pochettes?
                  </h3>
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
                    className={`h-5 w-5 transition-transform ${openAccordion === "item-1" ? "rotate-180" : ""}`}
                    style={{ color: primaryDarker }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openAccordion === "item-1" && (
                  <div className="px-4 py-3 pt-0 text-gray-700 border-t border-gray-100">
                    Nos pochettes contiennent une sélection de produits d&apos;hygiène essentiels comme des lingettes
                    biodégradables, du gel hydroalcoolique, des mouchoirs, des protections périodiques, et d&apos;autres
                    produits selon le type de pochette choisi.
                  </div>
                )}
              </div>
              <div className="rounded-md border border-gray-200 bg-white shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-3"
                  onClick={() => toggleAccordion("item-2")}
                >
                  <h3 className="text-base font-medium" style={{ color: textDark }}>
                    Comment sont fabriqués vos produits?
                  </h3>
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
                    className={`h-5 w-5 transition-transform ${openAccordion === "item-2" ? "rotate-180" : ""}`}
                    style={{ color: primaryDarker }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openAccordion === "item-2" && (
                  <div className="px-4 py-3 pt-0 text-gray-700 border-t border-gray-100">
                    Tous nos produits sont fabriqués avec des matériaux de haute qualité et respectueux de
                    l&apos;environnement. Nous travaillons avec des fournisseurs locaux autant que possible pour réduire
                    notre empreinte carbone.
                  </div>
                )}
              </div>
              <div className="rounded-md border border-gray-200 bg-white shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-3"
                  onClick={() => toggleAccordion("item-3")}
                >
                  <h3 className="text-base font-medium" style={{ color: textDark }}>
                    Quels sont les délais de livraison?
                  </h3>
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
                    className={`h-5 w-5 transition-transform ${openAccordion === "item-3" ? "rotate-180" : ""}`}
                    style={{ color: primaryDarker }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openAccordion === "item-3" && (
                  <div className="px-4 py-3 pt-0 text-gray-700 border-t border-gray-100">
                    Les délais de livraison varient entre 2 et 5 jours ouvrables selon votre localisation au Maroc. Nous
                    proposons également une option de livraison express pour certaines zones.
                  </div>
                )}
              </div>
              <div className="rounded-md border border-gray-200 bg-white shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-3"
                  onClick={() => toggleAccordion("item-4")}
                >
                  <h3 className="text-base font-medium" style={{ color: textDark }}>
                    Puis-je personnaliser ma pochette?
                  </h3>
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
                    className={`h-5 w-5 transition-transform ${openAccordion === "item-4" ? "rotate-180" : ""}`}
                    style={{ color: primaryDarker }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openAccordion === "item-4" && (
                  <div className="px-4 py-3 pt-0 text-gray-700 border-t border-gray-100">
                    Oui, nous proposons un service de personnalisation pour les commandes de plus de 10 pochettes.
                    Contactez-nous pour plus d&apos;informations sur les options disponibles.
                  </div>
                )}
              </div>
              <div className="rounded-md border border-gray-200 bg-white shadow-sm">
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-3"
                  onClick={() => toggleAccordion("item-5")}
                >
                  <h3 className="text-base font-medium" style={{ color: textDark }}>
                    Quelle est votre politique de retour?
                  </h3>
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
                    className={`h-5 w-5 transition-transform ${openAccordion === "item-5" ? "rotate-180" : ""}`}
                    style={{ color: primaryDarker }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openAccordion === "item-5" && (
                  <div className="px-4 py-3 pt-0 text-gray-700 border-t border-gray-100">
                    Nous acceptons les retours dans les 14 jours suivant la réception de votre commande si les produits
                    sont inutilisés et dans leur emballage d&apos;origine. Les frais de retour sont à la charge du
                    client.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:flex-row md:py-12 px-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6" style={{ color: primaryDarker }} />
              <span className="text-xl font-bold" style={{ color: textDark }}>
                Lamsa
              </span>
            </div>
            <p className="text-sm text-gray-700">Des solutions d&apos;hygiène nomades et écologiques pour tous.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium" style={{ color: textDark }}>
                Produits
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li>
                  <Link href="#" className="hover:underline">
                    Pochettes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Kits de voyage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Offres spéciales
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium" style={{ color: textDark }}>
                Entreprise
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li>
                  <Link href="#" className="hover:underline">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Notre mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Carrières
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium" style={{ color: textDark }}>
                Contact
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li>
                  <Link href="#" className="hover:underline">
                    contact@lamsa.ma
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    +212 5XX-XXXXXX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Casablanca, Maroc
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
            <p className="text-center text-sm text-gray-700 md:text-left">
              &copy; {new Date().getFullYear()} Lamsa. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-700 hover:underline">
                Conditions d&apos;utilisation
              </Link>
              <Link href="#" className="text-sm text-gray-700 hover:underline">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
