import { useTranslation } from 'react-i18next';
import { SurfaceCard } from "@/components/SurfaceCard";
import { StatItem } from "@/sections/Stats/components/StatItem";

export const StatsGrid = () => {
  const { t } = useTranslation('stats');

  return (
    <SurfaceCard className="relative z-[1] w-full max-w-[900px] p-6 md:p-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
        <StatItem
          value="100"
          suffix="%"
          description={t('customers')}
        />
        <StatItem
          value="8"
          description={
            <>
              {t('experienceLine1')}
              <br />
              {t('experienceLine2')}
            </>
          }
        />
        <StatItem
          value="+50"
          description={
            <>
              {t('projectsLine1')}
              <br />
              {t('projectsLine2')}
            </>
          }
        />
        <StatItem
          value="+10"
          description={
            <>
              {t('awardsLine1')}
              <br />
              {t('awardsLine2')}
            </>
          }
        />
      </div>
    </SurfaceCard>
  );
};
