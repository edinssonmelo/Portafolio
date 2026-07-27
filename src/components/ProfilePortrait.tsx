import {
    portraitFrameToStyle,
    profilePortraitFrame,
} from '@/config/profilePortrait';
import {
    PROFILE_PORTRAIT_DISPLAY,
    profilePortraitSources,
    profilePortraitSrcSet,
} from '@/config/profilePortraitAssets';

type ProfilePortraitProps = {
    className?: string;
    sizes?: string;
    /** Set on the home hero LCP image only. */
    priority?: boolean;
};

export const ProfilePortrait = ({
    className = '',
    sizes = '(max-width: 1103px) 200px, 246px',
    priority = false,
}: ProfilePortraitProps) => {
    return (
        <picture>
            <source
                type="image/webp"
                srcSet={profilePortraitSrcSet.webp}
                sizes={sizes}
            />
            <img
                src={profilePortraitSources.fallback}
                srcSet={profilePortraitSrcSet.png}
                sizes={sizes}
                width={PROFILE_PORTRAIT_DISPLAY.width}
                height={PROFILE_PORTRAIT_DISPLAY.height}
                alt="Edinsson Melo"
                decoding="async"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                className={`h-full w-full min-h-full min-w-full object-cover ${className}`}
                style={portraitFrameToStyle(profilePortraitFrame)}
            />
        </picture>
    );
};
