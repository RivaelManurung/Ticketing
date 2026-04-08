# Web Ticketing Perbankan - Agent Hub

This is the central command center for building the Banking Ticketing System. Refer to the workflows below to implement features step-by-step.

## 🚀 Implementation Roadmap

1.  **[/phase-1-dashboard](.agent/workflows/phase-1-dashboard.md)**: Auth, Dashboard, and Foundation.
2.  **[/phase-2-ticketing](.agent/workflows/phase-2-ticketing.md)**: Ticket Creation, List, and Detail Views.
3.  **[/phase-3-approval-cab](.agent/workflows/phase-3-approval-cab.md)**: Approval Workflows & CAB Management.
4.  **[/phase-4-notifications](.agent/workflows/phase-4-notifications.md)**: Notifications & Communication System.
5.  **[/phase-5-user-master-data](.agent/workflows/phase-5-user-master-data.md)**: User Roles & Master Data Configuration.
6.  **[/phase-6-reporting](.agent/workflows/phase-6-reporting.md)**: Reporting & Executive Dashboard.
7.  **[/phase-7-security-utilities](.agent/workflows/phase-7-security-utilities.md)**: Security, Audit Logs & Platform Utilities.
8.  **[/phase-8-global-ui-ux](.agent/workflows/phase-8-global-ui-ux.md)**: Global UI/UX & Component Standardization.

---

================================================================
  WEB TICKETING PERBANKAN - DAFTAR FITUR UI
  Change Request & IT Service Management System
================================================================


================================================================
  1. HALAMAN LOGIN & AUTENTIKASI
================================================================

  [ ] Form login (username + password)
  [ ] Single Sign-On (SSO) / LDAP integration
  [ ] Multi-Factor Authentication (MFA / OTP)
  [ ] Halaman lupa password / reset password
  [ ] Session timeout dengan notifikasi peringatan
  [ ] Riwayat login terakhir (last login info)


================================================================
  2. DASHBOARD UTAMA
================================================================

  [ ] Summary card: Total tiket (open, in-progress, closed, overdue)
  [ ] Grafik volume tiket per minggu / bulan
  [ ] Daftar tiket yang perlu tindakan (my tasks)
  [ ] Daftar tiket menunggu approval saya
  [ ] SLA countdown per tiket aktif
  [ ] Notifikasi terbaru (badge & dropdown)
  [ ] Quick shortcut: buat tiket baru, cari tiket, laporan
  [ ] Widget kalender: jadwal implementasi / CAB meeting


================================================================
  3. MANAJEMEN TIKET
