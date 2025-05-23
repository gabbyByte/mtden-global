'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
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
  Wallet,
  CreditCard as PaymentIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Parallax from "@/components/animations/parallax";
import CountUp from "@/components/animations/count-up";
import ScrollProgress from "@/components/animations/scroll-progress";
import { openWhatsApp } from './contact';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fadeIn">
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="flex flex-col items-center">
              <Image 
                src="/mpesa-logo.png" 
                width={150} 
                height={80} 
                alt="M-Pesa Logo"
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Lipa Na M-Pesa Details</h3>
              <div className="space-y-4 w-full">
                <div className="flex flex-col p-3 border border-[#4CAF50]/30 rounded-lg bg-[#4CAF50]/5">
                  <span className="text-sm text-gray-500">Paybill Number</span>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">247247</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText("247247")}}
                      className="text-[#4CAF50] text-sm hover:text-[#4CAF50]/80"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col p-3 border border-[#4CAF50]/30 rounded-lg bg-[#4CAF50]/5">
                  <span className="text-sm text-gray-500">Account Number</span>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">0190180763452</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText("0190180763452")}}
                      className="text-[#4CAF50] text-sm hover:text-[#4CAF50]/80"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2 w-full">
                <p className="text-sm text-center text-gray-500">
                  After payment, please send your transaction details via WhatsApp for confirmation.
                </p>
                <Button asChild className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90">
                  <Link href={openWhatsApp("Hello! I've made a payment via M-Pesa. Here are my transaction details:")} target="_blank" rel="noopener noreferrer">
                    Confirm Payment via WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">

          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="MTDEN GLOBAL Logo"
                width={100}
                height={70}
                className="h-10 w-auto max-h-10 object-contain transition-all duration-300"
                priority
              />
            </Link>


          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#why-us" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Why Choose Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#chauffeur" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Chauffeur Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#payment" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Payment
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 btn-ripple">
              <Link href={openWhatsApp()} target="_blank" rel="noopener noreferrer">Get Started</Link>
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-gradient parallax-container">
          <div className="parallax-bg" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', opacity: 0.1 }}></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Need Reliable <span className="gradient-text">Errands and Delivery</span> Services in Nairobi?
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MTDEN Global Has You Covered! Running a business or a busy life? Let us take the load off your
                    shoulders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="px-8 bg-primary hover:bg-primary/90 btn-ripple relative overflow-hidden group">
                    <Link href={openWhatsApp("I'd like to learn more about your services.")} target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5 relative overflow-hidden">
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative animate-float">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse"></div>
                  <Image
                    src="/logo.jpeg"
                    width={550}
                    height={550}
                    alt="MTDEN Global Services"
                    className="relative rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M-Pesa Payment Banner - Attention-grabbing floating banner */}
        <div className="fixed bottom-6 right-6 z-40 max-w-sm animate-bounce-slow">
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="flex items-center gap-3 bg-[#4CAF50] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#43A047] transition-all duration-300 group"
          >
            <div className="bg-white p-2 rounded-full">
              {/* <Image 
                src="/mpesa-logo.png" 
                width={24} 
                height={24} 
                alt="M-Pesa" 
                className="min-w-[24px]"
              /> */}
            </div>
            <span className="font-medium">Pay with M-Pesa</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission & Vision</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    To be the leading and most trusted provider of personalized shopping and errands solutions in Africa,
                    simplifying everyday life through reliability, efficiency, and exceptional customer care.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <ScrollReveal direction="left" delay={200}>
                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-lg bg-secondary/50 border hover:shadow-lg transition-all duration-300">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To deliver reliable, convenient, and personalized shopping and errands services that enhance our
                        clients' daily lives, driven by integrity, speed, and a commitment to excellence.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={400}>
                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-lg bg-secondary/50 border hover:shadow-lg transition-all duration-300">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">Our Promise</h3>
                      <p className="text-muted-foreground">
                        We offer fast, reliable, and professional errands and delivery services, tailored to your needs.
                        Our commitment is to simplify your life through exceptional service.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={600}>
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  <div className="flex flex-col items-center p-4 rounded-lg border bg-white">
                    <CountUp end={50} suffix="+" className="text-4xl font-bold text-primary" />
                    <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg border bg-white">
                    <CountUp end={546} suffix="+" className="text-4xl font-bold text-primary" />
                    <p className="text-muted-foreground">Deliveries Made</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg border bg-white">
                    <CountUp end={98} suffix="%" className="text-4xl font-bold text-primary" />
                    <p className="text-muted-foreground">On-time Delivery</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg border bg-white">
                    <CountUp end={24} suffix="/7" className="text-4xl font-bold text-primary" />
                    <p className="text-muted-foreground">Customer Support</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30 parallax-container" id="services">
          <div className="parallax-bg" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', opacity: 0.05 }}></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Offerings</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Services</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a wide range of errands and delivery services to meet your needs.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 pt-8">
                {[
                  {
                    icon: <Package className="h-6 w-6" />,
                    title: "Collections",
                    description: "From offices, stores, or homes – we pick it up!",
                    delay: 100
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Parcel Delivery",
                    description: "Safe and timely delivery across Nairobi.",
                    delay: 200
                  },
                  {
                    icon: <ShoppingBag className="h-6 w-6" />,
                    title: "E-commerce Fulfillment",
                    description: "Focus on sales, we'll handle packaging and last-mile delivery.",
                    delay: 300
                  },
                  {
                    icon: <CreditCard className="h-6 w-6" />,
                    title: "Banking Services",
                    description: "Save time with secure banking errands.",
                    delay: 400
                  },
                  {
                    icon: <ShoppingBag className="h-6 w-6" />,
                    title: "Grocery Shopping",
                    description: "Fresh groceries delivered right to your doorstep.",
                    delay: 500
                  },
                  {
                    icon: <Gift className="h-6 w-6" />,
                    title: "Gift Delivery",
                    description: "Surprise your loved ones, we'll make it special.",
                    delay: 600
                  },
                  {
                    icon: <Shirt className="h-6 w-6" />,
                    title: "Dry-cleaning Services",
                    description: "Look sharp without leaving home.",
                    delay: 700
                  },
                  {
                    icon: <Pill className="h-6 w-6" />,
                    title: "Prescription Pickup",
                    description: "Health essentials delivered confidentially and promptly.",
                    delay: 800
                  }
                ].map((service, index) => (
                  <ScrollReveal key={index} delay={service.delay} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm service-card bg-white">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="why-us">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Advantages</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose MTDEN Global?</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      We pride ourselves on delivering exceptional service that sets us apart.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Clock className="h-6 w-6 text-primary" />,
                        title: "Same-day service available",
                        description: "We understand urgency. Count on us for prompt, same-day delivery when you need it most.",
                        delay: 200
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-primary" />,
                        title: "Courteous, uniformed staff",
                        description: "Our professional team represents your business with the utmost respect and professionalism.",
                        delay: 400
                      },
                      {
                        icon: <MapPin className="h-6 w-6 text-primary" />,
                        title: "Real-time updates and tracking",
                        description: "Stay informed with our advanced tracking system that provides real-time updates on your deliveries.",
                        delay: 600
                      }
                    ].map((advantage, index) => (
                      <ScrollReveal key={index} delay={advantage.delay} direction="left">
                        <div className="flex items-start gap-4 p-4 rounded-lg border bg-secondary/30 hover:bg-secondary/50 transition-colors">
                          {advantage.icon}
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold">{advantage.title}</h3>
                            <p className="text-muted-foreground">{advantage.description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse"></div>
                    <Image
                      src="/r3.png"
                      width={550}
                      height={550}
                      alt="Why Choose MTDEN Global"
                      className="relative rounded-lg object-cover shadow-lg"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Payment Section - Dedicated M-Pesa Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#4CAF50]/5" id="payment">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#4CAF50]/10 px-3 py-1 text-sm text-[#4CAF50] font-medium">Easy Payments</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple & Secure Payment Options</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer convenient payment methods to make your experience seamless.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-8 md:grid-cols-2 lg:gap-12 w-full max-w-4xl">
                <ScrollReveal direction="left" delay={200}>
                  <div className="flex flex-col h-full">
                    <div className="flex-1 space-y-4 p-6 rounded-t-xl bg-[#4CAF50] text-white">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Lipa Na M-Pesa</h3>
                        <Image 
                          src="/mpesa-logo.png" 
                          width={80} 
                          height={40} 
                          alt="M-Pesa Logo"
                          className="bg-white p-1 rounded-md"
                        />
                      </div>
                      <p className="opacity-90">
                        Quick, secure, and convenient mobile payments through Safaricom's M-Pesa service.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-b-xl border border-[#4CAF50]/30 shadow-md">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                            <span className="font-bold text-[#4CAF50]">1</span>
                          </div>
                          <p className="text-sm">Go to M-Pesa on your phone</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                            <span className="font-bold text-[#4CAF50]">2</span>
                          </div>
                          <p className="text-sm">Select "Lipa na M-Pesa" then "Paybill"</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                            <span className="font-bold text-[#4CAF50]">3</span>
                          </div>
                          <div>
                            <p className="text-sm">Enter Business Number:</p>
                            <p className="font-bold text-[#4CAF50]">247247</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                            <span className="font-bold text-[#4CAF50]">4</span>
                          </div>
                          <div>
                            <p className="text-sm">Enter Account Number:</p>
                            <p className="font-bold text-[#4CAF50]">0190180763452</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                            <span className="font-bold text-[#4CAF50]">5</span>
                          </div>
                          <p className="text-sm">Enter amount and complete payment</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => setShowPaymentModal(true)}
                        className="w-full mt-6 bg-[#4CAF50] hover:bg-[#43A047] text-white"
                      >
                        View Payment Details
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={400}>
                  <div className="flex flex-col space-y-6">
                    <div className="p-6 rounded-xl border bg-white shadow-md h-full">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">Other Payment Methods</h3>
                          <p className="text-muted-foreground">
                            We also accept cash payments upon delivery and bank transfers for your convenience.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-xl border bg-secondary/30 shadow-md">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Need Help with Payment?</h3>
                        <p className="text-muted-foreground">
                          Our customer support team is available to assist you with any payment-related queries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <Button asChild variant="outline" className="flex-1">
                            <Link href={openWhatsApp("I need help with payment")} target="_blank" rel="noopener noreferrer">
                              <Phone className="mr-2 h-4 w-4" /> Call Us
                            </Link>
                          </Button>
                          <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                            <Link href={`mailto:mtdenglobal@gmail.com?subject=Payment%20Assistance`}>
                              <Mail className="mr-2 h-4 w-4" /> Email Us
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-xl border bg-white shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                          <span className="font-medium">Secure Payments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                          <span className="font-medium">Instant Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={600}>
                <div className="mt-8 p-4 bg-[#4CAF50]/10 rounded-lg max-w-2xl mx-auto">
                  <p className="text-sm text-center text-muted-foreground">
                    After making a payment, please send your transaction details via WhatsApp for confirmation and faster processing of your order.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30 parallax-container" id="chauffeur">
          <div className="parallax-bg" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', opacity: 0.05 }}></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal direction="left" delay={200}>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse"></div>
                    <Image
                      src="/r4.png"
                      width={550}
                      height={550}
                      alt="MTDEN Global Chauffeur Services"
                      className="relative rounded-lg object-cover shadow-lg"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Premium Transportation</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Chauffeur Services</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      At MTDEN GLOBAL, we offer professional chauffeur services designed for comfort, safety, and
                      convenience.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Airport Transfers",
                        description: "Reliable and punctual airport pickup and drop-off services.",
                        delay: 200
                      },
                      {
                        title: "Business Meetings",
                        description: "Make the right impression with our executive transportation services.",
                        delay: 400
                      },
                      {
                        title: "Special Events",
                        description: "Arrive in style to weddings, galas, and other special occasions.",
                        delay: 600
                      },
                      {
                        title: "Personal Errands",
                        description: "Let our experienced drivers handle your personal transportation needs.",
                        delay: 800
                      }
                    ].map((service, index) => (
                      <ScrollReveal key={index} delay={service.delay} direction="right">
                        <div className="flex items-start gap-4 p-4 rounded-lg border bg-white hover:bg-secondary/50 transition-colors group">
                          <Car className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild className="bg-primary hover:bg-primary/90 btn-ripple group">
                      <Link href={openWhatsApp("I'd like to book a chauffeur service.")} target="_blank" rel="noopener noreferrer">
                        Book a Chauffeur
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>

                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground parallax-container" id="contact">
          <div className="parallax-bg" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', opacity: 0.05 }}></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to discuss how MTDEN Global can simplify your life.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-8 flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
                    <div className="flex flex-col items-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                      <Phone className="h-8 w-8 text-primary-foreground mb-2" />
                      <span className="text-xl font-bold text-primary-foreground">+254 799 707412</span>
                      <span className="text-primary-foreground/70 text-sm mt-1">Call or WhatsApp</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                      <Mail className="h-8 w-8 text-primary-foreground mb-2" />
                      <span className="text-xl font-bold text-primary-foreground">mtdenglobal@gmail.com</span>
                      <span className="text-primary-foreground/70 text-sm mt-1">Email Us Anytime</span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-ripple text-lg px-8 py-6">
                    <Link href={openWhatsApp()} target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-6 w-6"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat with us on WhatsApp
                    </Link>
                  </Button>

                  <p className="mt-6 text-primary-foreground/80">
                    We're available 24/7 to assist you with all your errands and delivery needs.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex flex-col md:flex-row gap-8 mt-8">
                  <div className="flex items-center gap-2 group">
                    <Phone className="h-5 w-5 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                    <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">+254 799 707412</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Mail className="h-5 w-5 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                    <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">mtdenglobal@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <MapPin className="h-5 w-5 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                    <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">Nairobi, Kenya</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Trusted by Businesses Across Nairobi
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our growing list of satisfied clients who rely on MTDEN Global for their errands and delivery
                    needs.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mt-8">
                <ScrollReveal delay={100}>
                  <div className="flex items-center justify-center p-4 rounded-lg border hover:border-primary/30 transition-all">
                    <Image
                      src="/c1.png"
                      width={140}
                      height={80}
                      alt="Client logo 1"
                      className=" transition-all "
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="flex items-center justify-center p-4 rounded-lg border hover:border-primary/30 transition-all">
                    <Image
                      src="/c2.png"
                      width={140}
                      height={80}
                      alt="Client logo 2"
                      className=" transition-all "
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="flex items-center justify-center p-4 rounded-lg border hover:border-primary/30 transition-all">
                    <Image
                                           src="/c3.png"
                      width={140}
                      height={80}
                      alt="Client logo 3"
                      className=" transition-all"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="flex items-center justify-center p-4 rounded-lg border hover:border-primary/30 transition-all">
                    <Image
                      src="/c4.png"
                      width={140}
                      height={80}
                      alt="Client logo 4"
                      className=" transition-all"
                    />
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={500}>
                  <div className="flex items-center justify-center p-4 rounded-lg border hover:border-primary/30 transition-all">
                    <Image
                      src="/c6.jpg"
                      width={140}
                      height={80}
                      alt="Client logo 6"
                      className="transition-all "
                    />
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30 parallax-container">
          <div className="parallax-bg" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', opacity: 0.05 }}></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our clients have to say about our services.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                {[
                  {
                    quote: "MTDEN Global has been a game-changer for our business. Their reliable delivery services have allowed us to focus on growth while they handle all our logistics needs. Highly recommended!",
                    name: "Sarah Johnson",
                    title: "CEO, TechNova Solutions",
                    delay: 200
                  },
                  {
                    quote: "The chauffeur services provided by MTDEN Global are exceptional. Professional drivers, immaculate vehicles, and always on time. They've become our go-to for all corporate transportation needs.",
                    name: "David Mwangi",
                    title: "Operations Director, Horizon Hotels",
                    delay: 400
                  },
                  {
                    quote: "As a busy professional, MTDEN Global's grocery shopping and delivery service has been a lifesaver. Fresh products, accurate orders, and friendly service every time. I couldn't be happier!",
                    name: "Grace Ochieng",
                    title: "Marketing Manager, Creative Solutions",
                    delay: 600
                  }
                ].map((testimonial, index) => (
                  <ScrollReveal key={index} delay={testimonial.delay}>
                    <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm testimonial-card h-full">
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
                              className="h-5 w-5 text-accent"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-lg font-medium leading-relaxed text-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="mt-6 flex items-center space-x-4">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Client Avatar"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={800}>
                <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5 btn-ripple">
                  <Link href="#contact">Share Your Experience</Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-secondary/50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between md:py-8">
          <div className="flex flex-col gap-6 md:w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl gradient-text">MTDEN GLOBAL</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The leading provider of personalized shopping and errands solutions in Africa, simplifying everyday life
              through reliability, efficiency, and exceptional customer care.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:mtdenglobal@gmail.com" className="text-sm hover:text-primary transition-colors">
                  mtdenglobal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+254799707412" className="text-sm hover:text-primary transition-colors">
                  +254 799 707412
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex md:flex-wrap md:gap-12">
            <div className="space-y-3">
              <h3 className="text-base font-medium text-primary">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Parcel Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    E-commerce Fulfillment
                  </Link>
                </li>
                <li>
                  <Link href="#chauffeur" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Chauffeur Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium text-primary">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#payment" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Payment Options
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium text-primary">Payment</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPaymentModal(true)}
                    className="text-sm text-muted-foreground hover:text-[#4CAF50] transition-colors group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-[#4CAF50] mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    M-Pesa Payment
                  </button>
                </li>
                <li>
                  <Link href="#payment" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <Link href={openWhatsApp("I need help with payment")} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all"></span>
                    Payment Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 bg-white">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <p className="text-sm text-muted-foreground">© 2025 MTDEN GLOBAL. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5 hover:scale-110 transition-transform"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5 hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="h-5 w-5 hover:scale-110 transition-transform"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS for the slow bounce animation */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}


