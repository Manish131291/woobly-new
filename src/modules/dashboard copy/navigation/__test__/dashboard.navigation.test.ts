import { DashboardRoutes } from '../dashboard.navigation';

describe('Route definitions', () => {
  it('should define DashboardRoutes correctly', () => {
    expect(DashboardRoutes.path).toEqual('/dashboard');
  });
});
