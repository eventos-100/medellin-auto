"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar";
import { Footer2 } from "@/devlink/Footer2";
import { Hero } from "@/devlink/Hero";
import { MainCardComponent } from "@/devlink/MainCardComponent";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Section */}
      <Section
        tag="section"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Block tag="div" className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Welcome Section */}
          <Block
            tag="div"
            className="hero-split"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 60px auto",
            }}
          >
            <h1
              className="margin-bottom-24px"
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                background: "linear-gradient(83.21deg, #0066cc 0%, #003d82 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "24px",
              }}
            >
              Welcome to Med Auto
            </h1>
            <Block tag="p" className="margin-bottom-24px" style={{
              fontSize: "1.2rem",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}>
              Discover premium vehicles with our advanced automotive platform. 
              Experience luxury, performance, and innovation in every drive.
            </Block>
            <div style={{ marginTop: "32px" }}>
              <Link
                button={true}
                options={{
                  href: "#inventory",
                }}
                className="button-primary"
                style={{
                  borderRadius: "8px",
                  background: "#0066cc",
                  color: "#ffffff",
                  padding: "16px 32px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 102, 204, 0.3)",
                }}
              >
                Browse Our Inventory
              </Link>
            </div>
          </Block>

          {/* Featured Vehicles Section */}
          <Block tag="div" style={{ marginBottom: "60px" }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "48px",
              color: "#333",
            }}>
              Featured Vehicles
            </h2>
            
            {/* Vehicle Cards Grid */}
            <Block tag="div" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
              marginBottom: "40px",
            }}>
              
              {/* Vehicle Card 1 */}
              <MainCardComponent
                name="BMW X5"
                brandName="BMW"
                colorName="Midnight Black"
                year="2024"
              />
              
              {/* Vehicle Card 2 */}
              <MainCardComponent
                name="Mercedes GLE"
                brandName="Mercedes-Benz"
                colorName="Pearl White"
                year="2024"
              />
              
              {/* Vehicle Card 3 */}
              <MainCardComponent
                name="Audi Q7"
                brandName="Audi"
                colorName="Glacier Blue"
                year="2024"
              />
              
            </Block>
          </Block>

          {/* Call to Action Section */}
          <Block tag="div" style={{
            textAlign: "center",
            padding: "60px 30px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#333",
            }}>
              Ready to Find Your Perfect Vehicle?
            </h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#666",
              marginBottom: "30px",
              maxWidth: "600px",
              margin: "0 auto 30px auto",
            }}>
              Browse our extensive inventory of premium vehicles, schedule a test drive, 
              or speak with our automotive experts today.
            </p>
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <Link
                button={true}
                options={{ href: "#contact" }}
                style={{
                  background: "#0066cc",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                Schedule Test Drive
              </Link>
              <Link
                button={true}
                options={{ href: "#inventory" }}
                style={{
                  background: "transparent",
                  color: "#0066cc",
                  padding: "14px 28px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  border: "2px solid #0066cc",
                  transition: "all 0.3s ease",
                }}
              >
                View All Vehicles
              </Link>
            </div>
          </Block>

        </Block>
      </Section>
      
      {/* Footer */}
      <Footer2 />
    </>
  );
}
