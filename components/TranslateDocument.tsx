"use client"

import * as Y from "yjs";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
  
import { Button } from "./ui/button"
import { FormEvent, useState, useTransition } from "react";
import { LanguagesIcon } from "lucide-react";
import { toast } from "sonner";

type Language = 
  | "english"
  | "spanish"
  | "french"
  | "portuguese"
  | "german"
  | "italian"
  | "chinese"
  | "japanese"
  | "korean"
  | "russian"
  | "hindi";

const languages: Language[] = [
  "english",
  "spanish",
  "french",
  "portuguese",
  "german",
  "italian",
  "chinese",
  "japanese",
  "korean",
  "russian",
  "hindi"
];

function TranslateDocument({ doc }: { doc: Y.Doc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string>("");
  const [summary, setSummary] = useState();
  const [question, setQuestion] = useState();
  const [isPending, startTransition] = useTransition();

  const handleAskQuestion = async (e: FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const documentData = doc.getMap("document-store").toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/translateDocument`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentData,
            targetLang: language,
          }),
        }
      );

      if (res.ok) {
        const { translated } = await res.json();

        setSummary(translated.summary);
        toast.success("Transalated document summary successfully!");
      }

    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Button asChild variant="outline" >
            <DialogTrigger>
              <LanguagesIcon />
              Translate
            </DialogTrigger>
        </Button>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Translate this document</DialogTitle>
                <DialogDescription>
                  Select a language to translate this document into. Translations are AI summaries of the document.
                </DialogDescription>

                <hr className="mt-5" />

                {question && <p className="mt-5 text-gray-500">Q: {question}</p>}
            </DialogHeader>

            <form className="flex gap-2" onSubmit={handleAskQuestion}>
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language"
                    />

                  </SelectTrigger>

                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language.charAt(0).toUpperCase() + language.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  disabled={!language ||isPending}>
                    {isPending ? "Translating..." : "Translate"}
                </Button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default TranslateDocument