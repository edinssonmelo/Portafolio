import {
    portraitFrameToStyle,
    profilePortraitFrame,
} from '@/config/profilePortrait';

type ProfilePortraitProps = {
    className?: string;
    sizes?: string;
};

export const ProfilePortrait = ({ className = '', sizes }: ProfilePortraitProps) => {
    return (
        <img
            sizes={sizes}
            src="/assets/hero.png"
            alt="Edinsson Melo"
            className={`h-full w-full min-h-full min-w-full object-cover ${className}`}
            style={portraitFrameToStyle(profilePortraitFrame)}
        />
    );
};
