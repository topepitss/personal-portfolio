import { useEffect, useState } from 'react';
import { Award, ExternalLink, Eye, X } from 'lucide-react';
import { certifications } from '../data/certifications.js';

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section className="section" id="certifications">
      <div className="section-heading">
        <p className="eyebrow">Certifications</p>
        <h2>Certifications from recent to older.</h2>
      </div>

      <div className="certification-list">
        {certifications.map((certification) => (
          <article className="certification-card" key={`${certification.title}-${certification.issuer}`}>
            <Award size={21} />
            <div className="certification-info">
              <strong>{certification.title}</strong>
              <span>
                {certification.issuer}, {certification.year}
              </span>
            </div>
            <button
              className="preview-button"
              type="button"
              disabled={!certification.preview}
              onClick={() => setSelectedCertificate(certification)}
            >
              <Eye size={16} />
              {certification.preview ? 'Preview' : 'Unavailable'}
            </button>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate preview`}
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="certificate-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="certificate-modal-header">
              <div>
                <p className="eyebrow">Certificate Preview</p>
                <h3>{selectedCertificate.title}</h3>
                <span>
                  {selectedCertificate.issuer}, {selectedCertificate.year}
                </span>
              </div>
              <div className="certificate-modal-actions">
                <a
                  className="certificate-open-link"
                  href={selectedCertificate.preview}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Open
                </a>
                <button
                  className="modal-close-button"
                  type="button"
                  aria-label="Close certificate preview"
                  onClick={() => setSelectedCertificate(null)}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="certificate-preview-frame">
              {selectedCertificate.fileType === 'pdf' ? (
                <object
                  data={selectedCertificate.preview}
                  type="application/pdf"
                  aria-label={`${selectedCertificate.title} PDF preview`}
                >
                  <a href={selectedCertificate.preview} target="_blank" rel="noreferrer">
                    Open certificate PDF
                  </a>
                </object>
              ) : (
                <img src={selectedCertificate.preview} alt={`${selectedCertificate.title} certificate`} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
