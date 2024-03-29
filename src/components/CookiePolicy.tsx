type CookieProps = {
  company: string,
  website: string,
}

const CookiePolicy = ({ company, website }: CookieProps) => <>
  <h2>Our Cookie Policy</h2>
  <p>
    {company} uses cookies on {website} and subdomains to {website}. By using the Service, you consent to the use of cookies.
    This cookies policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service,
    your choices regarding cookies and further information about cookies, effective January 20, 2020.
  </p>
  <br />
  <h5>What are cookies?</h5>
  <p>
    Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your
    web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful
    to you. Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
  </p>
  <br />
  <h5>How {company} uses cookies</h5>
  <p>
    When you use and access the Service, we may place a number of cookies files in your web browser.
    We use cookies for the following purposes:
  </p>
  <ul>
    <li>to store your preferences</li>
    <li>to authenticate users</li>
    <li>to prevent fraudulent use of user accounts</li>
  </ul>
  <br />
  <h5>Third-party cookies</h5>
  <p>
    The service uses no third party cookies.
  </p>
  <br />
  <h5>What are your choices regarding cookies?</h5>
  <p>
    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of
    your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use
    all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
  </p>
</>

export default CookiePolicy;
