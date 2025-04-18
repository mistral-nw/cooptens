export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Cooptens</h6>
        <a className="link link-hover " href="/expertise">
          NOTRE EXPERTISE
        </a>
        <a className="link link-hover " href="/candidants">
          CANDIDANTS
        </a>
        <a className="link link-hover " href="/opportunities">
          OPPORTUNITÉS
        </a>
        <a className="link link-hover " href="/contact">
          CONTACT
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Créateur d’opportunités</h6>
        <a className="link link-hover " href="/candidants">
          Envoyez-nous votre CV
        </a>{" "}
        <a className="link link-hover " href="/candidants">
          Recommandez un talent
        </a>{" "}
        <a className="link link-hover " href="/">
          Retour à la page d’accueil
        </a>{" "}
        <a className="link link-hover " href="/">
          Mentions légales et politique de confidentialité
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
