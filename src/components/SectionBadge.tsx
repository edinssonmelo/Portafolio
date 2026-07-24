type SectionBadgeProps = {
    label: string;
    iconUrl?: string;
};

export const SectionBadge = ({ label, iconUrl }: SectionBadgeProps) => (
    <div className="inline-flex items-center gap-2 rounded-[20px] border-2 border-stone-900 bg-white px-4 py-1.5">
        {iconUrl ? (
            <img src={iconUrl} alt="" className="h-3 w-[11px] shrink-0" />
        ) : null}
        <span className="text-[13px] font-black uppercase tracking-[0.65px] leading-[23px] text-stone-900 font-dm_sans">
            {label}
        </span>
    </div>
);
