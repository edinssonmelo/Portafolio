import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Activity, ArrowLeft, ArrowUpRight, Check, ChevronRight, Pause, Play, RotateCcw, Zap } from 'lucide-react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { useLocale } from '@/hooks/useLocale';
import './BotPlayPage.css';

type DemoMatch = { id: string; sport: string; league: string; home: string; away: string; initials: [string,string]; score: string; minute: string; odds: [number, number]; color: string };
const matches: DemoMatch[] = [
  { id: 'football', sport: 'football', league: 'Colombia · Primera A', home: 'Atlético Nacional', away: 'Millonarios', initials: ['AN','MIL'], score: '1 : 1', minute: "67′", odds: [2.16,2.06], color: '#53d5a4' },
  { id: 'tennis', sport: 'tennis', league: 'ATP · Singles', home: 'Carlos Alcaraz', away: 'Jannik Sinner', initials: ['CA','JS'], score: '1 : 1', minute: 'Set 3', odds: [2.24,1.94], color: '#a8b7fc' },
  { id: 'basketball', sport: 'basketball', league: 'Basketball · Exhibition', home: 'Boston Celtics', away: 'Miami Heat', initials: ['BOS','MIA'], score: '78 : 75', minute: 'Q4 · 08:42', odds: [1.98,2.15], color: '#eab788' },
];
const oddsFor = (m: DemoMatch, tick: number): [number,number] => [+(m.odds[0] + Math.sin(tick * .8 + matches.indexOf(m)) * .025).toFixed(2), +(m.odds[1] + Math.cos(tick * .65) * .02).toFixed(2)];
const marginFor = (odds: [number,number]) => (1 / (1 / odds[0] + 1 / odds[1]) - 1) * 100;

