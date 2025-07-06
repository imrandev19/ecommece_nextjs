export const metadata = {
  title: "Clicon Filter",
  description: "Clicon App project done by Md. Imran Hossain",
};

export default function FilterLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-public_sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
