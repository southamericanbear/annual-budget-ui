"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "../ui";

export const BackBtn = () => {
  const { back } = useRouter();

  return (
    <Button
      className="bg-transparent hover:bg-transparent underline text-sm text-gray-600  p-0 "
      onClick={back}
    >
      <IoMdArrowRoundBack />
      back
    </Button>
  );
};
