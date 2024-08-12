"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState, useTransition } from "react"
import { Button } from "./ui/button"
import { usePathname, useRouter } from "next/navigation"
import { deleteDocument } from "@/actions/actions"
import { toast } from "sonner"

  

function InviteUser() {
    const [isOpen, setIsOpen] = useState(false)
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const router = useRouter()


    const handleDelete = async () => {
        const roomId = pathname.split("/").pop()
        if (!roomId) return

        startTransition(async () => {
            const { success } = await deleteDocument(roomId)

            if (success) {
                setIsOpen(false)
                router.replace("/")
                toast.success("Room/Document deleted successfully!")
            } else {
                toast.error("Failed to delete!")
            }
        })
    }
    
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Button asChild variant="outline" >
            <DialogTrigger>Invite</DialogTrigger>
        </Button>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Invite a collaborator!</DialogTitle>
                <DialogDescription>
                    Enter their email address to invite them to collaborate on this document.
                </DialogDescription>
            </DialogHeader>

            <DialogFooter className="sm:jusitfy-end gap-2">
                <Button
                    type="button"
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isPending}
                >
                    {isPending ? "Deleting..." : "Delete"}
                </Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>

  )
}

export default InviteUser