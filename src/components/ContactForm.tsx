import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name muss mindestens 2 Zeichen lang sein" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),
  email: z
    .string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns in Kürze bei Ihnen.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Ihr vollständiger Name" 
                  {...field}
                  className="bg-background"
                />
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
              <FormLabel>E-Mail *</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  placeholder="ihre.email@beispiel.de" 
                  {...field}
                  className="bg-background"
                />
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
              <FormLabel>Nachricht *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  className="min-h-[150px] bg-background resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          variant="hero"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>
    </Form>
  );
};