================================================================

  3.1 BUAT TIKET BARU
  ----------------------------------------------------------------
  [ ] Form multi-step (wizard / stepper):
      Step 1 - Informasi Dasar
        - Judul / ringkasan perubahan
        - Kategori (Change Request, Bug Fix, Enhancement, Patch)
        - Sub-kategori (Core Banking, Mobile Banking, Jaringan, dll)
        - Sistem / aplikasi yang terdampak
        - Deskripsi detail perubahan
        - Alasan / justifikasi perubahan

      Step 2 - Prioritas & Risiko
        - Tingkat prioritas (Critical, High, Medium, Low)
        - Tingkat risiko (High, Medium, Low)
        - Dampak bisnis jika tidak dilakukan
        - Dampak bisnis jika dilakukan (rollback plan)
        - Estimasi downtime (jika ada)

      Step 3 - Jadwal & Dokumen
        - Target tanggal implementasi
        - Jendela waktu implementasi (maintenance window)
        - Upload dokumen pendukung (BRD, TSD, UAT result, dll)
        - Checklist pre-implementasi

      Step 4 - Review & Submit
        - Preview ringkasan semua input
        - Konfirmasi submit

  3.2 DAFTAR TIKET
  ----------------------------------------------------------------
  [ ] Tabel tiket dengan kolom:
      - Nomor tiket (auto-generated, e.g. CR-2024-0001)
      - Judul
      - Kategori
      - Sistem terdampak
      - Prioritas (badge warna)
      - Status (badge warna)
      - Penanggung jawab (assignee)
      - Tanggal dibuat
      - Deadline / SLA
      - Aksi (lihat, edit, approve)
  [ ] Filter: status, kategori, prioritas, sistem, tanggal, assignee
  [ ] Pencarian full-text (search bar)
  [ ] Sorting per kolom
  [ ] Pagination
  [ ] Export ke Excel / CSV
  [ ] Bulk action (approve massal, reassign massal)
  [ ] Toggle tampilan: tabel vs kanban board

  3.3 DETAIL TIKET
  ----------------------------------------------------------------
  [ ] Header: nomor tiket, judul, status badge, prioritas badge
  [ ] Info panel:
      - Dibuat oleh, tanggal dibuat
      - Assignee saat ini
      - Tim penanggung jawab
      - Sistem / aplikasi terdampak
      - Target implementasi
      - SLA countdown timer
  [ ] Tab konten:
      - Tab Deskripsi: detail perubahan, justifikasi, risiko
      - Tab Dokumen: daftar lampiran + preview + download
      - Tab Approval: riwayat alur persetujuan (timeline)
      - Tab Komentar: thread diskusi
      - Tab Audit Trail: log semua perubahan
      - Tab Implementasi: checklist & catatan pasca implementasi
  [ ] Tombol aksi: Approve, Reject, Reassign, Eskalasi, Close


================================================================
  4. APPROVAL WORKFLOW
================================================================

  [ ] Visualisasi alur approval (flowchart / stepper horizontal):
      Maker → Checker → Manager → Approver (CAB)
  [ ] Status setiap node: Pending, Approved, Rejected, Skipped
  [ ] Panel approve/reject dengan field komentar wajib diisi
  [ ] Tombol delegasi approval (jika tidak bisa approve sendiri)
  [ ] History approval: siapa approve/reject, kapan, komentar apa
  [ ] Notifikasi in-app saat giliran approve
  [ ] Indikator SLA approval (waktu tersisa untuk approve)
  [ ] Fitur recall / tarik kembali tiket (oleh maker, sebelum approved)


================================================================
  5. CAB (CHANGE ADVISORY BOARD) MANAGEMENT
================================================================

  [ ] Daftar jadwal CAB meeting
  [ ] Buat & edit jadwal CAB
  [ ] Daftar tiket yang masuk agenda CAB
  [ ] Fitur voting anggota CAB (Approve / Reject / Defer)
  [ ] Hasil voting ditampilkan secara real-time
  [ ] Notulen / catatan hasil CAB
  [ ] Notifikasi undangan meeting ke anggota CAB
  [ ] Lampiran materi presentasi CAB


================================================================
  6. NOTIFIKASI & KOMUNIKASI
================================================================

  [ ] Notification center (panel dropdown di navbar)
  [ ] Tandai sudah dibaca / belum dibaca
  [ ] Filter notifikasi per tipe (approval, komentar, SLA, dll)
  [ ] Pengaturan preferensi notifikasi:
      - Email on/off per event
      - WhatsApp / Telegram on/off
      - In-app on/off
  [ ] Thread komentar per tiket:
      - Balas komentar (nested reply)
      - Mention user dengan @nama
      - Tandai komentar sebagai internal (tidak terlihat requester)
      - Upload gambar / file dalam komentar
      - Edit & hapus komentar sendiri


================================================================
  7. MANAJEMEN USER & ROLE
================================================================

  [ ] Daftar user dengan filter dan search
  [ ] Tambah / edit / nonaktifkan user
  [ ] Assign role per user:
      - Super Admin
      - Admin
      - Maker (pembuat tiket)
      - Checker
      - Approver
      - CAB Member
      - Viewer / Read-Only
  [ ] Assign akses per sistem / modul
  [ ] Halaman profil user:
      - Edit info pribadi
      - Ganti password
      - Kelola preferensi notifikasi
      - Riwayat aktivitas


