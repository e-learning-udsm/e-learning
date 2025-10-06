import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Users,
  Handshake,
  GraduationCap,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description:
        "Thank you for your inquiry. We'll get back to you within 2-3 business days.",
    });
    setFormData({
      name: "",
      email: "",
      affiliation: "",
      inquiryType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "UDSM e-Learning Research Group",
        "CoICT, University of Dar es Salaam",
        "P.O. Box 35048",
        "Dar es Salaam, Tanzania",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 22 2410500 (Main)", "+255 22 2410078 (Direct)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "elearning@udsm.ac.tz",
        "director@udsm.ac.tz",
        "research@udsm.ac.tz",
        "partnerships@udsm.ac.tz",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon-Fri: 8:00 AM - 4:30 PM",
        "Sat: 9:00 AM - 1:00 PM (By appointment)",
        "Sun: Closed",
      ],
    },
  ];

  const collaborationTypes = [
    {
      icon: Users,
      title: "Research Collaboration",
      description:
        "Partner with us on research projects in digital learning, AI in education, or educational technology innovation.",
      contact: "research@udsm.ac.tz",
    },
    {
      icon: Handshake,
      title: "Industry Partnership",
      description:
        "Collaborate on practical solutions, pilot programs, or technology implementations.",
      contact: "partnerships@udsm.ac.tz",
    },
    {
      icon: GraduationCap,
      title: "Academic Exchange",
      description:
        "Student exchanges, visiting researcher programs, joint degree opportunities, and sabbatical hosting.",
      contact: "academic@udsm.ac.tz",
    },
    {
      icon: Globe,
      title: "International Projects",
      description:
        "Multi-country initiatives, donor-funded projects, and regional educational technology programs.",
      contact: "international@udsm.ac.tz",
    },
  ];

  const inquiryTypes = [
    "Research Collaboration",
    "Partnership Opportunity",
    "Academic Program Inquiry",
    "Media & Press",
    "Student Application",
    "Resource Access",
    "Speaking Engagement",
    "General Information",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 font-sans">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="  from-blue-100 to-blue-50 py-12 rounded-lg mb-16 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Contact & Collaborate
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with the UDSM e-Learning Research Group to explore
            collaborations, partnerships, or learn more about our initiatives.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform active:scale-95"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Main Content: Form + Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-xl bg-white p-8 shadow-lg hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative">
                      <Label
                        htmlFor="name"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                        aria-label="Full Name"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <Label
                        htmlFor="email"
                        className="block mb-1 font-medium text-gray-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                        aria-label="Email Address"
                      />
                    </div>
                  </div>
                  {/* Affiliation */}
                  <div>
                    <Label
                      htmlFor="affiliation"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Affiliation/Organization
                    </Label>
                    <Input
                      id="affiliation"
                      className="w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={formData.affiliation}
                      onChange={(e) =>
                        handleInputChange("affiliation", e.target.value)
                      }
                      placeholder="University, Company, or Org"
                      aria-label="Affiliation or Organization"
                    />
                  </div>
                  {/* Inquiry Type */}
                  <div>
                    <Label
                      htmlFor="inquiryType"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Inquiry Type *
                    </Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        handleInputChange("inquiryType", value)
                      }
                    >
                      <SelectTrigger className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 p-2 cursor-pointer">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="border border-gray-300 rounded-md max-h-60 overflow-y-auto bg-white shadow-md mt-2">
                        {inquiryTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Message */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={5}
                      placeholder="Your message..."
                      required
                      aria-label="Your Message"
                    />
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition active:scale-95"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.905722851872!2d39.26700231525215!3d-6.823487395024738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4a83269e89a3%3A0x9c0cfa93d7f1636e!2sCollege%20of%20Information%20and%20Communication%20Technology%2C%20UDSM!5e0!3m2!1sen!2stz!4v1695638634000!5m2!1sen!2stz"
                width="100%"
                height="400"
                className="h-full w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CoICT, UDSM"
              ></iframe>
            </div>
          </motion.div>
        </div>

       
        {/* Collaboration Opportunities Carousel */}
        <section className="mb-20 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Collaboration Opportunities
          </h2>

          <Slider
            dots={false}
            infinite={true}
            speed={2000} // slower scrolling speed
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0} // continuous scrolling
            cssEase="linear" // smooth infinite scroll
            swipe={false}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {collaborationTypes.map((collab, idx) => {
              const IconComponent = collab.icon;
              return (
                <div key={idx} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full text-white"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{collab.title}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{collab.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white/20 transition active:scale-95"
                      onClick={() =>
                        (window.location.href = `mailto:${collab.contact}`)
                      }
                    >
                      Contact: {collab.contact}
                    </Button>
                  </motion.div>
                </div>
              );
            })}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default Contact;
