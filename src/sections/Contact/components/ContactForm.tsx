import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { GradientButton } from "@/components/GradientButton";
import { Field, TextAreaField } from "@/components/Field";

const FORMSPREE_URL = "https://formspree.io/f/mqedzkko";

export const ContactForm = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [statusKey, setStatusKey] = useState<'sending' | 'sent' | 'failed' | 'error' | null>(null);
  const isSending = statusKey === 'sending';

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
    setStatusKey('sending');

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
        setStatusKey('sent');
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        setStatusKey('failed');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusKey('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 md:gap-6"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <Field
          label={t('form.nameLabel')}
          name="Name"
          placeholder={t('form.namePlaceholder')}
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <Field
          label={t('form.emailLabel')}
          name="Email"
          type="email"
          placeholder={t('form.emailPlaceholder')}
          value={formData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <TextAreaField
        label={t('form.messageLabel')}
        name="Message"
        placeholder={t('form.messagePlaceholder')}
        value={formData.Message}
        onChange={handleChange}
        required
      />
      <div className="flex w-full flex-col items-center gap-4 md:gap-5">
        <GradientButton type="submit" disabled={isSending}>
          <span className="text-lg font-semibold tracking-[-0.72px] leading-[19px] text-stone-900 font-dm_sans">
            {isSending ? t('form.sending') : t('form.submit')}
          </span>
        </GradientButton>
      </div>
      {statusKey && !isSending ? (
        <p className="text-center text-sm text-stone-700 font-dm_sans">{t(`form.${statusKey}`)}</p>
      ) : null}
    </form>
  );
};
