"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, ChangeEvent, FormEvent } from "react"

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      // Here you would add your form submission logic
      alert("Message sent!")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-8 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
          <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Let's collaborate on your next project or discuss opportunities.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 rounded-xl overflow-hidden">
        {/* Contact Info Side */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 glass-card">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Connect</h3>
          <p className="text-gray-300 mb-6 sm:mb-8">
            Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always
            open to discussing new projects and ideas.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 hover-lift transition-all-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm text-gray-400">Email</h4>
                <p className="text-cyan-400 text-sm sm:text-base">kush2012bhardwaj@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover-lift transition-all-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm text-gray-400">Phone</h4>
                <p className="text-purple-400 text-sm sm:text-base">+917428690322</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover-lift transition-all-300">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm text-gray-400">Location</h4>
                <p className="text-pink-400 text-sm sm:text-base">Gurgaon, Haryana, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-zinc-800/30">
            <p className="text-gray-400 text-sm">Follow me on social media</p>
            <div className="flex gap-4 mt-3">
              <a href="https://www.linkedin.com/in/kush2012bhardwaj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover-lift transition-all-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/Kush05Bhardwaj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-purple-400 hover-lift transition-all-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://x.com/Kush05Bhardwaj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-blue-400 hover-lift transition-all-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 glass-card">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400 mb-1">Your Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="bg-zinc-900/30 border-zinc-800/50 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-1">Your Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="bg-zinc-900/30 border-zinc-800/50 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm text-gray-400 mb-1">Subject</label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder=""
                className="bg-zinc-900/30 border-zinc-800/50 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-1">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=""
                className="bg-zinc-900/30 border-zinc-800/50 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
              />
            </div>
            
            <div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
