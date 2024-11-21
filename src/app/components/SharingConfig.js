export default function SharingConfig() {
  return (
    <section className="sharing-config">
      <h2>Default Sharing Configuration</h2>
      <div className="sharing-options">
        <label className="sharing-option">
          <input type="radio" name="sharing" />
          <div className="option-content">
            <img src="/icons/metadata-icon.png" alt="Metadata Icon" />
            <div>
              <strong>Metadata only</strong>
              <p className="option-description">Only subject lines will be visible to anyone in your workspace.</p>
            </div>
          </div>
        </label>
        <label className="sharing-option">
          <input type="radio" name="sharing" />
          <div className="option-content">
            <img src="/icons/subject-metadata-icon.png" alt="Subject and Metadata Icon" />
            <div>
              <strong>Subject line and metadata</strong>
              <p className="option-description">We’ll share the subject, participants, and timestamps with anyone in your workspace.</p>
            </div>
          </div>
        </label>
        <label className="sharing-option">
          <input type="radio" name="sharing" defaultChecked />
          <div className="option-content">
            <img src="/icons/full-access-icon.png" alt="Full Access Icon" />
            <div>
              <strong>Full access</strong>
              <p className="option-description">Everything is shared with your workspace members, including the body, subject line, and attachments.</p>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
}

