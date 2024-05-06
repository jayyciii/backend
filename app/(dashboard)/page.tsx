import SalesChart from "@/components/custom ui/SalesChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getSalesPerMonth,
  getTotalCustomers,
  getTotalSales,
} from "@/lib/actions/actions";
import { UserButton } from "@clerk/nextjs";
import { CircleDollarSign, BookmarkCheck, Users } from "lucide-react";

export default async function Home() {
  const totalRevenue = await getTotalSales().then((data) => data.totalRevenue);
  const totalOrders = await getTotalSales().then((data) => data.totalOrders);
  const totalCustomers = await getTotalCustomers();

  const graphData = await getSalesPerMonth();

  return (
    <div className="px-8 py-10">
      <p className="text-heading2-bold">Trang chủ
        <div className="float-right py-0"><UserButton /></div>
      </p>

      <Separator className="bg-grey-1 my-5" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <Card className="bg-cyan-300">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Doanh thu</CardTitle>
            <CircleDollarSign className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{totalRevenue} vnđ</p>
          </CardContent>
        </Card>

        <Card className="bg-cyan-200">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Tour đã thanh toán</CardTitle>
            <BookmarkCheck className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{totalOrders}</p>
          </CardContent>
        </Card>

        <Card className="bg-cyan-100">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Khách hàng</CardTitle>
            <Users className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{totalCustomers}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Tổng doanh thu</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart data={graphData} />
        </CardContent>
      </Card>
    </div>
  );
}
