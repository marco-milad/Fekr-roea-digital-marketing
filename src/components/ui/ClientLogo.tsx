import { Client } from "@/data/clients";

interface ClientLogoProps {
  client: Client;
}

export function ClientLogo({ client }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center rounded-xl bg-card p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        src={client.logo}
        alt={client.name}
        className="h-16 w-full object-cover opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}
