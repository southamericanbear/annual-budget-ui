"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { createBasicData } from "@/lib/actions/basic-data";
import { BasicDataCategory } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  value: z.string(),
  currency: z.enum(["USD", "EUR", "GBP", "JPY", "CNY"]),
  category: z.enum([
    BasicDataCategory.RENT,
    BasicDataCategory.SALARY,
    BasicDataCategory.DOLLAR,
    BasicDataCategory.OTHER,
  ]),
});

export const CreateBasicDataModal = () => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      value: "0",
      currency: "USD",
      category: BasicDataCategory.OTHER,
    },
  });
  const [closeModal, setCloseModal] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (isNaN(Number(data.value))) {
      console.log("value must be a number");
      return;
    }
    await createBasicData({ ...data, value: Number(data.value) })
      .then(() => {
        setCloseModal(true);
        toast({
          variant: "default",
          title: "Basic Data Created",
          description: "Basic Data has been created successfully",
        });
        refresh();
      })
      .catch((error) => {
        setCloseModal(true);
        console.error("Failed to create Basic Data:", error);
        toast({
          variant: "destructive",
          title: "Failed to create Basic Data",
          description: "Failed to create Basic Data",
        });
      });
  }

  return (
    <div className="w-40">
      <ResponsiveModal
        modalTitle="Create Basic Data"
        openModalText="Create Basic Data"
        parentHandler={closeModal}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <Input placeholder="Value" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="b-white shadow-lg rounded-md p-4 w-96">
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                      <SelectItem value="CNY">CNY</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="b-white shadow-lg rounded-md p-4 w-96">
                      <SelectItem value={BasicDataCategory.RENT}>
                        {BasicDataCategory.RENT}
                      </SelectItem>
                      <SelectItem value={BasicDataCategory.SALARY}>
                        {BasicDataCategory.SALARY}
                      </SelectItem>
                      <SelectItem value={BasicDataCategory.DOLLAR}>
                        {BasicDataCategory.DOLLAR}
                      </SelectItem>
                      <SelectItem value={BasicDataCategory.OTHER}>
                        {BasicDataCategory.OTHER}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button className="mt-5" type="submit">
              Create
            </Button>
          </form>
        </Form>
      </ResponsiveModal>
      <Toaster />
    </div>
  );
};
