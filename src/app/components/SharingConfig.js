export default function SharingConfig() {
  
  return (
    <section className="sharing-config">
      
      <h2>Default Sharing Configuration</h2>
      <div className="sharing-options">
        <label className="sharing-option">
          <img src="/icons/metadata-icon.png" alt="Metadata Icon" />
          <div className="option-content">
            <div>
              <strong>Metadata only</strong>
              <p className="option-description">Only subject lines will be visible to anyone in your workspace.</p>
            </div>
          </div>
          <input type="radio" name="sharing" />
        </label>
        <label className="sharing-option">
          <img src="/icons/subject-metadata-icon.png" alt="Subject and Metadata Icon" />
          <div className="option-content">
            <div>
              <strong>Subject line and metadata</strong>
              <p className="option-description">We’ll share the subject, participants, and timestamps with anyone in your workspace.</p>
            </div>
          </div>
          <input type="radio" name="sharing" />
        </label>
        <label className="sharing-option">
          <img src="/icons/full-access-icon.png" alt="Full Access Icon" />
          <div className="option-content">
            <div>
              <strong>Full access</strong>
              <p className="option-description">Everything is shared with your workspace members, including the body, subject line, and attachments.</p>
            </div>
          </div>
          <input type="radio" name="sharing" defaultChecked />
        </label>
      </div>

    </section>
  );
}

