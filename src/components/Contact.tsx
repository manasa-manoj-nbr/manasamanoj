import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 pixel-shadow" />
          <p className="text-xl font-retro text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 gradient-card pixel-shadow hover:glow-primary transition-all duration-300 border-2 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-pixel text-sm mb-1 text-foreground">Email</h3>
                  <p className="font-retro text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card pixel-shadow hover:glow-primary transition-all duration-300 border-2 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-pixel text-sm mb-1 text-foreground">Location</h3>
                  <p className="font-retro text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </Card>

            {/* Comic thought bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
            >
              <Card className="p-6 bg-accent/10 border-4 border-accent pixel-shadow relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-accent" />
                <p className="font-retro text-foreground italic">
                  "I respond to all messages within 24 hours! ⚡"
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="p-8 gradient-card pixel-shadow border-2 border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-retro text-lg mb-2 block text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="font-retro text-lg border-2 focus:glow-primary transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-retro text-lg mb-2 block text-foreground">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="font-retro text-lg border-2 focus:glow-primary transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-retro text-lg mb-2 block text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="font-retro text-lg border-2 focus:glow-primary transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full pixel-shadow text-lg font-retro bg-primary hover:bg-primary/90 glow-primary hover:scale-105 transition-all relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
