import { useState } from "react";
import { GradientButton } from "@/components/GradientButton";
import { Field, TextAreaField } from "@/components/Field";

const FORMSPREE_URL = "https://formspree.io/f/mqedzkko";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [status, setStatus] = useState("");
  const isSending = status === "Sending...";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Email,
          message: formData.Message,
        }),
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
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 md:gap-6"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <Field
          label="Name"
          name="Name"
          placeholder="Your name *"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <Field
          label="Email"
          name="Email"
          type="email"
          placeholder="Email address *"
          value={formData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <TextAreaField
        label="Message"
        name="Message"
        placeholder="Tell me about your project *"
        value={formData.Message}
        onChange={handleChange}
        required
      />
      <div className="flex w-full flex-col items-center gap-4 md:gap-5">
        <GradientButton type="submit" disabled={isSending}>
          <span className="text-lg font-semibold tracking-[-0.72px] leading-[19px] text-stone-900 font-dm_sans">
            {isSending ? "Sending..." : "Submit"}
          </span>
        </GradientButton>
      </div>
      {status && !isSending ? (
        <p className="text-center text-sm text-stone-700 font-dm_sans">{status}</p>
      ) : null}
    </form>
  );
};
