---
description: Phase 4 - Notifications & Communication System
---

This workflow build the communication bridge between users and the automated system notifications.

1. **Notification Center**
   - Create a dropdown panel in `src/components/header.tsx`.
   - Implement:
     - Badge counter for unread notifications.
     - Categorization: All, Approvals, Comments, System Alerts (SLA).
     - "Mark all as read" functionality.
   - Sync with backend events via WebSockets or polling.

2. **Preference Management**
   - Implement a "Notification Settings" page.
   - [ ] Multi-channel toggles: Email, WhatsApp, Telegram, In-app.
   - [ ] Event-based triggers: On Approval, On Comment, Near SLA Deadline.

3. **Discussion Threads**
   - Implement the "Tab Komentar" in Ticket Details.
   - Features:
     - Nested replies (threading).
     - User Mentions (@name) with autocompletion.
     - Internal Comments logic (only visible to specific roles).
     - Collaborative rich text editor with file/image attachments.
