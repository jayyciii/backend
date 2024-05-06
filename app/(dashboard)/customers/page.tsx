import { DataTable } from '@/components/custom ui/DataTable'
import { columns } from '@/components/customers/CustomerColumns'
import { Separator } from '@/components/ui/separator'
import Customer from '@/lib/models/Customer'
import { connectToDB } from '@/lib/mongoDB'
import { UserButton } from '@clerk/nextjs'

const Customers = async () => {
  await connectToDB()

  const customers = await Customer.find().sort({ createdAt: "desc" })

  return (
    <div className='px-8 py-10'>
      <p className='text-heading2-bold'>Khách hàng
        <div className="float-right py-0"><UserButton /></div>
      </p>
      <Separator className='bg-grey-1 my-5' />
      <DataTable columns={columns} data={customers} searchKey='name' />
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Customers