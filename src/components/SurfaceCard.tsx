import type { ReactNode } from 'react';

type SurfaceCardProps = {
    children: ReactNode;
    className?: string;
};

export const SurfaceCard = ({ children, className = '' }: SurfaceCardProps) => {
    return (
        <div
            className={`rounded-[20px] border-2 border-stone-900 bg-white ${className}`}
        >
            {children}
        </div>
    );
};
