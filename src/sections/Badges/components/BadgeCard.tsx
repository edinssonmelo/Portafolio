interface BadgeCardProps {
    title: string;
    subtitle: string;
    href: string;
    icon: React.ReactNode;
}

export const BadgeCard = ({ title, subtitle, href, icon }: BadgeCardProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="static [align-items:normal] bg-white box-content caret-black gap-x-[normal] flex flex-col shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex-row md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-auto md:p-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] group"
        >
            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] flex shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto items-center md:relative md:content-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex-row md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[60px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[60px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] flex items-center justify-center">
                    {icon}
                </div>
                <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-semibold md:text-stone-900 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[24px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans mb-1">
                            {title}
                        </p>
                        <p className="text-black text-sm box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-normal md:text-stone-600 md:text-base md:aspect-auto md:box-border md:caret-transparent md:leading-[20px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
};




