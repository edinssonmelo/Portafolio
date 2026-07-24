type TagChipProps = {
    label: string;
};

export const TagChip = ({ label }: TagChipProps) => (
    <span className="inline-flex items-center rounded-full border-2 border-stone-900 bg-neutral-100 px-3 py-0.5 text-sm font-semibold text-stone-900 font-dm_sans">
        {label}
    </span>
);
