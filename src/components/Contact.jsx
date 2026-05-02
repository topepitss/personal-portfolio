import { GitBranch, Link2, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

const contactItems = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.contact.phone,
    href: `tel:${profile.contact.phoneHref}`,
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: profile.contact.githubLabel,
    href: profile.contact.githubUrl,
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    value: profile.contact.linkedinLabel,
    href: profile.contact.linkedinUrl,
    icon: Link2,
  },
  {
    label: 'Location',
    value: profile.contact.location,
    href: '#contact',
    icon: MapPin,
  },
];

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>{profile.contactHeading}</h2>
      </div>

      <div className="contact-grid">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a className="contact-card" href={item.href} key={item.label}>
              <Icon size={22} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