export const BotPlayPage = () => {
  const { t } = useTranslation('projects');
  const { to } = useLocale();
  const tr = (key: string) => t(`botplayDemo.${key}`);
  const [running, setRunning] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [tick, setTick] = useState(0);
  const [sport, setSport] = useState('all');
  const [selected, setSelected] = useState('football');
  useEffect(() => { if (!running) return; const timer = window.setInterval(() => setTick(n => n + 1), 3500); return () => window.clearInterval(timer); }, [running]);
  const shown = matches.filter(m => sport === 'all' || m.sport === sport);
  const current = matches.find(m => m.id === selected)!;
  const odds = oddsFor(current, tick);
  const reset = () => { setTick(0); setSport('all'); setSelected('football'); };
  const filter = (value: string) => { setSport(value); if(value !== 'all') setSelected(value); };
  return <div className="bp-page font-dm_sans">
    <Header />
    <main className="bp-main">
      <div className="bp-intro">
        <Link to={to('/projects')} className="bp-back"><ArrowLeft size={14}/>{tr('back')}</Link>
        <div className="bp-heading"><div><p className="bp-kicker">PYTHON / FASTAPI / REAL-TIME DATA</p><h1>BotPlay <span>Radar</span></h1><p className="bp-lead">{tr('lead')}</p></div><span className="bp-project-label">{tr('project')}</span></div>
      </div>
      <section className="bp-console" aria-label={tr('demoLabel')}>
        <div className="bp-console-header"><div className="bp-console-brand"><span className="bp-icon"><Activity size={21}/></span><div><strong>BotPlay</strong><span>MARKET RADAR</span></div></div><div className="bp-demo-badge"><span/>{tr('simulated')}</div><div className="bp-controls"><button onClick={() => setRunning(!running)} aria-label={tr(running ? 'pause' : 'play')} title={tr(running ? 'pause' : 'play')}>{running ? <Pause size={15}/> : <Play size={15}/>}</button><button onClick={reset} aria-label={tr('reset')} title={tr('reset')}><RotateCcw size={15}/></button></div></div>
        <div className="bp-console-body">
          <div className="bp-overview"><div><p className="bp-eyebrow">{tr('workspace')}</p><h2>{tr('radarTitle')}</h2><p>{tr('radarLead')}</p></div><div className="bp-sources"><span><i/>BetPlay <b>Kambi</b></span><span><i/>Pinnacle <b>Arcadia</b></span><small>{tr('demoSources')}</small></div></div>
          <div className="bp-metrics"><div><span>{tr('matched')}</span><strong>03 <small><Check size={12}/>{tr('sameEvent')}</small></strong></div><div><span>{tr('opportunities')}</span><strong>03 <small className="bp-green">{tr('detected')}</small></strong></div><div><span>{tr('bestSpread')}</span><strong className="bp-green">+{Math.max(...matches.map(m => marginFor(oddsFor(m,tick)))).toFixed(2)}<em>%</em><small><ArrowUpRight size={14}/>{tr('illustrative')}</small></strong></div></div>
          <div className="bp-content">
            <div className="bp-match-panel"><div className="bp-list-header"><h3>{tr('opportunityList')} <span>{shown.length.toString().padStart(2,'0')}</span></h3><span className="bp-tick"><i className={running ? 'active' : ''}/>{tr(running ? 'updating' : 'paused')}</span></div>
              <div className="bp-filters" aria-label={tr('filter')}>
                {['all','football','tennis','basketball'].map(value => <button key={value} aria-pressed={sport === value} className={sport === value ? 'selected' : ''} onClick={() => filter(value)}>{tr(value)}</button>)}
              </div>
              <div className="bp-match-list">{shown.map(m => { const o = oddsFor(m,tick); return <button className={`bp-match ${selected === m.id ? 'is-selected' : ''}`} key={m.id} onClick={() => setSelected(m.id)} aria-pressed={selected === m.id}>
                <div className="bp-match-top"><span><i style={{background:m.color}}/>{m.league}</span><span>{m.minute}</span></div>
                <div className="bp-match-core"><div className="bp-teams"><span><i style={{color:m.color}}>{m.initials[0]}</i>{m.home}</span><span><i>{m.initials[1]}</i>{m.away}</span></div><span className="bp-score">{m.score}</span><div className="bp-match-margin"><strong>+{marginFor(o).toFixed(2)}%</strong><span>{tr('spread')}</span></div><ChevronRight className="bp-chevron" size={17}/></div>
                <div className="bp-odds-row"><span><b>BetPlay</b><span>{m.initials[0]}</span><strong key={`bp-${tick}`}>{o[0].toFixed(2)}</strong></span><span><b>Pinnacle</b><span>{m.initials[1]}</span><strong key={`pin-${tick}`}>{o[1].toFixed(2)}</strong></span><span className="bp-matched"><Check size={12}/>{tr('matchedShort')}</span></div>
              </button>; })}</div>
              <div className="bp-stream-footer"><span><Activity size={13}/>{tr('engine')}</span><span>{tr('update')} #{String(tick + 1).padStart(3,'0')}</span></div>
            </div>
            <aside className="bp-detail"><div className="bp-detail-label"><Zap size={15}/>{tr('signal')}</div><h3>{current.home}<span>vs {current.away}</span></h3><div className="bp-detail-spread"><span>{tr('combinedSpread')}</span><strong>+{marginFor(odds).toFixed(2)}<small>%</small><ArrowUpRight size={24}/></strong><p>{tr('spreadExplanation')}</p></div>
              <div className="bp-chart"><div><span>{tr('movement')}</span><span>{tr('sample')}</span></div><svg viewBox="0 0 270 70" role="img" aria-label={tr('chartAlt')}><defs><linearGradient id="bpFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c5f66a" stopOpacity=".18"/><stop offset="1" stopColor="#c5f66a" stopOpacity="0"/></linearGradient></defs><path d="M0 62 L0 55 L22 48 L45 51 L67 31 L90 39 L112 26 L135 35 L157 17 L180 23 L202 13 L225 18 L248 7 L270 10 L270 70 L0 70Z" fill="url(#bpFill)"/><path d="M0 55 L22 48 L45 51 L67 31 L90 39 L112 26 L135 35 L157 17 L180 23 L202 13 L225 18 L248 7 L270 10" fill="none" stroke="#c5f66a" strokeWidth="2"/><circle cx="270" cy="10" r="3" fill="#c5f66a"/></svg></div>
              <div className="bp-legs"><div><span className="bp-book bp-book-green">B</span><div><strong>BetPlay</strong><span>{current.home}</span></div><b>{odds[0].toFixed(2)}</b></div><div><span className="bp-book bp-book-blue">P</span><div><strong>Pinnacle</strong><span>{current.away}</span></div><b>{odds[1].toFixed(2)}</b></div></div>
              <div className="bp-validation"><Check size={14}/><div><strong>{tr('ruleBased')}</strong><span>{tr('ruleNote')}</span></div></div>
            </aside>
          </div>
          <div className="bp-console-note"><span>{tr('demoNote')}</span><span>BetPlay × Pinnacle</span></div>
        </div>
      </section>
      <section className="bp-how" aria-label={tr('how')}>
        {[0,1,2].map(i => <div key={i}><span>0{i+1}</span><div><h2>{tr(`steps.${i}.title`)}</h2><p>{tr(`steps.${i}.body`)}</p></div></div>)}
      </section>
      <p className="bp-bottom-note">{tr('scope')}</p>
    </main>
    <Footer />
  </div>;
};
