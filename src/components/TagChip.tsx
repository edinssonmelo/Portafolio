type TagChipProps = {
    label: string;
    variant?: 'default' | 'muted';
};

const variantClasses: Record<NonNullable<TagChipProps['variant']>, string> = {
    default:
        'inline-flex items-center rounded-full border-2 border-stone-900 bg-neutral-100 px-3 py-0.5 text-sm font-semibold text-stone-900 font-dm_sans',
    muted:
        'inline-flex items-center rounded-full border border-stone-300 bg-transparent px-2 py-0.5 text-[11px] font-normal text-stone-500 font-dm_sans',
};

export const TagChip = ({ label, variant = 'default' }: TagChipProps) => (
    <span className={variantClasses[variant]}>{label}</span>
);
