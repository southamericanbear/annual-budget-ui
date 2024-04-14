"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui";
import Link from "next/link";
import { deleteAccount } from "@/lib/actions/account";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "../ui/toaster";
import { useRouter } from "next/navigation";

export const DashboardCardActionMenu = ({
  id,
  isAccount,
}: {
  id: string;
  isAccount: boolean;
}) => {
  const { toast } = useToast();
  const { refresh } = useRouter();

  async function handleDelete() {
    if (isAccount) {
      await deleteAccount(id)
        .then(() => {
          refresh();
          toast({
            variant: "default",
            title: "Account deleted successfully",
            description: "The account has been deleted successfully",
          });
        })
        .catch((error) => {
          console.error("Failed to delete account:", error);
          toast({
            variant: "destructive",
            title: "Failed to delete account",
            description:
              "Failed to delete the account. Please try again later.",
          });
        });
    } else {
      console.log("es basic data", id);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-0 bg-transparent h-7 justify-end  hover:bg-transparent focus-visible:ring-0 focus-visible:ring-transparent mt-0">
          <BsThreeDotsVertical className="cursor-pointer text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={isAccount ? `/accounts/${id}` : `/basic-data`}>
              View Details/Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleDelete()}
            className="text-red-500 cursor-pointer"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
      <Toaster />
    </DropdownMenu>
  );
};
