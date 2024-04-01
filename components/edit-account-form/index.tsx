"use client";
import { Label, Input } from "@/components/ui";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { editAccount } from "@/lib/actions/account";
import { ItemsCardLayout } from "..";

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
  const [edit, setEdit] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>(name);
  const [inputValue, setInputValue] = useState<number>(value);
  const [inputType, setInputType] = useState<string>(type);

  async function onSave() {
    await editAccount(accountId, {
      name: inputName,
      value: inputValue,
      type: inputType,
    });
    setEdit(false);
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
      <Input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(Number(e.target.value));
        }}
        disabled={!edit}
      />
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
