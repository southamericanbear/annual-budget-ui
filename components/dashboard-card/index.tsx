import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { DashboardCardActionMenu } from "./dashboard-card-action-menu";

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
        <div className="flex justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <div>
            <DashboardCardActionMenu id={id as string} isAccount={isAccount} />
          </div>
        </div>
        {type && <CardDescription>{type}</CardDescription>}
      </CardHeader>
      <CardContent className="px-0 py-2">
        <div className="flex">
          <span>${value}</span>
          {currency && <span className="ml-1">{currency}</span>}
        </div>
      </CardContent>
    </Card>
  );
};
