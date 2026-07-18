import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { EMAILJS_CONFIGURED, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config';
import { contactFormSchema } from '../../schemas/contactFormSchema';
import Loading from '../../components/Loading';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const CONTACT_METHODS = [
  {
    id: 'email',
    label: 'E-mail',
    value: 'daviir17@gmail.com',
    copyValue: 'daviir17@gmail.com',
    href: 'mailto:daviir17@gmail.com',
    description: 'Ideal para propostas, freelas e contatos profissionais.',
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
    description: 'Melhor para conversas rapidas e alinhamento inicial.',
    icon: whatsapp,
    iconAlt: 'Icone do WhatsApp',
    iconClassName: 'w-8',
  },
];

function getFieldClasses(hasError, { textarea = false } = {}) {
  return [
    'w-full rounded-[20px] border bg-app-alt px-4 text-[0.98rem] text-copy transition-all duration-200 placeholder:text-copy-soft focus:outline-none focus-visible:border-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    textarea ? 'min-h-[200px] resize-none py-4 leading-relaxed' : 'h-14',
    hasError ? 'border-primary bg-primary-surface' : 'border-outline/70',
  ].join(' ');
}

export default function Contact() {
  const { ref } = useTrackActiveSection('contact');
  const [copiedContact, setCopiedContact] = useState(null);
  const copyTimeoutRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (type, msg, autoClose = null) => {
    type(msg, {
      className: 'toast-message',
      autoClose,
    });
  };

  const handleSendEmail = async (formData) => {
    if (!EMAILJS_CONFIGURED) {
      showToast(toast.error, 'Formulario temporariamente indisponivel', 2500);
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
      showToast(toast.success, 'Copiado para area de transferencia!', 2000);
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
        `Erro ao copiar o ${contactId === 'email' ? 'e-mail' : 'numero de telefone'}`,
        2000,
      );
    }
  };

  return (
    <section ref={ref} id='id_contact' className='page-section flex justify-center bg-app-alt'>
      <div className='content-shell flex flex-col items-center gap-8 py-4 min-[790px]:py-6'>
        <div className='flex max-w-[760px] flex-col items-center gap-4 text-center'>
          <h1 id='id_title_contact'>
            Contato
          </h1>
          <p className='text-balance text-[0.98rem] leading-relaxed text-copy-muted min-[790px]:text-[1.05rem]'>
            Se voce tem uma oportunidade, ideia de projeto ou quer trocar sobre tecnologia, esse e o melhor lugar para me chamar.
          </p>
        </div>

        <div className='grid w-full max-w-[1020px] items-start gap-6 min-[980px]:grid-cols-[minmax(0,1fr)_360px]'>
          <div className='rounded-[28px] border border-outline/70 bg-panel px-6 py-6 shadow-panel min-[720px]:px-8 min-[720px]:py-8'>
            <div className='mb-6 border-b border-outline/70 pb-5'>
              <h2 className='text-[1.45rem] font-semibold tracking-[-0.03em] text-copy-strong min-[720px]:text-[1.65rem]'>
                Vamos conversar sobre a sua ideia
              </h2>
              <p className='mt-3 max-w-[42rem] text-[0.98rem] leading-relaxed text-copy-muted'>
                Me conte o contexto do projeto, a oportunidade ou o tipo de colaboracao que voce tem em mente.
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
                <label className='text-[0.88rem] font-semibold text-copy-strong' htmlFor='contact-name'>
                  Nome completo
                </label>
                <input
                  id='contact-name'
                  type='text'
                  autoComplete='name'
                  placeholder='Digite seu nome e sobrenome'
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={getFieldClasses(Boolean(errors.name))}
                  {...register('name')}
                />
                {errors.name && (
                  <span id='contact-name-error' className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary' role='alert'>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-[0.88rem] font-semibold text-copy-strong' htmlFor='contact-email'>
                  Seu e-mail
                </label>
                <input
                  id='contact-email'
                  type='email'
                  autoComplete='email'
                  placeholder='Digite seu e-mail'
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={getFieldClasses(Boolean(errors.email))}
                  {...register('email')}
                />
                {errors.email && (
                  <span id='contact-email-error' className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary' role='alert'>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-2 min-[720px]:col-span-2'>
                <label className='text-[0.88rem] font-semibold text-copy-strong' htmlFor='contact-message'>
                  Mensagem
                </label>
                <textarea
                  id='contact-message'
                  placeholder='Me conte o contexto do projeto, o que voce precisa e como posso ajudar.'
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={getFieldClasses(Boolean(errors.message), { textarea: true })}
                  {...register('message')}
                />
                {errors.message && (
                  <span id='contact-message-error' className='pl-1 text-[0.86rem] font-medium leading-relaxed text-primary' role='alert'>
                    {errors.message.message}
                  </span>
                )}
              </div>

              {!EMAILJS_CONFIGURED && (
                <div className='rounded-[20px] border border-primary-soft bg-primary-surface px-4 py-3 text-[0.88rem] leading-relaxed text-primary min-[720px]:col-span-2'>
                  O envio pelo formulario esta temporariamente indisponivel. Use um dos contatos diretos ao lado.
                </div>
              )}

              <div className='mt-2 flex flex-col gap-4 min-[720px]:col-span-2 min-[860px]:flex-row min-[860px]:items-center min-[860px]:justify-between'>
                <p className='max-w-[30rem] text-[0.92rem] leading-relaxed text-copy-muted'>
                  Prefere contato direto? Voce tambem pode me chamar por e-mail ou WhatsApp na coluna ao lado.
                </p>

                <button
                  className={`inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border px-6 text-[0.95rem] font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft disabled:cursor-not-allowed disabled:opacity-70 min-[720px]:w-auto min-[720px]:min-w-[190px] ${
                    EMAILJS_CONFIGURED
                      ? 'border-transparent bg-primary text-copy-inverse hover:bg-primary-strong'
                      : 'border-outline bg-app-alt text-copy-soft'
                  }`}
                  type='submit'
                  disabled={isSubmitting || !EMAILJS_CONFIGURED}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loading />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    EMAILJS_CONFIGURED ? 'Enviar mensagem' : 'Envio indisponivel'
                  )}
                </button>
              </div>
            </form>
          </div>

          <aside className='overflow-hidden rounded-[28px] border border-outline/70 bg-panel shadow-panel'>
            <div className='border-b border-outline/70 px-6 py-6 min-[720px]:px-7'>
              <span className='text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-copy-soft'>
                Contato direto
              </span>
              <h2 className='mt-2 text-[1.28rem] font-semibold tracking-[-0.03em] text-copy-strong'>
                Fale comigo pelos canais abaixo
              </h2>
              <p className='mt-3 text-[0.94rem] leading-relaxed text-copy-muted'>
                WhatsApp para alinhamentos mais rapidos, e-mail para conversas e propostas mais detalhadas.
              </p>
            </div>

            <div className='divide-y divide-outline/70'>
              {CONTACT_METHODS.map((contact) => {
                const isCopied = copiedContact === contact.id;
                const isExternalLink = contact.href.startsWith('http');

                return (
                  <article key={contact.id} className='px-6 py-6 min-[720px]:px-7'>
                    <div className='flex items-start gap-4'>
                      <div className='flex size-14 shrink-0 items-center justify-center rounded-[18px] border border-outline/60 bg-app-alt'>
                        <img src={contact.icon} alt={contact.iconAlt} className={contact.iconClassName} />
                      </div>

                      <div className='min-w-0 flex-1'>
                        <span className='text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-copy-soft'>
                          {contact.label}
                        </span>
                        <a
                          href={contact.href}
                          className='mt-1 block break-words text-[1.06rem] font-semibold leading-snug text-copy-strong transition-colors hover:text-primary'
                          {...(isExternalLink ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {contact.value}
                        </a>
                        <p className='mt-2 text-[0.92rem] leading-relaxed text-copy-muted'>
                          {contact.description}
                        </p>

                        <div className='mt-4 flex flex-wrap gap-2.5'>
                          <a
                            href={contact.href}
                            className='inline-flex h-10 items-center justify-center gap-2 rounded-full border border-outline px-4 text-[0.9rem] font-semibold text-copy transition-all duration-200 hover:border-outline-strong hover:bg-app-alt focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
                            {...(isExternalLink ? { target: '_blank', rel: 'noreferrer' } : {})}
                          >
                            <span className="material-symbols-outlined text-[1.02rem] text-primary">
                              north_east
                            </span>
                            <span>Abrir</span>
                          </a>

                          <button
                            type='button'
                            aria-label={`Copiar ${contact.label}`}
                            onClick={() => handleContactCopy(contact.id)}
                            className='inline-flex h-10 items-center justify-center gap-2 rounded-full border border-outline bg-panel px-4 text-[0.9rem] font-semibold text-copy transition-all duration-200 hover:border-outline-strong hover:bg-app-alt focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
                          >
                            <span className="material-symbols-outlined text-[1.02rem] text-primary">
                              {isCopied ? 'check' : 'content_copy'}
                            </span>
                            <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
