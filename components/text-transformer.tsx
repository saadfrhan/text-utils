"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from './ui/textarea'
import { useState } from 'react';
export default function TextTransformer() {
	const [baseText, setBaseText] = useState("");
	const [lettercase, setLettercase] = useState<"" | "uppercase" | "lowercase" | "titlecase">("")
	return (
		<div>
			<Textarea value={baseText} onChange={(e) => setBaseText(e.target.value)} />
			<Select onValueChange={(value) => setBaseText(value)}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Case</SelectLabel>
						<SelectItem value="uppercase">UPPER CASE</SelectItem>
						<SelectItem value="lowercase">lowercase</SelectItem>
						<SelectItem value="titlecase">Titlecase</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Textarea disabled />
		</div>
	)
}
