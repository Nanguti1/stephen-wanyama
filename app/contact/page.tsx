"use client";
import { motion, type MotionProps } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type HTMLAttributes } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const MotionDiv = motion.div as React.ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  HTMLAttributes<HTMLButtonElement> &
    MotionProps & { type?: "button" | "submit" | "reset" }
>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Handle form submission
    reset();
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on anti-corruption initiatives or discuss
            ethical governance? Let's connect.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-orbitron font-bold mb-8 text-neon-blue">
              Contact Information
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "stephen.wanyama@eacc.go.ke",
                  href: "mailto:stephen.wanyama@eacc.go.ke",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+254 700 000 000",
                  href: "tel:+254700000000",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "EACC Headquarters, Nairobi",
                  href: "#",
                },
              ].map((contact, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 glass rounded-lg p-4"
                >
                  <contact.icon className="h-6 w-6 text-neon-blue" />
                  <div>
                    <h3 className="font-semibold text-white">
                      {contact.title}
                    </h3>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-purple">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <MotionButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </MotionButton>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
