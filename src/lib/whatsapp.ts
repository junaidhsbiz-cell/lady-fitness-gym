import { business } from '../data/business';

export type WhatsAppActionType = 'trial' | 'schedule' | 'plan' | 'trainer' | 'consultation' | 'general';

interface WhatsAppParams {
  action: WhatsAppActionType;
  name?: string;
  phone?: string;
  detail?: string;
  preferredShift?: string;
  preferredDate?: string;
  bmiScore?: string;
}

export function buildWhatsAppUrl(params: WhatsAppParams): string {
  const number = business.whatsappNumber;
  let message = "";

  switch (params.action) {
    case 'trial':
      message = `Hello Lady Fitness GYM Narayanganj!\nI would like to book a *Free 1-Day Trial Pass*.\nName: ${params.name || 'Not provided'}\nPhone: ${params.phone || 'Not provided'}\nPreferred Date: ${params.preferredDate || 'Earliest available'}\nPreferred Shift: ${params.preferredShift || 'Morning/Evening'}`;
      break;

    case 'schedule':
      message = `Hello Lady Fitness GYM!\nI want to reserve a slot for the class: *${params.detail || 'Weekly Class'}*.\nName: ${params.name || 'Interested Member'}\nPhone: ${params.phone || ''}`;
      break;

    case 'plan':
      message = `Hello Lady Fitness GYM!\nI am interested in enrolling in the *${params.detail || 'Membership'}* plan.\nName: ${params.name || ''}\nPhone: ${params.phone || ''}`;
      break;

    case 'trainer':
      message = `Hello Lady Fitness GYM!\nI would like to schedule a private 1-on-1 session with Coach *${params.detail || 'Female Trainer'}*.\nName: ${params.name || ''}\nPhone: ${params.phone || ''}`;
      break;

    case 'consultation':
      message = `Hello Lady Fitness GYM!\nI just calculated my BMI (${params.bmiScore || 'N/A'}) on your website and would like a personalized diet & fitness consultation.\nName: ${params.name || ''}\nPhone: ${params.phone || ''}`;
      break;

    case 'general':
    default:
      message = `Hello Lady Fitness GYM Narayanganj! I would like to inquire about your women's fitness packages and admission.`;
      break;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppDirect(params: WhatsAppParams) {
  const url = buildWhatsAppUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}
