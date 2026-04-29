/**
 * SlideLayouts — Diverse layout components for visual variety.
 *
 * Layout types:
 *   title, section, single, two-col, comparison,
 *   flow, closing, spotlight, steps, stacked,
 *   feature-grid, split, timeline, stats
 */
import React from 'react';
import GlassCard from './GlassCard';
import DiagramSlot from './DiagramSlot';

/* ---- Title Slide ---- */
export function TitleSlide({ data }) {
  return (
    <div className="slide title-slide">
      <div className="fade-in fade-in-delay-1">
        <span className="slide-section-tag">{data.sectionTag}</span>
      </div>
      <h1 className="slide-title fade-in fade-in-delay-2">{data.title}</h1>
      <div className="title-slide__line fade-in fade-in-delay-3" />
      <p className="title-slide__subtitle fade-in fade-in-delay-3">{data.subtitle}</p>
      {data.diagram && (
        <div className="fade-in fade-in-delay-4" style={{ width: '100%', maxWidth: 360, margin: '0 auto' }}>
          <DiagramSlot type={data.diagram.type} label={data.diagram.label} />
        </div>
      )}
      {data.meta && <p className="title-slide__meta fade-in fade-in-delay-5">{data.meta}</p>}
    </div>
  );
}

/* ---- Section Divider ---- */
export function SectionDivider({ data }) {
  return (
    <div className="slide section-divider">
      <span className="section-divider__number fade-in fade-in-delay-1">{data.sectionTag}</span>
      <h1 className="slide-title fade-in fade-in-delay-2">{data.title}</h1>
      {data.subtitle && <p className="slide-subtitle fade-in fade-in-delay-3">{data.subtitle}</p>}
      <div className="section-divider__line fade-in fade-in-delay-4" />
    </div>
  );
}

