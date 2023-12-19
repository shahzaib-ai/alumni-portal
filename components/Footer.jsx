export default function Footer() {
  return (
    <footer className="pt-24 pb-8 text-white flex flex-col gap-8 mx-4 lg:flex-row lg:gap-0 lg:mx-0 justify-around">
      <div>
        <h4 className="ml-4 text-primary font-bold">COMSIANS&apos; Connect</h4>
        <p className="ml-4 mt-2 text-black">
          Your trusted source to find highly-vetted mentors &<br /> industry
          professionals to move your career ahead.
        </p>
      </div>
      <p class="text-base font-normal text-gray-400 xl:text-center self-start lg:self-end">
        © 2023&nbsp;
        <a class="underline text-gray-400 normal-case" href="#">
          COMSIANS Connect
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
