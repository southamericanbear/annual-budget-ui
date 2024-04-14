"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ResponsiveModal } from "@/components/responsive-modal";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { createAccount } from "@/lib/actions/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { AccountType } from "@/types";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  value: z.string(),
  currency: z.enum(["USD", "EUR", "GBP", "JPY", "CNY", "ARS"]),
  type: z.enum([
    "cash",
    "bank",
    "credit",
    "investing",
    "savings",
    "travel",
    "other",
  ]),
});

export const CreateAccountModal = () => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      value: "0",
      currency: "USD",
      type: "other",
    },
  });
  const [closeModal, setCloseModal] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (isNaN(Number(data.value))) {
      console.log("value must be a number");
      return;
    }

    await createAccount({ ...data, value: Number(data.value) })
      .then(() => {
        setCloseModal(true);
        toast({
          variant: "default",
          title: "Account created",
          description: "Account created successfully",
        });
        refresh();
      })
      .catch((error) => {
        setCloseModal(true);
        console.error("Error creating account:", error);
        toast({
          variant: "destructive",
          title: "Account creation",
          description: "Failed to create account",
        });
      });
  }

  return (
    <div className="w-32">
      <ResponsiveModal
        modalTitle="Create Account"
        openModalText="Add Account"
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
                  <FormDescription>
                    This is the name of the account
                  </FormDescription>
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
                  <FormDescription>
                    This is the value of the account
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-lg rounded-md p-4 w-96">
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="JPY">JPY</SelectItem>
                        <SelectItem value="CNY">CNY</SelectItem>
                        <SelectItem value="ARS">ARS</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This is the currency of the account
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white shadow-lg rounded-md p-4 w-96">
                      <SelectItem value={AccountType.CASH}>
                        {AccountType.CASH}
                      </SelectItem>
                      <SelectItem value={AccountType.BANK}>
                        {AccountType.BANK}
                      </SelectItem>
                      <SelectItem value={AccountType.CREDIT}>
                        {AccountType.CREDIT}
                      </SelectItem>
                      <SelectItem value={AccountType.INVESTING}>
                        {AccountType.INVESTING}
                      </SelectItem>
                      <SelectItem value={AccountType.SAVINGS}>
                        {AccountType.SAVINGS}
                      </SelectItem>
                      <SelectItem value={AccountType.TRAVEL}>
                        {AccountType.TRAVEL}
                      </SelectItem>
                      <SelectItem value={AccountType.OTHER}>
                        {AccountType.OTHER}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This is the type of the account
                  </FormDescription>
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
