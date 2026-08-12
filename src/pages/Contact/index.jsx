import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import Loading from '../../components/Loading';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import { EMAILJS_CONFIGURED, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../config';
import { useHeader } from '../../context/HeaderContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';
import { contactFormSchema } from '../../schemas/contactFormSchema';

const PRIMARY_EMAIL = 'daviir17@gmail.com';

const CONTACT_METHODS = [
  {
    id: 'email',
    label: 'E-mail',
    value: PRIMARY_EMAIL,
    copyValue: PRIMARY_EMAIL,
    href: `mailto:${PRIMARY_EMAIL}`,
    icon: gmail,
    iconAlt: 'Icone do Gmail',
    iconClassName: 'w-7',
  },
  {
    id: 'whats',
    label: 'WhatsApp',
    value: '(53) 99932-2366',
    copyValue: '53999322366',
    href: 'https://wa.me/5553999322366',
    icon: whatsapp,
    iconAlt: 'Icone do WhatsApp',
    iconClassName: 'w-8',
  },
];

function getFieldClasses(hasError, { textarea = false } = {}) {
  return [
    'w-full rounded-[20px] border bg-app-alt px-4 text-[0.95rem] text-copy transition-all duration-200 placeholder:text-copy-soft focus:outline-none focus-visible:border-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:text-[0.98rem]',
    textarea ? 'min-h-[180px] resize-none py-3.5 leading-relaxed min-[500px]:min-h-[200px] min-[500px]:py-4' : 'h-[3.25rem] min-[500px]:h-14',
    hasError ? 'border-primary bg-primary-surface' : 'border-outline/70',
  ].join(' ');
}

export default function Contact() {
  const { ref } = useTrackActiveSection('contact');
  const { activeSection } = useHeader();
  const [copiedContact, setCopiedContact] = useState(null);
  const copyTimeoutRef = useRef(null);
  const isFormUnavailable = !EMAILJS_CONFIGURED;

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeSection !== 'contact') {
      clearErrors();
    }
  }, [activeSection, clearErrors]);

  const shouldShowFieldError = (fieldName) => !isFormUnavailable && Boolean(errors[fieldName]);

  const showToast = (type, msg, autoClose = null) => {
    type(msg, { autoClose });
  };

  const handleFallbackEmail = (formData) => {
    const subject = encodeURIComponent(`Contato pelo portfolio - ${formData.name}`);
    const body = encodeURIComponent([
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      '',
      'Mensagem:',
      formData.message,
    ].join('\n'));

    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${subject}&body=${body}`;
    showToast(toast.info, 'Abrindo seu aplicativo de e-mail...', 2200);
  };

  const handleSendEmail = async (formData) => {
    if (!EMAILJS_CONFIGURED) {
      handleFallbackEmail(formData);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      reset();
      clearErrors();
      showToast(toast.success, 'Email enviado!', 2000);
    } catch {
      showToast(toast.error, 'Falha ao enviar e-mail', 2000);
    }
  };

  const handleInvalidSubmit = () => {
    showToast(toast.warning, 'Revise os campos destacados', 2200);
  };

  const handleContactCopy = async (contactId) => {
    const contact = CONTACT_METHODS.find(({ id }) => id === contactId);

    try {
      if (!contact || copiedContact === contactId) {
        return;
      }

      await navigator.clipboard.writeText(contact.copyValue);
      showToast(toast.success, 'Copiado para a área de transferência!', 2000);
      setCopiedContact(contactId);

      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedContact(null);
      }, 2000);
    } catch {
      showToast(
        toast.error,
        `Erro ao copiar o ${contactId === 'email' ? 'e-mail' : 'número de telefone'}`,
        2000,
      );
    }
  };

  return (
    <section
      ref={ref}
      id='id_contact'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app-alt'
    >
      <SectionBackdrop
        glowClassName='top-12 h-[24rem] bg-[radial-gradient(circle_at_center,rgba(2,112,173,0.09),transparent_68%),radial-gradient(circle_at_40%_28%,rgba(251,84,78,0.08),transparent_26%)]'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <SectionIntro
          eyebrow='Vamos conversar'
          title='Contato para oportunidades e projetos'
          titleId='id_title_contact'
          description='Se fizer sentido para o seu momento, me chama. Posso conversar sobre produtos web, interfaces, integrações, residência tecnológica e colaboração em times.'
          titleClassName='max-w-[12ch] min-[790px]:max-w-[14ch]'
        />

        <div className='grid w-full max-w-[1120px] items-start gap-5 min-[1060px]:grid-cols-[minmax(0,1fr)_340px] min-[1200px]:gap-6'>
          <ScrollReveal
            className='rounded-[28px] border border-outline/70 bg-panel/78 px-5 py-5 shadow-[0_22px_46px_-32px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:rounded-[30px] min-[500px]:px-6 min-[500px]:py-6 min-[720px]:px-8 min-[720px]:py-8'
            amount={0.2}
          >
            <div className='mb-6 border-b border-outline/70 pb-5'>
              <span className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-panel/82 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-copy-muted shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm'>
                <span className='size-2 rounded-full bg-[linear-gradient(135deg,var(--color-info),var(--color-primary))]' />
                Mensagem direta
              </span>
              <h2 className='mt-4 max-w-[13.5ch] text-[1.16rem] font-semibold tracking-[-0.03em] text-copy-strong min-[480px]:max-w-none min-[480px]:text-[1.28rem] min-[720px]:text-[1.65rem]'>
                Vamos conversar
              </h2>
              <p className='mt-3 max-w-[24rem] text-[0.95rem] leading-[1.6] text-copy-muted min-[500px]:max-w-[42rem] min-[500px]:text-[0.98rem] min-[500px]:leading-relaxed'>
                Me conte em poucas linhas o que você tem em mente.
              </p>
            </div>

            <form
              id='form-contact'
              method='post'
              noValidate
              onSubmit={handleSubmit(handleSendEmail, handleInvalidSubmit)}
              className='grid gap-4 min-[720px]:grid-cols-2 min-[720px]:gap-5'
            >
              <div className='flex flex-col gap-2'>
                <label className='text-[0.84rem] font-semibold text-copy-strong min-[500px]:text-[0.88rem]' htmlFor='contact-name'>
                  Nome completo
                </label>
                <input
                  id='contact-name'
                  type='text'
                  autoComplete='name'
                  placeholder='Digite seu nome e sobrenome'
                  aria-invalid={shouldShowFieldError('name') ? 'true' : 'false'}
                  aria-describedby={shouldShowFieldError('name') ? 'contact-name-error' : undefined}
                  className={getFieldClasses(shouldShowFieldError('name'))}
                  {...register('name')}
                />
                {shouldShowFieldError('name') && (
                  <span
                    id='contact-name-error'
                    className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary'
                    role='alert'
                  >
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-[0.84rem] font-semibold text-copy-strong min-[500px]:text-[0.88rem]' htmlFor='contact-email'>
                  Seu e-mail
                </label>
                <input
                  id='contact-email'
                  type='email'
                  autoComplete='email'
                  placeholder='Digite seu e-mail'
                  aria-invalid={shouldShowFieldError('email') ? 'true' : 'false'}
                  aria-describedby={shouldShowFieldError('email') ? 'contact-email-error' : undefined}
                  className={getFieldClasses(shouldShowFieldError('email'))}
                  {...register('email')}
                />
                {shouldShowFieldError('email') && (
                  <span
                    id='contact-email-error'
                    className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary'
                    role='alert'
                  >
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-2 min-[720px]:col-span-2'>
                <label className='text-[0.84rem] font-semibold text-copy-strong min-[500px]:text-[0.88rem]' htmlFor='contact-message'>
                  Mensagem
                </label>
                <textarea
                  id='contact-message'
                  placeholder='Me conte o contexto do projeto, o que voce precisa e como posso ajudar.'
                  aria-invalid={shouldShowFieldError('message') ? 'true' : 'false'}
                  aria-describedby={shouldShowFieldError('message') ? 'contact-message-error' : undefined}
                  className={getFieldClasses(shouldShowFieldError('message'), { textarea: true })}
                  {...register('message')}
                />
                {shouldShowFieldError('message') && (
                  <span
                    id='contact-message-error'
                    className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary'
                    role='alert'
                  >
                    {errors.message.message}
                  </span>
                )}
              </div>

              {isFormUnavailable && (
                <div className='rounded-[20px] border border-[rgba(185,184,92,0.22)] bg-[rgba(185,184,92,0.08)] px-4 py-3 text-[0.88rem] leading-relaxed text-copy min-[720px]:col-span-2 dark:border-[rgba(200,190,99,0.18)] dark:bg-[rgba(200,190,99,0.08)] dark:text-copy-muted'>
                  Sem integracao automatica no momento. Ao enviar, seu aplicativo de e-mail sera aberto com a mensagem preenchida.
                </div>
              )}

              <div className='mt-2 flex min-[720px]:col-span-2 min-[940px]:justify-end'>
                <button
                  className={`inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border px-6 text-[0.95rem] font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft disabled:cursor-not-allowed disabled:opacity-70 min-[720px]:w-auto min-[720px]:min-w-[190px] ${
                    !isFormUnavailable
                      ? 'border-transparent bg-primary text-copy-inverse hover:bg-primary-strong'
                      : 'border-primary-soft bg-primary-surface text-primary hover:bg-primary-surface-strong'
                  }`}
                  type='submit'
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loading />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    EMAILJS_CONFIGURED ? 'Enviar mensagem' : 'Enviar por e-mail'
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal
            as='aside'
            className='overflow-hidden rounded-[28px] border border-outline/70 bg-panel/78 shadow-[0_22px_46px_-32px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:rounded-[30px]'
            direction='left'
            delay={0.08}
            amount={0.2}
          >
            <div className='border-b border-outline/70 px-5 py-5 min-[500px]:px-6 min-[500px]:py-6 min-[720px]:px-7'>
              <span className='text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-copy-soft'>
                Contato direto
              </span>
              <h2 className='mt-2 text-[1.16rem] font-semibold tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.28rem]'>
                Canais diretos
              </h2>
              <p className='mt-3 text-[0.9rem] leading-[1.58] text-copy-muted min-[500px]:text-[0.94rem] min-[500px]:leading-relaxed'>
                WhatsApp para conversa rapida. E-mail para propostas mais detalhadas.
              </p>
            </div>

            <div className='divide-y divide-outline/70'>
              {CONTACT_METHODS.map((contact) => {
                const isCopied = copiedContact === contact.id;
                const isExternalLink = contact.href.startsWith('http');

                return (
                  <article key={contact.id} className='px-5 py-5 min-[500px]:px-6 min-[500px]:py-6 min-[720px]:px-7'>
                    <div className='flex items-start gap-4'>
                      <div className='flex size-12 shrink-0 items-center justify-center rounded-[16px] border border-outline/60 bg-app-alt min-[500px]:size-14 min-[500px]:rounded-[18px]'>
                        <img src={contact.icon} alt={contact.iconAlt} className={contact.iconClassName} />
                      </div>

                      <div className='min-w-0 flex-1'>
                        <span className='text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-copy-soft'>
                          {contact.label}
                        </span>
                        <div className='mt-1 flex items-center gap-2.5'>
                          <a
                            href={contact.href}
                            className='block break-words text-[1rem] font-semibold leading-snug text-copy-strong transition-colors hover:text-primary min-[500px]:text-[1.06rem]'
                            {...(isExternalLink ? { target: '_blank', rel: 'noreferrer' } : {})}
                          >
                            {contact.value}
                          </a>

                          <button
                            type='button'
                            aria-label={`Copiar ${contact.label}`}
                            onClick={() => handleContactCopy(contact.id)}
                            className='inline-flex size-8 shrink-0 items-center justify-center rounded-full text-copy-soft transition-all duration-200 hover:bg-app-alt hover:text-copy focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
                          >
                            <span className='material-symbols-outlined text-[1.1rem] leading-none'>
                              {isCopied ? 'check' : 'content_copy'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
