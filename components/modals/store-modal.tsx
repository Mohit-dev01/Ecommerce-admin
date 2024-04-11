"use client";

import { useStoreModal } from "@/app/hooks/use-store-model";
import { Modal } from "../ui/modal";
import * as z from "zod";
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

// import { useStoreModal } from "@/app/hooks/use-store-model";
// import { Modal } from "../ui/modal";
// import { boolean, z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const formSchema = z.object({
//   name: z.string().min(1),
// });

// export const StoreModal = () => {
//   const storeModal = useStoreModal();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: " ",
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       setLoading(true);

//       const response = await axios.post("/api/store", values);
//       console.log(response.data);
//     } catch (error) {
//      toast.error("something went wrong")
//     } finally {
//       setLoading(false);
//     }
//   };

//   const [loading, setLoading] = useState<boolean>(false);
//   return (
//     <>
//       <Modal
//         title="new m"
//         description="new d"
//         isOpen={storeModal.isOpen}
//         onClose={storeModal.onClose}
//       >
//         <div>
//           <div>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)}>
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input
//                           disabled={loading}
//                           placeholder="e-commerce"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <div className="pt-6 flex gap-3 justify-end">
//                   <Button
//                     disabled={loading}
//                     variant={"outline"}
//                     onClick={storeModal.onClose}
//                   >
//                     Cancel
//                   </Button>
//                   <Button disabled={loading} type="submit">
//                     Continue
//                   </Button>
//                 </div>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="do you want to add new store?"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
    <div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name="name" render={({field}) => {
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input/>
                </FormControl>
              </FormItem>
            }}/>

            
          </form>

        </Form>
      </div>
    </div>
    </Modal>
  );
};
