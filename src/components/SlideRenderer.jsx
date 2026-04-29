/**
 * SlideRenderer — Maps layout types from content data to layout components.
 */
import React from 'react';
import {
  TitleSlide, SectionDivider, SingleColumnSlide, TwoColumnSlide,
  ComparisonSlide, FlowSlide, SpotlightSlide, StepsSlide,
  StackedSlide, FeatureGridSlide, SplitSlide, TimelineSlide,
  StatsSlide, ClosingSlide,
} from './SlideLayouts';

const layoutMap = {
  title: TitleSlide,
  section: SectionDivider,
  single: SingleColumnSlide,
  'two-col': TwoColumnSlide,
  comparison: ComparisonSlide,
  flow: FlowSlide,
  spotlight: SpotlightSlide,
  steps: StepsSlide,
  stacked: StackedSlide,
  'feature-grid': FeatureGridSlide,
  split: SplitSlide,
  timeline: TimelineSlide,
  stats: StatsSlide,
  closing: ClosingSlide,
};

export default function SlideRenderer({ slide }) {
  const Component = layoutMap[slide.layout] || SingleColumnSlide;
  return <Component data={slide} />;
}
