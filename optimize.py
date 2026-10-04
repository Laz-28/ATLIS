import re

def update_css(filename, mobile_css):
    with open(filename, 'r') as f:
        content = f.read()

    # Find the existing @media query and replace it, or append if it doesn't exist
    if '@media' in content:
        content = re.sub(r'@media\s*\([^\{]+\)\s*\{[^@]+\}\s*$', mobile_css, content, flags=re.MULTILINE)
    else:
        content += '\n' + mobile_css
    
    # Just in case regex fails because of nesting or whatever
    if mobile_css not in content:
        # manual replace
        pass

    with open(filename, 'w') as f:
        f.write(content)

# We will just rewrite the @media blocks carefully by string manipulation
files = [
    ('src/components/Header.css', """
@media (max-width: 700px) {
  .site-header {
    flex-wrap: wrap;
    padding: 1rem 1.25rem;
  }
  .site-nav {
    gap: 1.25rem;
    order: 3;
    width: 100%;
    justify-content: center;
  }
  .brand-name {
    font-size: 1rem;
  }
  .cta-button {
    padding: 0.45rem 1rem;
    font-size: 0.85rem;
  }
}
"""),
    ('src/components/Footer.css', """
@media (max-width: 640px) {
  .site-footer {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem 1.5rem;
    gap: 2rem;
  }
  .footer-bottom {
    margin-top: 1rem;
  }
}
"""),
    ('src/pages/Home.css', """
@media (max-width: 700px) {
  .hero {
    padding: 3.5rem 1.25rem 2.5rem;
  }
  .services {
    grid-template-columns: 1fr;
  }
  .service-card {
    border-left: none;
    border-top: 1px solid var(--overlay-15);
    padding: 2rem 1.25rem;
  }
  .service-card:first-child {
    border-top: none;
  }
  .process {
    padding: 2.5rem 1.25rem;
  }
  .process-steps {
    flex-direction: column;
    gap: 1.5rem;
  }
  .tech-strip {
    padding: 1.25rem;
    gap: 1rem;
  }
  .cta-banner {
    padding: 3rem 1.25rem;
  }
}
"""),
    ('src/pages/AboutContact.css', """
@media (max-width: 640px) {
  .page-intro {
    padding: 3.5rem 1.25rem 2rem;
  }
  .founder,
  .approach,
  .contact {
    padding: 0 1.25rem 2.5rem;
  }
  .founder {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .form-row {
    flex-direction: column;
    gap: 0.75rem;
  }
}
"""),
    ('src/pages/ServicesPricing.css', """
@media (max-width: 640px) {
  .page-intro {
    padding: 3.5rem 1.25rem 2rem;
  }
  .services-detail {
    padding: 0 1.25rem;
  }
  .engagement,
  .faq {
    padding: 2.5rem 1.25rem;
  }
  .service-row {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem 0;
  }
  .engagement-cards {
    flex-direction: column;
  }
  .cta-banner {
    padding: 3rem 1.25rem;
  }
}
""")
]

for filename, mobile_css in files:
    with open(filename, 'r') as f:
        content = f.read()
    
    # Strip everything from the first @media to the end of the file
    if '@media' in content:
        content = content[:content.find('@media')]
    
    content = content.strip() + '\n' + mobile_css
    
    with open(filename, 'w') as f:
        f.write(content)

print("Done")
