import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Collab = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data, e) => {
    e.preventDefault();
    const serviceId = "service_l8rh5b7";
    const templateId = "template_u45a3fo";
    const publicKey = "YgRkjRbzqbTEj1jZp";

    const templateParams = {
      from_name: data.fullname,
      from_email: data.email,
      message: data.messages,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        e.target.reset();
        Swal.fire(
          "Thank you for contacting me, I'l reply as soon as possible once your message is received. :)",
        );
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <div className="text-center font-gilroy sm:px-20 xl:px-[30%] xl:py-24">
      <div
        className="
        mb-4
        text-[22px]
        font-semibold
        "
      >
        <Typewriter
          options={{
            strings: ["Let's be together"],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <p className="text-[16px]">
        Collaboration does not see who is better, but will make us grow more
        together
      </p>
      <br />
      <p className="text-[16px]">
        Tell me in detail what we can do together and let's make it happen. :)
      </p>
      <div className="mt-5 text-left">
        <p className="mb-3 text-[18px] font-bold">Contact from</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-[16px]">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full border border-[#808080] px-[16px] py-[12px] placeholder:text-[14px]"
              placeholder="Your full name"
              {...register("fullname", {
                required: {
                  value: true,
                  message: "*Fullname is required",
                },
              })}
            />
            {errors.fullname && (
              <p className="text-[12px] text-red-500">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-[#808080] px-[16px] py-[12px] placeholder:text-[14px]"
              placeholder="Your email"
              {...register("email", {
                required: {
                  value: true,
                  message: "*Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-[12px] text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="messages" className="text-[16px]">
              Messages
            </label>
            <textarea
              placeholder="Your messages"
              name="messages"
              id="messages"
              cols="10"
              rows="3"
              className="w-full border border-[#808080] px-[16px] py-[12px] placeholder:text-[14px]"
              {...register("messages", {
                required: {
                  value: true,
                  message: "*Messages is required",
                },
              })}
            ></textarea>
            {errors.messages && (
              <p className="text-[12px] text-red-500">
                {errors.messages.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#121212] py-[12px] text-center text-white"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Collab;
