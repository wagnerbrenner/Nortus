import Image from "next/image";

export function LoginHeader() {
  return (
    <header className="mb-20">
      <Image src="/nortusLogo.svg" alt="Nortus Logo" width={150} height={40} />
    </header>
  );
}
