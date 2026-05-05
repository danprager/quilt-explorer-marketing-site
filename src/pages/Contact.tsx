import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Facebook, Instagram, Mail, Users } from "lucide-react";
import Navbar from "@/components/qe/Navbar";
import QEButton from "@/components/qe/QEButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contactHeader from "@/assets/contact-header.webp";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Quilt Explorer enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@quiltexplorer.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Contact — Quilt Explorer</title>
        <meta name="description" content="Get in touch with the Quilt Explorer team. Questions, feedback, or just to say hello — we'd love to hear from you." />
      </Helmet>
      <Navbar />
      <section className="bg-section-grey flex-1">
        <div className="container py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <figure>
              <img
                src={contactHeader}
                alt="Quilt Explorer"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </figure>

            <h1 className="mt-10 text-3xl sm:text-4xl md:text-6xl font-extrabold text-kona-pomegranate whitespace-nowrap">
              Hello from QE in Australia!!
            </h1>
            <p className="mt-6 text-lg text-charcoal/85">We'd love to hear from you.</p>
            <p className="mt-3 text-lg text-charcoal/85">
              Whether you have a question about quilt design, want to share feedback, or just say hello,
              the Quilt Explorer team is here to help.
            </p>
            <p className="mt-3 text-lg text-charcoal/85">
              Send us a message and we'll get back to you as soon as we can.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">Get in touch</h2>

            <p className="mt-4 text-lg text-charcoal/85">
              <span className="font-bold">Email:</span>{" "}
              <a href="mailto:hello@quiltexplorer.com" className="text-kona-pomegranate underline hover:no-underline">
                hello@quiltexplorer.com
              </a>
            </p>

            <div className="mt-4">
              <p className="text-lg font-bold text-charcoal">Socials</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61573348171046"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook page"
                  className="inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
                >
                  <Facebook className="h-4 w-4 text-kona-capri-deep" />
                  <span className="text-sm font-bold text-kona-capri-deep">Facebook Page</span>
                </a>
                <a
                  href="https://www.facebook.com/groups/2438672756618317"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook community group"
                  className="inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
                >
                  <Users className="h-4 w-4 text-kona-capri-deep" />
                  <span className="text-sm font-bold text-kona-capri-deep">Facebook Group</span>
                </a>
                <a
                  href="https://instagram.com/quiltexplorerdotcom"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
                >
                  <Instagram className="h-4 w-4 text-kona-capri-deep" />
                  <span className="text-sm font-bold text-kona-capri-deep">Instagram</span>
                </a>
              </div>
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              <span className="font-bold">General enquiries:</span> use the form below
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">Message form</h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 rounded-2xl border border-border bg-card shadow-soft p-6 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your email address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <QEButton type="submit" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Send message
              </QEButton>
            </form>

            <p className="mt-10 text-lg text-charcoal/85">Thank you for visiting Quilt Explorer.</p>
            <p className="mt-2 text-lg text-charcoal/85">
              We're grateful to be part of your quilting journey!
            </p>
          </article>
        </div>
      </section>

      <footer className="bg-charcoal text-kona-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Quilt Explorer. Your magic kaleidoscope for quilt design.
          </div>
          <a href="/terms" className="hover:underline">Terms and conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
