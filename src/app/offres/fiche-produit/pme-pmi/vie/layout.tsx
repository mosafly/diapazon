import { PropsWithChildren } from "react";

export default function VieLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <main className="p-4 md:p-6 space-y-4">
        {children}
      </main>
    </div>
  );
}
