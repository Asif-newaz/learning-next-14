"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  emailAddress: z.string().email().min(2).max(50),
});

export default function FormHome() {
  const form =
    useForm <
    z.infer<typeof formSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        emailAddress: ""
      }
    });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p24">
      <Form>
        
      </Form>
    </main>
  );
}
