"use client";
import { useState } from "react";

type Props = {
  onChange?: (file: File | null) => void;
  accept?: string;
  label?: string;
};

export default function UploadDocument({ onChange, accept = ".pdf,.jpg,.png", label = "Ajouter un document" }: Props) {
  const [fileName, setFileName] = useState<string>("");
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          const f = e.target.files?.[0] ?? null;
          setFileName(f?.name ?? "");
          onChange?.(f);
        }}
        className="block w-full rounded-md border p-2 text-sm"
      />
      {fileName && <div className="text-xs text-muted-foreground">Fichier: {fileName}</div>}
    </div>
  );
}

