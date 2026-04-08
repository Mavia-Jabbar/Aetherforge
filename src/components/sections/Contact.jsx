import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Client-side validation
    if (!data.name || !data.email || !data.message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Pings secure Vercel serverless backend
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const responseData = await response.json();
      setSubmitStatus("success");
      e.target.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative max-w-[1400px] mx-auto px-6 w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl mb-6 text-foreground drop-shadow-sm">
            Let's Forge Your Next Idea.
          </h2>
          <p className="opacity-70 text-lg mb-12 max-w-lg leading-relaxed">
            Ready to integrate cutting-edge architecture into your ecosystem?
            Shoot us a message below or connect with us directly via our robust
            network.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-foreground/10 text-cyan-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm opacity-50 uppercase tracking-widest font-medium mb-1">
                  Email
                </div>
                <div className="font-medium text-lg text-foreground">
                  hello@aetherforge.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-foreground/10 text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm opacity-50 uppercase tracking-widest font-medium mb-1">
                  HQ
                </div>
                <div className="font-medium text-lg text-foreground">
                  Silicon Valley, CA
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-foreground/5 shadow-xl relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-[30vh] h-[30vh] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-12 relative z-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading text-3xl md:text-4xl mb-3 text-foreground"
              >
                Signal Received!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg opacity-70 mb-2"
              >
                Your message has been transmitted successfully.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base opacity-60 mb-8"
              >
                We'll forge something amazing together. Standby for contact.
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitStatus(null)}
                className="px-8 py-3 rounded-full bg-foreground/10 border border-foreground/20 font-medium hover:bg-foreground/20 transition-all"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 opacity-80"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-foreground/5 border-b-2 border-foreground/10 focus:border-cyan-500 px-4 py-3 outline-none transition-colors rounded-t-xl disabled:opacity-50"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 opacity-80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-foreground/5 border-b-2 border-foreground/10 focus:border-cyan-500 px-4 py-3 outline-none transition-colors rounded-t-xl disabled:opacity-50"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 opacity-80"
                >
                  Project Architecture
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-foreground/5 border-b-2 border-foreground/10 focus:border-cyan-500 px-4 py-3 outline-none transition-colors rounded-t-xl resize-none disabled:opacity-50"
                  placeholder="Tell us about the digital experience you want to build..."
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm font-medium p-3 bg-red-500/10 rounded-lg border border-red-500/20"
                >
                  Failed to transmit message. Please try again or contact us
                  directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-6 h-6 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  "Transmit Signal"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
