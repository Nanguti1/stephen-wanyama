"use client";

import { motion, type MotionProps } from "framer-motion";
import { Shield, Award, Users, Target } from "lucide-react";
import { type HTMLAttributes } from "react";

const MotionDiv = motion.div as React.ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

export default function About() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            About Stephen Wanyama
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated EACC Investigator committed to upholding integrity and
            fighting corruption in Kenya's public sector
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
              Professional Background
            </h2>
            <p className="text-gray-300 mb-4">
              With over a decade of experience in ethics and anti-corruption
              investigations, Stephen Wanyama has established himself as a
              leading figure in Kenya's fight against corruption.
            </p>
            <p className="text-gray-300 mb-4">
              His expertise spans across public sector investigations, policy
              development, and institutional capacity building, making him a
              valuable asset to the Ethics and Anti-Corruption Commission.
            </p>
            <p className="text-gray-300">
              Stephen's commitment to transparency and accountability has
              resulted in numerous successful investigations and policy reforms
              that have strengthened Kenya's governance framework.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-purple">
              Core Values
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  desc: "Unwavering commitment to ethical conduct",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "Pursuing the highest standards in all endeavors",
                },
                {
                  icon: Users,
                  title: "Service",
                  desc: "Dedicated to serving the public interest",
                },
                {
                  icon: Target,
                  title: "Accountability",
                  desc: "Ensuring transparency in all actions",
                },
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <value.icon className="h-6 w-6 text-neon-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-8"
        >
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-center text-neon-blue">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Investigation Techniques",
              "Policy Development",
              "Risk Assessment",
              "Legal Compliance",
              "Data Analysis",
              "Report Writing",
              "Stakeholder Engagement",
              "Training & Capacity Building",
            ].map((skill, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center p-4 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-colors"
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
