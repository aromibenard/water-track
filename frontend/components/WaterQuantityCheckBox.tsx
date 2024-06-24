"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const items = [
  {
    id: "fifty",
    label: "50 Litres",
  },
  {
    id: "hundred",
    label: "100 Litres",
  },
  {
    id: "twofifty",
    label: "250 Litres",
  },
  {
    id: "thousand",
    label: "1000 Litres",
  }
 
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

type WaterQuantityCheckBoxProps = {
  onWaterQuantitySelect: (waterQuantity: string) => void
}

export const WaterQuantityCheckBox: React.FC<WaterQuantityCheckBoxProps> = ({ onWaterQuantitySelect  }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["fifty"],
    },
  })

  const getItemLabels = (selectedIds: string[]): string[] => {
    return selectedIds.map((id) => items.find((item) => item.id === id)?.label ?? "");
  }

  function onSubmit(data: z.infer<typeof FormSchema>) { 
    const selectedLabels = getItemLabels(data.items)
    const selectedLabelsString = selectedLabels.join(", ")

    onWaterQuantitySelect(selectedLabelsString)
    toast({
      title: "Delivery Quantity Confirmed",
      description: (
        <p className="mt-2 w-[340px] rounded-md bg-purple-600 p-4 text-white">
          {selectedLabelsString}
        </p>
      ),
      duration: 1000
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center border-b-2 pb-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base"></FormLabel>
                <FormDescription className="text-white">
                  Choose Water quantity
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row text-white items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          variant={"outline"} 
          className="flex mx-auto hover:scale-105 hover:bg-purple-600 hover:text-white transition"
          >Confirm</Button>
      </form>
    </Form>
  )
}
