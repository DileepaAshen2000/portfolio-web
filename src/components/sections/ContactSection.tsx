"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

const contactLinks = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "dileepaashen81@gmail.com",
    href: "mailto:dileepaashen81@gmail.com",
    color: "#00D9FF",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "dileepa-ashen",
    href: "https://www.linkedin.com/in/dileepa-ashen-179534270/",
    color: "#6C63FF",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "DileepaAshen2000",
    href: "https://github.com/DileepaAshen2000",
    color: "#8B5CF6",
  },
  {
    icon: "fa-brands fa-medium",
    label: "Medium",
    value: "@ashen",
    href: "https://medium.com/@dileepaashen81",
    color: "#3B82F6",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // The destination email is passed in the template parameters
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id_here",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id_here",
        {
          from_name: formState.name,
          to_name: "Dileepa Ashen",
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          reply_to: formState.email,
          to_email: "dileepaa341@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_here"
      );

      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Contact"
          title="Establish Communication"
          subtitle="Let's build something extraordinary together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 mb-2">
              <h3
                className="text-lg font-semibold text-text-primary mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let&apos;s Connect
              </h3>
              <p
                className="text-sm text-text-muted leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out through any channel.
              </p>

              <div className="flex flex-col gap-3">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-white/5 hover:border-accent-cyan/15 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{
                        background: `${link.color}10`,
                        border: `1px solid ${link.color}20`,
                      }}
                    >
                      <i
                        className={`${link.icon}`}
                        style={{ color: link.color }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs text-text-muted uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-sm text-text-secondary group-hover:text-text-primary transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link.value}
                      </p>
                    </div>
                    <i className="fa-solid fa-arrow-right text-xs text-text-muted/30 ml-auto group-hover:text-accent-cyan/50 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-cyan/8 border border-accent-cyan/15 flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-accent-cyan text-sm" />
              </div>
              <div>
                <p
                  className="text-xs text-text-muted"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                >
                  LOCATION
                </p>
                <p
                  className="text-sm text-text-secondary"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Kalutara, Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h3
                className="text-lg font-semibold text-text-primary mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-text-muted mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted/40 focus:outline-none focus:border-accent-cyan/30 focus:bg-white/5 transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-text-muted mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted/40 focus:outline-none focus:border-accent-cyan/30 focus:bg-white/5 transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs text-text-muted mb-2 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted/40 focus:outline-none focus:border-accent-cyan/30 focus:bg-white/5 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Project discussion, opportunity, or just hello"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-text-muted mb-2 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted/40 focus:outline-none focus:border-accent-cyan/30 focus:bg-white/5 transition-all resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "idle" && (
                  <>
                    <i className="fa-solid fa-paper-plane text-xs" />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-xs" />
                    Transmitting...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <i className="fa-solid fa-check text-xs" />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <i className="fa-solid fa-exclamation-triangle text-xs" />
                    Failed — Try Again
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
