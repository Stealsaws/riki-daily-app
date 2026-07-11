// ================================================================
//  RIKI Daily — Config
//  แก้ไขเฉพาะไฟล์นี้เมื่อต้องการเปลี่ยนค่า
// ================================================================
const RIKI_CONFIG = {
  // Supabase (สำหรับข้อมูล tasks, submissions, users)
  SUPABASE_URL:      'https://wiiiwubbivqrkmumtdvb.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaWl3dWJiaXZxcmttdW10ZHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0ODk2OTUsImV4cCI6MjA5OTA2NTY5NX0.eWx3A9TjQdDnKdt8xSzukoW755c9G2Y3s0k3Fkr9zj4',

  // Apps Script (สำหรับอัปโหลดรูปไป Google Drive เท่านั้น)
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw5TzQt8svDTMr0zd1j17zMkl5LKfM9uvjZt9pxoJ6z9fsXG-qBdcPHg-ORBF9Y77oM/exec',

  // Session
  SESSION_HOURS:    8,    // session มีอายุ 8 ชั่วโมง
  SESSION_WARN_MIN: 30,   // แจ้งเตือนก่อนหมด 30 นาที
  SESSION_KEY:      'riki_session_v3',

  // Offline queue
  OFFLINE_KEY: 'riki_offline_queue',
  OFFLINE_MAX:  50,       // สูงสุด 50 งานในคิว

  // Password salt (ต้องตรงกับ Apps Script เดิม)
  PW_SALT: 'RIKI_SALT_2025',
};
