export default function ProfilLayout({
  children,
  avatar,
}: Readonly<{
  children: React.ReactNode;
  avatar: React.ReactNode;
}>) {
  return (
    <>
      <div>
        {" "}
        {children}
        {avatar}
      </div>
    </>
  );
}
