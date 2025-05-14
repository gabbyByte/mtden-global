import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Gift,
  MapPin,
  Package,
  ShoppingBag,
  Shirt,
  Pill,
  Car,
  CreditCard,
  Phone,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">MTDEN GLOBAL</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium transition-colors hover:text-primary">
              Why Choose Us
            </Link>
            <Link href="#chauffeur" className="text-sm font-medium transition-colors hover:text-primary">
              Chauffeur Services
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-neutral-50 to-neutral-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Need Reliable Errands and Delivery Services in Nairobi?
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    MTDEN Global Has You Covered! Running a business or a busy life? Let us take the load off your
                    shoulders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="px-8">
                    <Link href="#contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="MTDEN Global Services"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm">Our Mission & Vision</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  To be the leading and most trusted provider of personalized shopping and errands solutions in Africa,
                  simplifying everyday life through reliability, efficiency, and exceptional customer care.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-gray-500">
                      To deliver reliable, convenient, and personalized shopping and errands services that enhance our
                      clients' daily lives, driven by integrity, speed, and a commitment to excellence.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Our Promise</h3>
                    <p className="text-gray-500">
                      We offer fast, reliable, and professional errands and delivery services, tailored to your needs.
                      Our commitment is to simplify your life through exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm">Our Offerings</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of errands and delivery services to meet your needs.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 pt-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Collections</h3>
                  <p className="text-sm text-gray-500 text-center">From offices, stores, or homes – we pick it up!</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Parcel Delivery</h3>
                  <p className="text-sm text-gray-500 text-center">Safe and timely delivery across Nairobi.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">E-commerce Fulfillment</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Focus on sales, we'll handle packaging and last-mile delivery.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Banking Services</h3>
                  <p className="text-sm text-gray-500 text-center">Save time with secure banking errands.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Grocery Shopping</h3>
                  <p className="text-sm text-gray-500 text-center">Fresh groceries delivered right to your doorstep.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <Gift className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Gift Delivery</h3>
                  <p className="text-sm text-gray-500 text-center">Surprise your loved ones, we'll make it special.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <Shirt className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Dry-cleaning Services</h3>
                  <p className="text-sm text-gray-500 text-center">Look sharp without leaving home.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <Pill className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Prescription Pickup</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Health essentials delivered confidentially and promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="why-us">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm">Our Advantages</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose MTDEN Global?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We pride ourselves on delivering exceptional service that sets us apart.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Same-day service available</h3>
                      <p className="text-gray-500">
                        We understand urgency. Count on us for prompt, same-day delivery when you need it most.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Courteous, uniformed staff</h3>
                      <p className="text-gray-500">
                        Our professional team represents your business with the utmost respect and professionalism.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Real-time updates and tracking</h3>
                      <p className="text-gray-500">
                        Stay informed with our advanced tracking system that provides real-time updates on your
                        deliveries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Why Choose MTDEN Global"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50" id="chauffeur">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="MTDEN Global Chauffeur Services"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm">Premium Transportation</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Chauffeur Services</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At MTDEN GLOBAL, we offer professional chauffeur services designed for comfort, safety, and
                    convenience.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Airport Transfers</h3>
                      <p className="text-gray-500">Reliable and punctual airport pickup and drop-off services.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Business Meetings</h3>
                      <p className="text-gray-500">
                        Make the right impression with our executive transportation services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Special Events</h3>
                      <p className="text-gray-500">Arrive in style to weddings, galas, and other special occasions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-neutral-800" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Personal Errands</h3>
                      <p className="text-gray-500">
                        Let our experienced drivers handle your personal transportation needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Book a Chauffeur</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900 text-white" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how MTDEN Global can simplify your life.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Name"
                      className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder:text-neutral-400"
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder:text-neutral-400"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder:text-neutral-400"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-neutral-300" />
                  <span className="text-neutral-300">+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-neutral-300" />
                  <span className="text-neutral-300">info@mtdenglobal.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-neutral-300" />
                  <span className="text-neutral-300">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Trusted by Businesses Across Nairobi
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our growing list of satisfied clients who rely on MTDEN Global for their errands and delivery
                  needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center justify-center p-4">
                    <Image
                      src="/placeholder.svg?height=80&width=140"
                      width={140}
                      height={80}
                      alt={`Client logo ${i}`}
                      className="grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium leading-relaxed text-gray-700">
                      "MTDEN Global has been a game-changer for our business. Their reliable delivery services have
                      allowed us to focus on growth while they handle all our logistics needs. Highly recommended!"
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="rounded-full bg-neutral-100">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">CEO, TechNova Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium leading-relaxed text-gray-700">
                      "The chauffeur services provided by MTDEN Global are exceptional. Professional drivers, immaculate
                      vehicles, and always on time. They've become our go-to for all corporate transportation needs."
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="rounded-full bg-neutral-100">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">David Mwangi</p>
                      <p className="text-sm text-gray-500">Operations Director, Horizon Hotels</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium leading-relaxed text-gray-700">
                      "As a busy professional, MTDEN Global's grocery shopping and delivery service has been a
                      lifesaver. Fresh products, accurate orders, and friendly service every time. I couldn't be
                      happier!"
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="rounded-full bg-neutral-100">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Grace Ochieng</p>
                      <p className="text-sm text-gray-500">Marketing Manager, Creative Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="#contact">Share Your Experience</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-neutral-50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between md:py-8">
          <div className="flex flex-col gap-6 md:w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">MTDEN GLOBAL</span>
            </Link>
            <p className="text-sm text-gray-500">
              The leading provider of personalized shopping and errands solutions in Africa, simplifying everyday life
              through reliability, efficiency, and exceptional customer care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex md:flex-wrap md:gap-12">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Parcel Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    E-commerce Fulfillment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Chauffeur Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <p className="text-sm text-gray-500">© 2025 MTDEN GLOBAL. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
