import { NoDataPlaceHolder } from "@/components/no-data-placeholder";
import { SidebarMenuLayout } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui";
import { getBasicData } from "@/lib/data/basic-data";
import { BasicDataCard } from "@/components/basic-data-card";

export async function generateMetadata() {
  return {
    title: "Basic Data",
    description: "Basic data page",
  };
}

export default async function BasicDataPage() {
  const data = await getBasicData();

  return (
    <SidebarMenuLayout>
      {data.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <BasicDataCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <Card className="h-screen flex items-center justify-center">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <NoDataPlaceHolder />
          </CardContent>
        </Card>
      )}
    </SidebarMenuLayout>
  );
}
