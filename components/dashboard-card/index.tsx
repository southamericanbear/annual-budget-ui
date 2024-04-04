import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui";

interface DashboardCardProps {
  id?: string;
  name: string;
  value: number;
  type?: string;
  currency?: string;
  isAccount: boolean;
}

export const DashboardCard = ({
  name,
  value,
  currency,
  id,
  type,
  isAccount,
}: DashboardCardProps) => {
  return (
    <Card className="bg-white p-4 shadow rounded h-40">
      <CardHeader className="p-0">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        {type && <CardDescription>{type}</CardDescription>}
      </CardHeader>
      <CardContent className="px-0 py-2">
        <div className="flex">
          <span>${value}</span>
          {currency && <span className="ml-1">{currency}</span>}
        </div>
      </CardContent>
      {isAccount && (
        <CardFooter className="px-0 py-2">
          <Link href={isAccount ? `/accounts/${id}` : `/basic-data/${id}`}>
            View Details
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
