const EMAIL_RECIPIENT = "drroccogervasi@gmail.com";

function createMailto(subject: string, body: string): string {
  const formattedBody = body.trim().replace(/\n/g, "\r\n");

  return `mailto:${EMAIL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
}

export const emailLinks = {
  transformation: createMailto(
    "GLP GlowUp: Start My Transformation",
    `Hi Dr. Rocco,

I'm ready to start my GLP GlowUp transformation.

Here are a few details about me:

- Name: 

- Phone: 

- Current GLP-1 medication status (using/considering/none): 

- Best days/times for a consultation: 

My main goal:


Any questions or notes:


Thank you. I look forward to hearing from you.`
  ),

  consultation: createMailto(
    "GLP GlowUp: Consultation Inquiry",
    `Hi Dr. Rocco,

I would like to book a consultation to discuss the GLP GlowUp program.

Here are my details:

- Name: 

- Phone: 

- Current GLP-1 medication status (using/considering/none): 

- Best days/times for a consultation: 

- Questions I have: 

Thank you. Please let me know the next available times.`
  ),

  foundation: createMailto(
    "GLP GlowUp: Foundation Package Inquiry",
    `Hi Dr. Rocco,

I am interested in the Foundation Package ($649/mo).

Here are my details:

- Name: 

- Phone: 

- Current GLP-1 medication status: 

- Best days/times to connect: 

My main goal:


Questions or notes:


Thank you. Please let me know the next steps to get started.`
  ),

  performance: createMailto(
    "GLP GlowUp: Performance Package Inquiry",
    `Hi Dr. Rocco,

I am interested in the Performance Package ($1,299/mo).

Here are my details:

- Name: 

- Phone: 

- Current GLP-1 medication status: 

- Best days/times to connect: 

My main goal:


Questions or notes:


Thank you. Please let me know the next steps to get started.`
  ),

  concierge: createMailto(
    "GLP GlowUp: Concierge Package Inquiry",
    `Hi Dr. Rocco,

I am interested in the Concierge Package ($1,899/mo).

Here are my details:

- Name: 

- Phone: 

- Current GLP-1 medication status: 

- Best days/times to connect: 

My main goal:


Questions or notes:


Thank you. Please let me know the next steps to get started.`
  ),
};
