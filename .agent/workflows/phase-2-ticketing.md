---
description: Phase 2 - Ticket Lifecycle (Create, List, Detail)
---

Follow these steps to implement the core ticketing flow.

1. **Ticket Creation Wizard**
   - Create `src/app/projects/create/page.tsx`.
   - Implement a 4-step wizard:
     - **Step 1**: Basic Info (Title, Category, System, Description).
     - **Step 2**: Risk & Priority (Business Impact, Rollback plan).
     - **Step 3**: Schedule & Docs (Target Date, Maintenance Window, File Upload).
     - **Step 4**: Preview & Submit.

2. **Advanced Ticket List**
   - Update `src/app/projects/list/page.tsx` or create a new Ticket List page.
   - Implement advanced filtering: Status, Category, Priority, Assignee.
   - Add bulk actions (Approve massal, Reassign).
   - Implement Ticket ID generation (e.g., CR-2024-0001).

3. **In-depth Ticket Details**
   - Create `src/app/projects/[id]/page.tsx`.
   - Implement Tabbed content:
     - **Description**: Details & justification.
     - **Documents**: File gallery & download.
     - **Approval**: Visual workflow timeline/history.
     - **Audit Trail**: Action logs.
