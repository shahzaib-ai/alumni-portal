import DashNavBar from "@/components/DashNavBar";

export default function MentorLayout({ children }) {
  return (
    <>
      <DashNavBar />
      <div>{children}</div>
    </>
  );
}
