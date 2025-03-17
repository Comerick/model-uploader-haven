
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

// Define the form schema using zod
const requestFormSchema = z.object({
  modelName: z.string().min(3, { message: "Model name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  referenceUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  email: z.string().email({ message: "Please enter a valid email address" })
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

const ModelRequestForm = () => {
  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      modelName: "",
      description: "",
      referenceUrl: "",
      email: ""
    }
  });

  const onSubmit = (data: RequestFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Request submitted",
      description: "Your model request has been received. We'll contact you soon.",
    });
    form.reset();
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border p-8">
      <h1 className="text-2xl font-bold text-[#1A2133] mb-6">Request Models</h1>
      <p className="text-gray-500 mb-6">Fill out the form below to request custom 3D models for your project</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="modelName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter model name" {...field} />
                </FormControl>
                <FormDescription>
                  Name your requested 3D model
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe the model you need in detail..." 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Provide details about the model, including dimensions, style, and purpose
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="referenceUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference URL (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/reference" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a link to a reference image or model if available
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  We'll use this to contact you about your request
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="bg-[#00FFA3] text-[#1A2133] hover:bg-[#00FFA3]/90">
            <Send className="mr-2 h-4 w-4" /> Submit Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ModelRequestForm;
