'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchText) return; 

        router.push(`/events/${searchText}`);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="w-full sm:w-[580px]">
            <input 
                className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none focus:ring-2 ring-[#a4f839]/50 transition focus:bg-white/10"
                type="text" 
                placeholder="Search events in any city..." 
                spellCheck={false} 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </form>
    )
}