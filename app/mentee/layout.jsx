import NavBar from "./NavBar";

export default function MenteeLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
