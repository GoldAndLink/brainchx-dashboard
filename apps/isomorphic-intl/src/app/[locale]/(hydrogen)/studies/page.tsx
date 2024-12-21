import StudiesDashboard from '@/app/shared/dashboard/studies';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Studies'),
};

export default function StudiesPage() {
  return <StudiesDashboard />;
}
