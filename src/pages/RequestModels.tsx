
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
import { LayoutGrid, Plus, Upload, User, Settings, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

// Define the form schema using zod
const requestFormSchema = z.object({
  modelName: z.string().min(3, { message: "Model name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  referenceUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  email: z.string().email({ message: "Please enter a valid email address" })
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

const RequestModels = () => {
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
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-16 bg-[#1A2133] flex flex-col items-center py-8 space-y-12">
        <div className="text-white">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16.5V7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 16.5V11.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16.5V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col space-y-8">
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <LayoutGrid size={20} />
          </button>
          <button className="p-2 bg-[#00FFA3] text-[#1A2133] rounded-md">
            <Plus size={20} />
          </button>
          <Link to="/request" className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10 flex items-center justify-center">
            <ClipboardList size={20} />
          </Link>
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <Upload size={20} />
          </button>
        </div>
        <div className="mt-auto flex flex-col space-y-4">
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <Settings size={20} />
          </button>
          <div className="flex justify-center">
            <span className="text-white text-xs font-semibold bg-gray-600 px-2 py-1 rounded">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#1A2133]">holostep.io</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-[#00FFA3] rounded-full">
              <User size={20} className="text-[#1A2133]" />
            </button>
            <button className="p-2 bg-[#00FFA3] rounded-full">
              <Settings size={20} className="text-[#1A2133]" />
            </button>
          </div>
        </div>

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

        <div className="mt-8 text-right text-sm text-gray-500">
          Powered by 
          <span className="inline-flex items-center ml-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M7 16.5V7" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 16.5V11.5" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 16.5V13" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
            </svg>
            holostep.io
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestModels;
