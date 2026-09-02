"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { type FormEvent, useState } from "react";

const contactLinks = [
  { icon: "fa-solid fa-location-dot", label: "Location", value: "Kalutara, Sri Lanka" },
  { icon: "fa-regular fa-envelope", label: "Email", value: "dileepaashen81@gmail.com", href: "mailto:dileepaashen81@gmail.com" },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: "dileepa-ashen", href: "https://www.linkedin.com/in/dileepa-ashen-179534270/" },
  { icon: "fa-brands fa-github", label: "GitHub", value: "DileepaAshen2000", href: "https://github.com/DileepaAshen2000" },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id_here",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id_here",
        { from_name: formState.name, to_name: "Ashen Edussuriya", from_email: formState.email, subject: formState.subject, message: formState.message, reply_to: formState.email, to_email: "dileepaashen81@gmail.com" },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_here"
      );
      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading-wrap">
        <div className="portfolio-container contact-heading-inner">
          <motion.header className="contact-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="portfolio-eyebrow">Contact</span>
            <h2>Let&apos;s build<br />something great</h2>
            <p>I&apos;m always open to discussing new opportunities, interesting projects, or collaborations. Feel free to reach out — I&apos;ll get back to you as soon as possible.</p>
            <i className="about-rule" aria-hidden="true" />
          </motion.header>
          <div className="contact-visual" aria-hidden="true">
            <div className="contact-bg-mark"><i /><i /><i /></div>
            <div className="contact-dots" />
            {/* <div className="contact-photo"><Image src="/Profile2.png" alt="" fill sizes="(max-width: 800px) 55vw, 430px" className="contact-photo-image" /></div> */}
          </div>
        </div>
      </div>

      <div className="contact-shell-wrap">
        <motion.div className="contact-shell-container" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }}>
          <div className="contact-shell">
            <aside className="contact-channels">
              <h3>Get in touch</h3><p>You can reach me through any of the following channels.</p>
              <div className="contact-link-list">
                {contactLinks.map((link) => {
                  const content = <><i className={link.icon} /><span><strong>{link.label}</strong><small>{link.value}</small></span></>;
                  return link.href ? <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={link.label}>{content}</a> : <div key={link.label}>{content}</div>;
                })}
              </div>
            </aside>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3><p>Fill out the form and I&apos;ll get back to you soon.</p>
              <div className="contact-form-row">
                <label>Your name<input required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Enter your name" /></label>
                <label>Your email<input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="Enter your email" /></label>
              </div>
              <label>Subject<input required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} placeholder="Enter subject" /></label>
              <label>Message<textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Write your message..." /></label>
              <div className="contact-submit-row">
                <button type="submit" disabled={status === "sending"}>
                  {status === "idle" && <>Send message <span>↗</span></>}
                  {status === "sending" && <>Sending <i className="fa-solid fa-circle-notch fa-spin" /></>}
                  {status === "sent" && <>Message sent <i className="fa-solid fa-check" /></>}
                  {status === "error" && <>Try again <i className="fa-solid fa-triangle-exclamation" /></>}
                </button>
                <small>I typically reply as soon as possible.</small>
              </div>
            </form>

            <aside className="contact-note">
              <h3>Let&apos;s connect and create impact together.</h3><i className="about-rule" aria-hidden="true" />
              <p>Whether you have a project in mind, need a technical collaborator, or just want to say hello — I&apos;d love to hear from you.</p>
              <div className="contact-note-dots" aria-hidden="true" /><i className="fa-regular fa-envelope contact-note-icon" aria-hidden="true" />
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
