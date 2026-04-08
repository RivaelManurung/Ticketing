---
description: Phase 1 - Authentication & Core Dashboard Setup
---

Follow these steps to implement the core authentication and dashboard foundation for Ticketing Perbankan.

1. **Authentication UI**
   - Update `src/app/login/page.tsx` with SSO/LDAP options.
   - Implement Forget Password and Reset Password layouts.
   - Add MFA/OTP verification screens.

2. **Dashboard Layout**
   - Update `src/app/page.tsx` (Dashboard) to include banking-specific summary cards.
   - [ ] Add summary cards: Open, In-Progress, Closed, Overdue.
   - [ ] Implement Ticket Volume charts (using Recharts).
   - [ ] Add "My Tasks" and "Pending Approvals" widgets.

3. **SLA & Shortcuts**
   - Add SLA countdown logic to the dashboard tickets.
   - Create a Quick Shortcut panel: Create Ticket, Search, Reports.
   - Add a Calendar widget for maintenance windows/CAB meetings.
