'use strict';

/**
 * Lifecycle hooks for contact-submission
 * Sends email notification when a new submission is created
 */

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Only send email if email plugin is configured
    try {
      await strapi.plugins['email'].services.email.send({
        to: process.env.ADMIN_EMAIL || 'contact@wiredbrains.io',
        subject: `New Contact Form Submission from ${result.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${result.company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${result.message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          <p><small>Source: ${result.source_page || 'Contact Page'}</small></p>
        `,
        text: `
New Contact Form Submission

Name: ${result.name}
Email: ${result.email}
Phone: ${result.phone || 'Not provided'}
Company: ${result.company || 'Not provided'}

Message:
${result.message}

---
Submitted at: ${new Date().toISOString()}
Source: ${result.source_page || 'Contact Page'}
        `,
      });

      strapi.log.info(`Email notification sent for submission from ${result.email}`);
    } catch (error) {
      // Don't fail the submission if email fails
      strapi.log.error('Failed to send email notification:', error.message);
    }
  },
};
