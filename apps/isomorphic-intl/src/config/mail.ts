export const MAIL = {
  service: 'gmail',
  name: process.env.SMTP_HOST || 'smtp.google.com',
  host: process.env.SMTP_HOST || 'smtp.google.com',
  port: parseInt(process.env.SMTP_PORT || '586'),
  secure: true,
  // host: 'smtp.google.com',
  // port: 465,
  // secure: true,
  auth: {
    user: process.env.SMTP_USER || 'user',
    pass: process.env.SMTP_PASSWORD || 'password',
  },
  from: process.env.SMTP_FROM_EMAIL || 'admin@location.dev',
  logger: true,
  debug: true,
};
