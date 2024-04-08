"use client";
import { FaFileUpload } from "react-icons/fa";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "../../ui";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SelectInvoicesFormProps {
  onSubmit: (data: any) => void;
}

const formSchema = z.object({
  file: z.any(),
});

export const SelectInvoicesForm = ({ onSubmit }: SelectInvoicesFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const fileRef = form.register("file");

  function handlePrintFilesNames() {
    const files = form.getValues("file");
    return Array.from(files)
      .map((file: any) => file.name)
      .join(", ");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <>
              <FormItem className="border-dashed border-2 border-gray-500 dark:border-gray-300 rounded-md h-60 flex items-center justify-center flex-col gap-4 cursor-pointer">
                <FormControl>
                  <Input
                    id="file"
                    className="hidden"
                    type="file"
                    multiple
                    placeholder="shadcn"
                    {...fileRef}
                  />
                </FormControl>
                <FormLabel
                  className="flex items-center justify-center flex-col gap-4 cursor-pointer"
                  htmlFor="file"
                >
                  <FaFileUpload className="h-10 w-10 text-gray-500 dark:text-gray-300" />
                  <p className="text-gray-500 dark:text-gray-300 text-center">
                    {form.getValues("file")
                      ? handlePrintFilesNames()
                      : "Click or drag & drop to upload images"}
                  </p>
                </FormLabel>
              </FormItem>
            </>
          )}
        />
        <Button
          disabled={!form.getValues("file") || form.formState.isSubmitting}
          type="submit"
          className="mt-4 w-full"
        >
          Upload
        </Button>
      </form>
    </Form>
  );
};
