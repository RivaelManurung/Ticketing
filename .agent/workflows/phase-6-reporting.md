---
description: Phase 6 - Reporting & Executive Dashboard
---

This workflow implements data visualization and reporting for management/auditors.

1. **Executive Dashboard**
   - Create `src/app/reports/dashboard/page.tsx`.
   - Implement "at-a-glance" metrics:
     - [ ] % SLA Compliance rate.
     - [ ] Average Resolution Time (Lead time).
     - [ ] Overdue Tickets Heatmap.
     - [ ] Volume Tren Line Chart (Monthly).

2. **Categorical Analysis**
   - Provide breakdown by System, App, Division, and Change Type.
   - Use Interactive Pie Charts for category distribution.

3. **Export Engine**
   - Build a background job/system to export reports to Excel, PDF, and CSV.
   - Implement "Scheduled Reports": Trigger an email delivery of the PDF report weekly to specific stakeholders.
   - Ensure OJK/BI compliance audit trail is included in every export.
