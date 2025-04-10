import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're on a mission to make cybersecurity education accessible, engaging, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2018 by a team of cybersecurity professionals and educators, Cyber Learning Platform was
                  born from a simple observation: traditional cybersecurity education wasn't keeping pace with
                  real-world threats.
                </p>
                <p>
                  We set out to create a learning experience that combines theoretical knowledge with practical,
                  hands-on training that mimics real-world scenarios. Our goal is to bridge the gap between academic
                  learning and industry demands.
                </p>
                <p>
                  Today, we've helped over 50,000 students worldwide develop the skills they need to succeed in
                  cybersecurity careers, from complete beginners to seasoned professionals looking to upskill.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Get in Touch</Button>
                </Link>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600&text=Our+Team"
                alt="Our Team"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            To empower individuals and organizations with the knowledge and skills needed to navigate the complex world
            of cybersecurity confidently and securely.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "Provide high-quality, up-to-date cybersecurity education that's accessible to learners of all backgrounds.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Foster a supportive community where students can learn from each other and industry professionals.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Maintain the highest standards in our curriculum, ensuring our students are prepared for real-world challenges.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <value.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Industry-experienced instructors with real-world expertise",
              "Hands-on virtual labs that simulate real environments",
              "Curriculum aligned with industry certifications",
              "Flexible learning options to fit your schedule",
              "Regular updates to keep pace with evolving threats",
              "Community support and networking opportunities",
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Former CISO with 15+ years of experience in cybersecurity.",
              },
              {
                name: "Sarah Chen",
                role: "Lead Instructor",
                bio: "Certified ethical hacker and security researcher.",
              },
              {
                name: "Michael Rodriguez",
                role: "Curriculum Director",
                bio: "PhD in Computer Science with focus on network security.",
              },
              {
                name: "Priya Patel",
                role: "Community Manager",
                bio: "Cybersecurity advocate with background in education.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="h-64 bg-slate-200">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of cybersecurity learners and take the first step toward a more secure future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              Browse Courses
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

