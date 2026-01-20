import { useState, ChangeEvent, FormEvent } from 'react';

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => boolean;
    message?: string;
  };
}

interface FormErrors {
  [key: string]: string;
}

export function useForm<T extends { [key: string]: string }>(
  initialValues: T,
  validationRules?: ValidationRules,
  onSubmit?: (values: T) => void | Promise<void>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (fieldName: string, value: string): string => {
    if (!validationRules || !validationRules[fieldName]) return '';

    const rules = validationRules[fieldName];

    if (rules.required && !value.trim()) {
      return rules.message || 'Bu alan zorunludur';
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message || 'Geçersiz format';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return rules.message || `En az ${rules.minLength} karakter olmalıdır`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message || `En fazla ${rules.maxLength} karakter olmalıdır`;
    }

    if (rules.custom && !rules.custom(value)) {
      return rules.message || 'Geçersiz değer';
    }

    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Clear success message when form is modified
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateAll = (): boolean => {
    if (!validationRules) return true;

    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const error = validate(fieldName, values[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      setSubmitSuccess(true);
      // Reset form after successful submission
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
    setErrors,
  };
}