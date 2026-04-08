---
description: Phase 5 - User Roles & Master Data Configuration
---

This workflow handles the administrative backbone of the ticketing system.

1. **RBAC (Role-Based Access Control)**
   - Create `src/app/admin/users/page.tsx`.
   - Implement User Management table:
     - [ ] Assign roles: Super Admin, Maker, Checker, Approver, etc.
     - [ ] Scope-based access: Per system (Mobile Banking vs Core Banking).
     - [ ] User status management (Active, Suspended, Deactivated).

2. **Master Data Management**
   - Create configuration pages for:
     - **Categories**: C.R, Bug Fix, Enhancement, Patch.
     - **Systems**: List of banking applications (Core, Mobile, ATM).
     - **SLA Config**: Set hour/day limits per priority (Critical = 4hr, Low = 5 days).

3. **Dynamic Workflow Engine Config**
   - Build a UI to define Approval Flows per Category/System.
   - Example: Core Banking CRs require 3 approvers, while UI Bugs only require 1 checker.
