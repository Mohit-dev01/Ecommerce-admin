import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function dashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
    const {userId} = auth()
    if(!userId) {
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId,
            userId: userId
        }
    })

    if(!store){
        redirect("/")
    }

    return(
        <>
        <div>This is a navbar</div>
        {children}
        </>
    )
}
