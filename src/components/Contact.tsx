import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import { motion, useScroll, useTransform } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappNumber = "919871191242";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div className="text-center mb-16 lg:mb-20" style={{ opacity }}>
          <motion.h2
            className="text-4xl mb-3 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with us for any queries or information
          </motion.p>
        </motion.div>

        {/* Two-column section */}
        {/* items-stretch ensures both columns stretch to the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-stretch">
          {/* Get in Touch Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl mb-4 text-gray-900">Get in Touch</h3>

            {/* Keep spacing blocks and borders (like your earlier "good" version).
                Use the same min-height class on both Cards so they remain equal on larger screens. */}
            <Card className="flex flex-col h-full min-h-[420px] lg:min-h-[520px]">
              <CardContent className="pt-6 pb-8 flex flex-col space-y-6">
                <div className="pb-4 border-b">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 text-gray-900">Address</h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        Sanskar Public School{"\n"}
                        Nagla Firoj Mohanpur{"\n"}
                        Ghaziabad, UP - 201003
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pb-4 border-b">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 text-gray-900">Phone</h4>
                      <div className="space-y-2">
                        <a
                          href="tel:9871191242"
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>9871191242</span>
                        </a>
                        <a
                          href="tel:9560482061"
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>9560482061</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-4 border-b">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 text-gray-900">Email</h4>
                      <a
                        href="mailto:sanskarschoolsps20@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                      >
                        sanskarschoolsps20@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 text-gray-900">Office Hours</h4>
                      <p className="text-gray-600 whitespace-pre-line mb-0 leading-relaxed">
                        Monday - Friday: 8:00 AM - 4:00 PM{"\n"}
                        Saturday: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Send Us a Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl mb-4 text-gray-900 sm:mt-8 lg:mt-0">
              Send us a Message
            </h3>

            {/* Same min-height as left card to force equal size on laptop/desktop */}
            <Card className="flex flex-col h-full min-h-[420px] lg:min-h-[520px]">
              <CardContent className="pt-6 pb-4 flex flex-col justify-between h-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                      placeholder="Subject of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Your message..."
                      rows={4}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-700">
                  <p>
                    <strong>Note:</strong> Your message will be sent via WhatsApp
                    for faster response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Section: Find Us on Map */}
        {/* Bottom Section: Find Us on Map */}
        <motion.div
          className="flex flex-col items-center max-w-2xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-2xl mb-6 text-gray-900 text-center">
            Find Us on Map
          </h4>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=Sanskar+Public+School+Nangla+Mohanpur+Main+Rd&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
  <motion.a
    href="https://maps.app.goo.gl/exR33rVPYrQrzYf28?g_st=aw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      marginTop: "1.25rem",
      padding: "8px 14px",
      backgroundColor: "#2563eb",
      color: "white",
      borderRadius: "6px",
      fontSize: "0.9rem",
      width: "auto",
    }}
    className="hover:bg-blue-700 transition-transform"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <MapPin style={{ height: "16px", width: "16px" }} />
    <span>Open in Google Maps</span>
  </motion.a>
</div>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
