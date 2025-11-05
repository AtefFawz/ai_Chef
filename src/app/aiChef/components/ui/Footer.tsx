import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../../../../../public/images/footer/Logo.png";
export default function Footer() {
  const footerData: string[] = [
    "Recipes",
    "Blog",
    "Customer Support",
    "Your Profile",
  ];
  const btn = { fontSize: "30px", color: "white" };
  return (
    <footer className=" w-full h-full bg-[#213D34] text-[#D9EF78] py-16">
      <section className="container mx-auto px-4 lg:px-8 grid grid-cols-2 justify-between w-full">
        <article className="flex justify-between gap-5 w-full ">
          <figure className="  ">
            <Image
              src={Logo}
              alt="Logo Footer"
              width={50}
              height={50}
              className="object-cover"
            />
          </figure>
          <div className="grid grid-cols-2 w-full justify-between h-fit">
            {footerData?.length > 0 ? (
              footerData.map((item) => {
                return (
                  <div key={item} className=" w-full ">
                    <h2 className="text-sm lg:text-lg ">{item}</h2>
                  </div>
                );
              })
            ) : (
              <p className="text-red-600 italic text-5xl text-center w-full ">
                Data Not Found
              </p>
            )}
          </div>
        </article>
        <article className="flex justify-between">
          <p className="text-[10px] md:text-sm ">
            Join us on our journey to make meal planning simple and joyful.
            Connect with us on social media, explore our FAQs for quick answers,
            or drop us a line anytime.
          </p>
          <figure className="flex flex-col justify-between gap-1 w-full">
            <FacebookIcon sx={btn} />
            <InstagramIcon sx={btn} />
            <WhatsAppIcon sx={btn} />
          </figure>
        </article>
      </section>
      <p className="text-sm md:text-lg w-full text-[#F1F2ED] container px-8 my-5">
        © 2064 AIChefMate. All rights reserved. | Privacy Policy | Terms of Use
      </p>
    </footer>
  );
}
