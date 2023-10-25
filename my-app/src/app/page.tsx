import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Page
      <div style={{ fontFamily: "Gilroy, sans-serif" }}>Gilroy</div>
      <div style={{ fontFamily: "Montserrat, sans-serif" }}>Gilroy</div>
      <div style={{ fontFamily: "TacticSans-Bld, sans-serif" }}>
        TacticSans-Bld
      </div>
      <div style={{ fontFamily: "TacticSansExd-BldIt, sans-serif" }}>
        TacticSansExd-BldIt
      </div>
    </main>
  );
}
