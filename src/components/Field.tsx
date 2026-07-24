import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const labelClass = 'text-sm text-zinc-500 font-dm_sans';
const inputWrapperClass =
    'relative h-10 w-full border-b-2 border-stone-900 focus-within:border-brand-mint transition-colors';
const inputClass =
    'h-full w-full bg-transparent text-base text-stone-900 outline-none font-dm_sans placeholder:text-stone-400';

type FieldProps = {
    label: string;
    name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field = ({ label, name, ...inputProps }: FieldProps) => (
    <label className="flex w-full flex-col gap-1">
        <span className={labelClass}>{label}</span>
        <div className={inputWrapperClass}>
            <input name={name} className={inputClass} {...inputProps} />
        </div>
    </label>
);

type TextAreaFieldProps = {
    label: string;
    name: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaField = ({ label, name, ...textareaProps }: TextAreaFieldProps) => (
    <label className="flex w-full flex-col gap-1">
        <span className={labelClass}>{label}</span>
        <div className="relative min-h-[96px] w-full border-b-2 border-stone-900 focus-within:border-brand-mint transition-colors">
            <textarea
                name={name}
                className="min-h-[96px] w-full resize-y bg-transparent py-2 text-base text-stone-900 outline-none font-dm_sans placeholder:text-stone-400"
                {...textareaProps}
            />
        </div>
    </label>
);
