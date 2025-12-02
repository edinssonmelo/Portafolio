import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[9px] flex shrink-0 h-min justify-center gap-y-[9px] w-full">
      <form onSubmit={handleSubmit} className="relative content-center items-center box-border caret-transparent gap-x-10 flex basis-0 flex-col grow shrink-0 h-min justify-start gap-y-10 w-px md:gap-x-[50px] md:gap-y-[50px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full md:gap-x-[50px] md:flex-row md:gap-y-[50px]">
          <label className="relative content-start items-start box-border caret-transparent gap-x-0 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-0 w-full md:basis-0 md:grow md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-zinc-500 text-sm box-border caret-transparent leading-[14px] text-nowrap font-dm_sans">
                Name
              </p>
            </div>
            <div className="relative box-border caret-transparent shrink-0 h-[54px] w-full overflow-hidden after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <input
                type="text"
                name="Name"
                placeholder="Your name *"
                value={formData.Name}
                onChange={handleChange}
                className="text-stone-900 text-lg bg-transparent box-border caret-transparent h-full leading-[21.6px] text-ellipsis text-nowrap w-full bg-[position:0px_0px] px-0 py-3 font-dm_sans outline-none focus:border-b-2 focus:border-[#4BFBBA] transition-colors"
                required
              />
            </div>
          </label>
          <label className="relative content-start items-start box-border caret-transparent gap-x-0 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-0 w-full md:basis-0 md:grow md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-zinc-500 text-sm box-border caret-transparent leading-[14px] text-nowrap font-dm_sans">
                Email
              </p>
            </div>
            <div className="relative box-border caret-transparent shrink-0 h-[54px] w-full overflow-hidden after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <input
                type="email"
                name="Email"
                placeholder="Email address *"
                value={formData.Email}
                onChange={handleChange}
                className="text-stone-900 text-lg bg-transparent box-border caret-transparent h-full leading-[21.6px] text-ellipsis text-nowrap w-full bg-[position:0px_0px] px-0 py-3 font-dm_sans outline-none focus:border-b-2 focus:border-[#4BFBBA] transition-colors"
                required
              />
            </div>
          </label>
        </div>
        <label className="relative content-start items-start box-border caret-transparent gap-x-[5px] flex flex-col shrink-0 h-min justify-start gap-y-[5px] w-full">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-zinc-500 text-sm box-border caret-transparent leading-[14px] text-nowrap font-dm_sans">
              Message
            </p>
          </div>
          <div className="relative box-border caret-transparent shrink-0 min-h-[150px] w-full overflow-hidden after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
            <textarea
              name="Message"
              placeholder="Tell me about your project *"
              value={formData.Message}
              onChange={handleChange}
              className="text-stone-900 text-lg bg-transparent box-border caret-transparent flex leading-[21.6px] min-h-[150px] overflow-x-hidden resize-y text-ellipsis w-full bg-[position:0px_0px] px-0 py-3 font-dm_sans outline-none focus:border-b-2 focus:border-[#4BFBBA] transition-colors"
              required
            ></textarea>
          </div>
        </label>
        <div
          className="relative box-border caret-transparent shrink-0"
        >
          <button
            name="Submit Button"
            type="submit"
            className="relative content-center items-center bg-transparent caret-transparent gap-x-0 flex h-min justify-center gap-y-0 text-center w-min p-0 rounded-[10px] cursor-pointer"
          >
            <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-10 px-[30px] py-[18px] rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left text-nowrap font-dm_sans">
                  Submit
                </p>
              </div>
            </div>
            <div className="absolute bg-[conic-gradient(rgb(75,251,186)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full z-[9] rounded-[10px] left-[0%] -bottom-1.5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
          </button>
        </div>
        {status && <p className="text-stone-900 mt-4">{status}</p>}
      </form>
    </div>
  );
};