/* ---- Single Column (text card + optional diagram) ---- */
export function SingleColumnSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-single">
        <GlassCard className="fade-in fade-in-delay-2">
          <div className="slide-body">
            <ul>{data.bullets && data.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        </GlassCard>
        {data.diagram && (
          <div className="fade-in fade-in-delay-3">
            <DiagramSlot type={data.diagram.type} label={data.diagram.label} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Two Column (text + diagram) ---- */
export function TwoColumnSlide({ data }) {
  const gridClass = data.gridVariant
    ? `layout-two-col layout-two-col--${data.gridVariant}`
    : 'layout-two-col layout-two-col--text-diagram';
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className={gridClass}>
        <GlassCard className="fade-in fade-in-delay-2">
          <div className="slide-body">
            <ul>{data.bullets && data.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        </GlassCard>
        <div className="fade-in fade-in-delay-3">
          {data.diagram ? <DiagramSlot type={data.diagram.type} label={data.diagram.label} /> : <div />}
        </div>
      </div>
    </div>
  );
}

/* ---- Comparison (multi-card grid) ---- */
export function ComparisonSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-comparison">
        {data.cards && data.cards.map((card, i) => (
          <div className={`comparison-card fade-in fade-in-delay-${Math.min(i + 2, 5)}`} key={i}>
            <div className="comparison-card__title">{card.title}</div>
            <div className="comparison-card__body">{card.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Flow / Synthesis ---- */
export function FlowSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-single">
        {data.bullets && (
          <GlassCard variant="subtle" className="fade-in fade-in-delay-2">
            <div className="slide-body">
              <ul>{data.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          </GlassCard>
        )}
        {data.flowNodes && (
          <div className="flow-chain fade-in fade-in-delay-3">
            {data.flowNodes.map((node, i) => (
              <React.Fragment key={i}>
                <div className="flow-chain__node">{node}</div>
                {i < data.flowNodes.length - 1 && <span className="flow-chain__arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Spotlight (big statement + support text) ---- */
export function SpotlightSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <div className="layout-spotlight">
        <h2 className="spotlight-statement fade-in fade-in-delay-1">{data.statement}</h2>
        {data.support && <p className="spotlight-support fade-in fade-in-delay-2">{data.support}</p>}
        {data.callout && (
          <div className="callout fade-in fade-in-delay-3">
            <span className="callout__icon">{data.callout.icon || '💡'}</span>
            <span className="callout__text">{data.callout.text}</span>
          </div>
        )}
        {data.diagram && (
          <div className="fade-in fade-in-delay-4" style={{ width: '100%', maxWidth: 500 }}>
            <DiagramSlot type={data.diagram.type} label={data.diagram.label} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Numbered Steps ---- */
export function StepsSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-steps">
        {data.steps && data.steps.map((step, i) => (
          <div className={`step-item fade-in fade-in-delay-${Math.min(i + 2, 6)}`} key={i}>
            <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
            <span className="step-text">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Stacked Cards (icon + title + body) ---- */
export function StackedSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-stacked">
        {data.items && data.items.map((item, i) => (
          <div className={`stacked-card fade-in fade-in-delay-${Math.min(i + 2, 6)}`} key={i}>
            {item.icon && <span className="stacked-card__icon">{item.icon}</span>}
            <div className="stacked-card__content">
              <div className="stacked-card__title">{item.title}</div>
              <div className="stacked-card__body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Feature Grid ---- */
export function FeatureGridSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      {data.subtitle && <p className="slide-subtitle fade-in fade-in-delay-1">{data.subtitle}</p>}
      <div className="layout-feature-grid">
        {data.features && data.features.map((f, i) => (
          <div className={`feature-cell fade-in fade-in-delay-${Math.min(i + 2, 6)}`} key={i}>
            <span className="feature-cell__icon">{f.icon}</span>
            <span className="feature-cell__label">{f.label}</span>
            <span className="feature-cell__desc">{f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Split Panel (asymmetric two-panel) ---- */
export function SplitSlide({ data }) {
  return (
    <div className="slide" style={{ padding: 0 }}>
      <div className="layout-split">
        <div className="split-panel split-panel--dark fade-in fade-in-delay-1">
          <span className="slide-section-tag">{data.sectionTag}</span>
          <h2 className="slide-title" style={{ fontSize: '1.9rem', marginBottom: 14 }}>{data.title}</h2>
          {data.leftText && <p className="slide-body" style={{ opacity: 0.8, fontSize: '0.92rem' }}>{data.leftText}</p>}
          {data.bullets && (
            <div className="slide-body" style={{ marginTop: 12 }}>
              <ul>{data.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          )}
        </div>
        <div className="split-panel split-panel--accent fade-in fade-in-delay-3">
          {data.diagram ? (
            <DiagramSlot type={data.diagram.type} label={data.diagram.label} />
          ) : data.rightContent ? (
            <div className="slide-body">{data.rightContent}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ---- Timeline / Progression ---- */
export function TimelineSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      <div className="layout-timeline" style={{ position: 'relative' }}>
        <div className="timeline-connector" />
        {data.stages && data.stages.map((s, i) => (
          <div className={`timeline-stage fade-in fade-in-delay-${Math.min(i + 2, 6)}`} key={i}>
            <span className="timeline-stage__icon">{s.icon}</span>
            <span className="timeline-stage__label">{s.label}</span>
            <span className="timeline-stage__desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Stats / Evidence Panel ---- */
export function StatsSlide({ data }) {
  return (
    <div className="slide">
      <span className="slide-section-tag fade-in">{data.sectionTag}</span>
      <h2 className="slide-title fade-in fade-in-delay-1">{data.title}</h2>
      {data.subtitle && <p className="slide-subtitle fade-in fade-in-delay-1">{data.subtitle}</p>}
      <div className="layout-stats fade-in fade-in-delay-2">
        {data.stats && data.stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-card__value">{s.value}</div>
            <div className="stat-card__label">{s.label}</div>
          </div>
        ))}
      </div>
      {data.note && (
        <div className="accent-bar fade-in fade-in-delay-4" style={{ marginTop: 18 }}>
          <p className="accent-bar__text">{data.note}</p>
        </div>
      )}
    </div>
  );
}

/* ---- Closing Slide ---- */
export function ClosingSlide({ data }) {
  return (
    <div className="slide title-slide">
      <h1 className="slide-title fade-in fade-in-delay-1" style={{ fontSize: '2.8rem' }}>{data.title}</h1>
      <div className="title-slide__line fade-in fade-in-delay-2" />
      {data.subtitle && <p className="title-slide__subtitle fade-in fade-in-delay-3">{data.subtitle}</p>}
    </div>
  );
}
