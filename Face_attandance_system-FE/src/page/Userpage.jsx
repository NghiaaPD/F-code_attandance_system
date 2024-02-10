import Admin_BG from '@/assets/img/Admin-User-Background.png'
import Logo from '@/assets/img/logo.png'
import { FaCameraRetro } from "react-icons/fa";

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import Webcam from "react-webcam";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const TakePhoto = () => {

}

const WebcamComponent = () => <Webcam />;

const generation = [
    {
        value: "k13",
        label: "k13",
    },
    {
        value: "k14",
        label: "k14",
    },
    {
        value: "k15",
        label: "k15",
    },
    {
        value: "k16",
        label: "k16",
    },
    {
        value: "k17",
        label: "k17",
    },
    {
        value: "k18",
        label: "k18",
    },
    {
        value: "k19",
        label: "k19",
    }
]

export default function Userpage() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <>
            <div className="relative h-screen w-scrren">
                <img src={Admin_BG} alt="background-Admin" className="absolute h-full w-full object-cover blur-sm" />

                <div className="flex items-center justify-center">
                    <div className="mt-8 w-[1250px] h-16 bg-[#EFEFF1] bg-opacity-25 flex items-center drop-shadow-2xl rounded-lg mx-auto my-auto relative">
                        <div className="flex cursor-pointer ml-2">
                            <img src={Logo} className="w-20 h-20" alt="logo" />
                            <p className="z-10 text-2xl mt-5 font-black text-[#45CE7C]">F-Code</p>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="pr-4 text-xl mr-2 mb-1 font-blod text-[#45CE7C] cursor-pointer hover:font-extrabold">Log out</div>
                    </div>
                </div>

                <div className="relative flex items-center justify-center mt-36">
                    <div className="relative h-[450px] w-[900px] bg-[#D3D3D3] rounded-lg p-2">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <div className="w-[425px] h-[250px] bg-white rounded-lg border-2 border-black cursor-pointer hover:text-[#E7B824]">
                                        <div className="flex flex-col justify-center items-center">
                                            <FaCameraRetro className="w-20 h-20 mt-10 "></FaCameraRetro>
                                            <span className="mt-2 font-bold text-4xl">Scan</span>
                                            <span className="mt-2 font-semibold text-[#72757A] text-sm">Scan for get dataset to training model</span>
                                        </div>
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="h-[550px] w-[1500px]">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="inset-0 flex justify-center text-4xl font-blod">Scan face</AlertDialogTitle>
                                        <AlertDialogDescription className="inset-0 flex justify-center">
                                            Please scold your face carefully and enter complete information!
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <div className="grid grid-cols-2 divide-x h-[400px]">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-[450px] aspect-w-16 aspect-h-9 bg-[#D3D3D3] rounded-lg">
                                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                                    <WebcamComponent className="absolute inset-0 w-full h-full object-cover"></WebcamComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="ml-4 font-bold text-sm">Enter your email</span>
                                            <Input type="email" placeholder="Enter your Email" className="w-72 ml-4 mt-2"/>
                                            <span className="ml-4 font-bold text-sm">Enter your generation and name</span>
                                            <div className="flex flex-row items-center justify-center mt-2">
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-[200px] justify-between"
                                                        >
                                                            {value
                                                                ? generation.find((framework) => framework.value === value)?.label
                                                                : "Choose your generation"}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Search framework..." />
                                                            <CommandEmpty>No framework found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {generation.map((framework) => (
                                                                    <CommandItem
                                                                        key={framework.value}
                                                                        value={framework.value}
                                                                        onSelect={(currentValue) => {
                                                                            setValue(currentValue === value ? "" : currentValue)
                                                                            setOpen(false)
                                                                        }}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                value === framework.value ? "opacity-100" : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {framework.label}
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <Input type="email" placeholder="Enter your name" className="w-60 ml-4"/>
                                            </div>
                                            <ScrollArea className="h-[200px] w-[450px] rounded-md border p-4 mt-4 ml-4">
                                                Kester began sneaking into the castle in the middle of the night and leaving
                                                jokes all over the place: under the kings pillow, in his soup, even in the
                                                royal toilet. The king was furious, but he could not seem to stop Kester. And
                                                then, one day, the people of the kingdom discovered that the jokes left by
                                                Kester were so funny that they could not help but laugh. And once they
                                                started laughing, they could not stop.
                                            </ScrollArea>
                                            <AlertDialogFooter className="mt-3">
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction className="bg-[#E7B824] hover:bg-[#299D47]">Take photo</AlertDialogAction>
                                                <AlertDialogAction className="bg-[#299D47] hover:bg-[#E7B824]">Train</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </div>
                                    </div>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}