================================================================
  8. MASTER DATA & KONFIGURASI
================================================================

  [ ] Manajemen kategori & sub-kategori tiket
  [ ] Manajemen sistem / aplikasi (daftar sistem yang bisa dipilih)
  [ ] Konfigurasi SLA per prioritas:
      - Critical: contoh 4 jam
      - High: 1 hari kerja
      - Medium: 3 hari kerja
      - Low: 5 hari kerja
  [ ] Konfigurasi alur approval per kategori / sistem
  [ ] Template tiket (preset form untuk tipe perubahan umum)
  [ ] Manajemen maintenance window / blackout date
  [ ] Konfigurasi eskalasi otomatis


================================================================
  9. REPORTING & DASHBOARD MANAJEMEN
================================================================

  [ ] Dashboard eksekutif:
      - Total tiket per periode
      - % SLA compliance
      - Rata-rata waktu resolusi
      - Tiket overdue
  [ ] Laporan per sistem / aplikasi
  [ ] Laporan per tim / divisi
  [ ] Laporan per jenis perubahan
  [ ] Grafik tren volume tiket (line chart)
  [ ] Grafik distribusi kategori (pie / donut chart)
  [ Laporan audit trail (untuk kebutuhan pemeriksaan OJK/BI)
  [ ] Export laporan: Excel, PDF, CSV
  [ ] Jadwal laporan otomatis (scheduled report via email)


================================================================
  10. KEAMANAN & AUDIT
================================================================

  [ ] Halaman audit trail:
      - Filter per tiket / user / tanggal / tipe aksi
      - Tampilkan: siapa, kapan, aksi apa, nilai sebelum & sesudah
      - Export audit log
  [ ] Manajemen sesi aktif user (force logout)
  [ ] Log login / logout
  [ ] Halaman kebijakan keamanan & persetujuan pengguna
  [ ] IP whitelist management (opsional)


================================================================
  11. HALAMAN LAIN-LAIN
================================================================

  [ ] Halaman pencarian global (search across semua tiket & dokumen)
  [ ] Halaman bantuan / FAQ
  [ ] Panduan pengguna (user guide inline atau link ke dokumen)
  [ ] Halaman 404 (not found)
  [ ] Halaman 403 (akses ditolak)
  [ ] Halaman pemeliharaan (maintenance page)
  [ ] Halaman pengaturan sistem (system settings)


================================================================
  CATATAN TAMBAHAN UI/UX
================================================================

  [ ] Responsive design (desktop & tablet)
  [ ] Dark mode / light mode toggle
  [ ] Breadcrumb navigasi
  [ ] Loading skeleton saat fetch data
  [ ] Konfirmasi dialog sebelum aksi destructive (reject, hapus)
  [ ] Toast notification untuk feedback aksi (berhasil / gagal)
  [ ] Keyboard shortcut untuk power user
  [ ] Aksesibilitas (WCAG 2.1 AA)


================================================================
  STATUS BADGE REFERENCE
================================================================

  DRAFT          - Tiket baru dibuat, belum disubmit
  SUBMITTED      - Sudah disubmit, menunggu review
  IN REVIEW      - Sedang dalam proses review/approval
  WAITING CAB    - Menunggu keputusan CAB
  APPROVED       - Disetujui, siap implementasi
  SCHEDULED      - Terjadwal untuk implementasi
  IN PROGRESS    - Sedang diimplementasi
  IMPLEMENTED    - Implementasi selesai, menunggu verifikasi
  CLOSED         - Tiket selesai dan ditutup
  REJECTED       - Ditolak (dengan keterangan alasan)
  CANCELLED      - Dibatalkan oleh requester
  ON HOLD        - Ditunda sementara

================================================================
  v1.0 | Web Ticketing Perbankan | Fitur UI
================================================================