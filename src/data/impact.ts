export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  period: string;
  source: string;
}

// No operational totals verified yet. Conflicting legacy reporting periods
// are recorded in migration/legacy-content.json. Missing totals are not zero.
export const impact: { lastUpdated: string | null; metrics: ImpactMetric[] } = {
  lastUpdated: null,
  metrics: [],
};
