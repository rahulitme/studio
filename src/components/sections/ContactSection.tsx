'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MailCheck, Phone, Mail as MailIcon, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Rahul will get back to you soon.",
      className: "bg-primary text-primary-foreground",
    });
    form.reset(); 
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center">
            <MailCheck className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-3xl font-bold text-primary sm:text-4xl">Get In Touch</CardTitle>
            <CardDescription className="mt-2 text-lg text-foreground/70">
              Have a question or want to work together? Send a message or reach out directly!
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 md:px-10 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MailIcon className="h-5 w-5 text-accent" />
                    <Link href="mailto:rahulkumar545212@gmail.com" className="text-foreground/80 hover:text-accent transition-colors">
                      rahulkumar545212@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-foreground/80">6204794931</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-accent" />
                    <Link href="https://www.linkedin.com/in/rahul-kumar-191473256/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
                      LinkedIn Profile
                    </Link>
                  </div>
                   <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-accent" />
                    <Link href="https://github.com/rahulitme" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
                      GitHub Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-4">Send a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="focus:ring-primary focus:border-primary bg-background/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your Email Address" {...field} className="focus:ring-primary focus:border-primary bg-background/70"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your Message" rows={4} {...field} className="focus:ring-primary focus:border-primary bg-background/70"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transform hover:scale-105 transition-transform duration-300">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
