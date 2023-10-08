import Typewriter from "typewriter-effect";

const Experience = () => {
  return (
    <div className="font-gilroy">
      <div className="z-0 text-[22px] font-bold ">
        <Typewriter
          options={{
            strings: ["Experience"],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <div className="mt-[20px] flex flex-col space-y-5 ">
        <p className="text-[14px]">Here are some of my work experiences</p>
        <div className="text-[14px]">
          <h6 className="text-[16px] font-bold">
            IT Support{" "}
            <span className="text-[14px] font-normal">
              - PT. Kode Kreatif Digital
            </span>
          </h6>
          <p className="text-slate-500">November 2021 - December 2022</p>
          <ul className="mt-2 list-inside">
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Handle customers and repair computers and laptops.
            </li>
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Carry out inventory data or stock product in online stores (Online
              Market place: Shopee, Tokopedia, Olx, Facebook Marketplace) and
              offline store.
            </li>
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Appointed as one of the online and offline Microsoft Office
              training teachers.
            </li>
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Installed CCTV at several partners.
            </li>
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Create a website for recording shop stock, shop expenses, and
              incoming or outgoing goods receipts which can be viewed and
              printed via thermal print.
            </li>
          </ul>
        </div>
        <div className="mb-4 text-[14px]">
          <h6 className="text-[16px] font-bold">
            Internship Web Developer{" "}
            <span className="text-[14px] font-normal">
              - CV. Mitra Informatika
            </span>
          </h6>
          <p className="text-slate-500">Januari 2021 - Maret 2021</p>
          <ul className="mt-2 list-inside">
            <li className="flex items-start gap-3 ">
              <p className="font-bold">-</p>
              Create a credit sales website using an integrated laravel
              framework, using a floppy pay for payment gateway and connecting
              Mobile Pulsa as a credit provider.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
