import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table"
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
    return (
        <div>
            <div className="W-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`${lusitana.className} text-2x1`}>Invoices</h1>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateInvoice />
            </div>
            {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense> */}
            <div className="mt-t flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>

    );
}