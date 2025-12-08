import { Button } from "@/components/ui/button";
import { HeadsetIcon } from "lucide-react";
import { SelectLanguage } from "@/components/ui/select-language";

export function LoginActions() {
  return (
    <div className="absolute flex gap-2 z-40 top-0 right-0 bg-background p-4 rounded-bl-2xl">
      <Button className="w-28 bg-secondary px-8 py-8 rounded-full hover:bg-secondary/70 transition cursor-pointer">
        <HeadsetIcon className="text-white" />
        <p className="text-white text-sm">Ajuda</p>
      </Button>
      <SelectLanguage />
    </div>
  );
}
