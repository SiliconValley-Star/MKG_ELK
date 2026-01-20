import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get your keys from: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  department?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS not configured. Using console log instead.');
    console.log('Contact Form Data:', data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return;
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_company: data.company || 'Belirtilmedi',
      from_email: data.email,
      department: data.department || 'Genel',
      message: data.message,
      to_name: 'MKG Elektromekanik',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.');
  }
};

export const subscribeNewsletter = async (data: NewsletterFormData): Promise<void> => {
  // For newsletter, you can use a different template or the same one
  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS not configured. Using console log instead.');
    console.log('Newsletter Subscription:', data);
    await new Promise(resolve => setTimeout(resolve, 800));
    return;
  }

  try {
    // You can create a separate template for newsletter subscriptions
    const templateParams = {
      subscriber_email: data.email,
      to_name: 'MKG Elektromekanik',
    };

    // Using the same template for now, but you should create a separate one
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Abonelik işlemi başarısız. Lütfen tekrar deneyin.');
  }
};