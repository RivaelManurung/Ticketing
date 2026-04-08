---
description: Phase 3 - Approval Workflows & CAB Management
---

This workflow implements the complex logic for approvals and the Change Advisory Board (CAB) meeting management.

1. **Approval Visualization**
   - Implement a horizontal stepper for nodes: Maker → Checker → Manager → Approver (CAB).
   - Each node should have statuses: Pending (Active), Approved (Green/Check), Rejected (Red/Cross), Skipped (Grey).
   - Create an Approval Panel for users to:
     - [ ] Input mandatory comments for rejection.
     - [ ] Reassign/Delegate approval right.
     - [ ] Trigger "Recall" functionality for the maker.

2. **CAB Meeting Portal**
   - Create `src/app/cab/page.tsx` for meeting management.
   - Implement:
     - **Meeting Scheduler**: Form to create/edit CAB meetings.
     - **Agenda List**: Pull tickets that are "Pending CAB".
     - **Real-time Voting**: Integrated voting system (Approve/Reject/Defer) with live result display.
     - **Minutes of Meeting (MoM)**: Rich text editor to record CAB results and attachments.

3. **Workflow Notification Persistence**
   - Ensure an in-app "Action Required" notification is triggered when a move occurs.
   - Display SLA/Time-to-approve countdown prominently on the approval interface.
