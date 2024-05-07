import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 px-6 py-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant='outline' className="hover:text-white hover:bg-purple-500 transition shadow-sm">Send</Button>
    </div>
  )
}
