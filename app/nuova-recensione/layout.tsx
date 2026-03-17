import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuova recensione",
};

export default function NuovaRecensioneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
