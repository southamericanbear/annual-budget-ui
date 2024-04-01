"use client";
import { Label, Input } from "@/components/ui";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { editAccount } from "@/lib/actions/account";
import ItemsCardLayout from "../layouts/items-card-layout";
import { useRouter } from "next/navigation";

interface EditAccountFormProps {
  accountId: string;
  name: string;
  value: number;
  type: string;
}

export const EditAccountForm = ({
  accountId,
  name,
  value,
  type,
}: EditAccountFormProps) => {
  const { refresh } = useRouter();
  const [edit, setEdit] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>(name);
  const [inputValue, setInputValue] = useState<number>(value);
  const [inputType, setInputType] = useState<string>(type);
  const [isNotNumber, setIsNotNumber] = useState<boolean>(false);

  async function onSave() {
    await editAccount(accountId, {
      name: inputName,
      value: inputValue,
      type: inputType,
    });
    refresh();
    setEdit(false);
  }

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isNaN(Number(e.target.value))) {
      setIsNotNumber(true);
      return;
    } else {
      setIsNotNumber(false);
    }

    setInputValue(Number(e.target.value));
  }

  return (
    <ItemsCardLayout className="p-6">
      <div className="flex justify-between">
        <Label>Name</Label>
        <span
          className="text-sm cursor-pointer flex items-center"
          onClick={() => (edit ? onSave() : setEdit(!edit))}
        >
          {edit ? "Save" : "Edit"}
          <CiEdit />
        </span>
      </div>
      <Input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        disabled={!edit}
      />
      <Label>Value</Label>
      <Input value={inputValue} onChange={handleValueChange} disabled={!edit} />
      {isNotNumber && (
        <span className="text-red-500 text-sm">Only number is allowed</span>
      )}
      <br />
      <Label>Type</Label>
      <Input
        value={inputType}
        onChange={(e) => {
          setInputType(e.target.value);
        }}
        disabled={!edit}
      />
    </ItemsCardLayout>
  );
};
