import DashNavBar from "@/components/DashNavBar";

export default function MenteeLayout({ children }) {
  return (
    <>
      <DashNavBar />
      <div>{children}</div>
    </>
  );
}
