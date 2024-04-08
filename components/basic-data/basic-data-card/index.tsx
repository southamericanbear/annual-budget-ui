"use client";
import { BasicDataDetails } from "@/types";
import React from "react";
import ItemsCardLayout from "../../layouts/items-card-layout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "../../ui";
import { updateBasicData } from "@/lib/actions/basic-data";

const formSchema = z.object({
  name: z.string(),
  value: z.string(),
  currency: z.string(),
  category: z.string(),
});

export const BasicDataCard = ({
  name,
  value,
  currency,
  category,
  id,
}: BasicDataDetails) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      value: value.toString(),
      currency: currency,
      category: category,
    },
  });

  async function onSubmit(data: any) {
    if (isNaN(Number(data.value))) {
      console.log("value must be a number");
      return;
    }

    await updateBasicData(
      {
        ...data,
        value: Number(data.value),
      },
      id
    );
  }

  return (
    <ItemsCardLayout className="p-5">
      <Form {...form}>
        <form
          className="flex justify-between"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-52 border-r-0 border-l-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-between">
                      <Input
                        className="w-52 border-r-0 border-l-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-between">
                      <Input
                        className="w-52 border-r-0 border-l-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-between">
                      <Input
                        className="w-52 border-r-0 border-l-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button
              className="border-none bg-transparent w-3 text-gray-600 hover:bg-transparent"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </ItemsCardLayout>
  );
};
