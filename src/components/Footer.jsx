import { Link } from 'react-router-dom'
import { officeInfo, practiceAreas } from '../data/mockData'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paperLight">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-semibold">{officeInfo.firmName}</p>
            <p className="mt-3 max-w-[26ch] text-sm text-paperLight/70">
              Professional legal counsel and representation for individuals, businesses, and organizations.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-brass">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-paperLight/80">
              <li><Link to="/about" className="hover:text-paperLight">About Us</Link></li>
              <li><Link to="/attorneys" className="hover:text-paperLight">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-paperLight">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-brass">Practice Areas</p>
            <ul className="mt-3 space-y-2 text-sm text-paperLight/80">
              {practiceAreas.slice(0, 4).map((area) => (
                <li key={area.id}>
                  <Link to={`/practice-areas/${area.slug}`} className="hover:text-paperLight">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-brass">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-paperLight/80">
              <li>{officeInfo.phone}</li>
              <li>{officeInfo.email}</li>
              <li>{officeInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paperLight/15 pt-6 text-xs text-paperLight/60">
          <p className="max-w-3xl">
            The information provided on this website is for general informational purposes only and should
            not be considered legal advice. Viewing this website, submitting an inquiry, or communicating
            with the firm through this website does not by itself establish a lawyer-client relationship.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} {officeInfo.firmName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
