"use client";

import React, { useState, useEffect } from "react";
import { Shield, ChevronDown } from "lucide-react";

// Utility function to combine classes
const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");

// CSS-in-JS styles to replace missing Tailwind classes
const styles = {
  container: {
    minHeight: "100vh",
    position: "relative" as const,
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  backgroundAnimation: {
    position: "absolute" as const,
    inset: "0",
    zIndex: "0",
    background:
      "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)",
    animation: "pulse 4s ease-in-out infinite",
  },
  heroSection: {
    position: "relative" as const,
    zIndex: "10",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  contentContainer: {
    maxWidth: "64rem",
    margin: "0 auto",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 245, 255, 0.3)",
    marginBottom: "1.5rem",
    color: "#00f5ff",
  },
  title: {
    fontSize: "clamp(3rem, 8vw, 5rem)",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    lineHeight: "1.1",
    fontFamily: "system-ui, sans-serif",
  },
  gradientText: {
    background:
      "linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #8a2be2 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  },
  subtitle: {
    fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
    color: "#d1d5db",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #00f5ff, #8a2be2)",
    borderRadius: "0.5rem",
    fontWeight: "600",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "scale(1)",
    boxShadow: "0 4px 15px rgba(0, 245, 255, 0.2)",
  },
  secondaryButton: {
    padding: "1rem 2rem",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 245, 255, 0.3)",
    borderRadius: "0.5rem",
    fontWeight: "600",
    color: "#00f5ff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "scale(1)",
  },
  scrollIndicator: {
    position: "absolute" as const,
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    color: "#9ca3af",
    animation: "bounce 2s infinite",
  },
  statsSection: {
    position: "relative" as const,
    zIndex: "10",
    padding: "5rem 1rem",
    maxWidth: "72rem",
    margin: "0 auto",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  statCard: {
    textAlign: "center" as const,
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "0.75rem",
    padding: "2rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00f5ff",
    marginBottom: "0.5rem",
  },
  statLabel: {
    color: "#d1d5db",
  },
  floatingShield: {
    position: "absolute" as const,
    top: "20%",
    right: "10%",
    width: "100px",
    height: "100px",
    background: "linear-gradient(45deg, #00f5ff, #8a2be2)",
    borderRadius: "10px",
    animation: "float 3s ease-in-out infinite",
    opacity: "0.7",
    transform: "rotate(45deg)",
  },
};

// CSS animations
const styleSheet = `
  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
  }
  
  @keyframes float {
    0%, 100% { transform: rotate(45deg) translateY(0px); }
    50% { transform: rotate(45deg) translateY(-20px); }
  }
  
  @media (min-width: 640px) {
    .button-container {
      flex-direction: row !important;
    }
  }
`;

// Animated component wrapper
const AnimatedDiv = ({
  children,
  delay = 0,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const stats = [
    { number: "10+", label: "Years Experience", icon: "🛡️" },
    { number: "500+", label: "Cases Investigated", icon: "🔍" },
    { number: "95%", label: "Success Rate", icon: "⚖️" },
  ];

  return (
    <>
      <style>{styleSheet}</style>
      <div style={styles.container}>
        {/* Animated background */}
        <div style={styles.backgroundAnimation}></div>

        {/* Floating shield decoration */}
        <div style={styles.floatingShield}></div>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.contentContainer as React.CSSProperties}>
            <AnimatedDiv delay={200}>
              <div style={styles.badge}>
                <Shield size={20} style={{ marginRight: "8px" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                  EACC Investigator
                </span>
              </div>

              <h1 style={styles.title}>
                <div style={styles.gradientText}>Stephen</div>
                <div style={styles.gradientText}>Wanyama</div>
              </h1>

              <p style={styles.subtitle}>
                Safeguarding Public Trust Through{" "}
                <span style={{ color: "#00f5ff" }}>Ethical Excellence</span>
              </p>

              <div style={styles.buttonContainer} className="button-container">
                <button
                  style={{
                    ...styles.primaryButton,
                    transform:
                      hoveredButton === "primary" ? "scale(1.05)" : "scale(1)",
                    boxShadow:
                      hoveredButton === "primary"
                        ? "0 8px 25px rgba(0, 245, 255, 0.4)"
                        : "0 4px 15px rgba(0, 245, 255, 0.2)",
                  }}
                  onMouseEnter={() => setHoveredButton("primary")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Explore My Work
                </button>

                <button
                  style={{
                    ...styles.secondaryButton,
                    transform:
                      hoveredButton === "secondary"
                        ? "scale(1.05)"
                        : "scale(1)",
                    background:
                      hoveredButton === "secondary"
                        ? "rgba(0, 245, 255, 0.1)"
                        : "rgba(255, 255, 255, 0.05)",
                  }}
                  onMouseEnter={() => setHoveredButton("secondary")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Get In Touch
                </button>
              </div>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={1500} style={styles.scrollIndicator}>
            <span style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              Scroll to explore
            </span>
            <ChevronDown size={24} />
          </AnimatedDiv>
        </section>

        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedDiv
                key={index}
                delay={800 + index * 200}
                style={styles.statCard}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  {stat.icon}
                </div>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </AnimatedDiv>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
