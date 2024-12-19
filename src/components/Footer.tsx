export default function Footer() {
  return (
    <footer className="p-16 bg-[rgb(18,19,24)] font-sans">
      <div className="text-white flex gap-16 justify-center">
        <div className="w-[30%]">
          <h4 className="text-xl font-bold mb-4">Crypto Planet</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            labore saepe exercitationem accusantium eos minima veritatis quis.
          </p>
        </div>
        <div className="flex justify-center gap-10 w-[70%]">
          <div>
            <h4 className="text-xl font-semibold">Exchange</h4>
            <ul className="mt-5 leading-loose">
              <li>Exchange Home</li>
              <li>Margin Trading</li>
              <li>Derivatives Trading</li>
              <li>Supercharger</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Support</h4>
            <ul className="mt-5 leading-loose">
              <li>Request form</li>
              <li>Contact support</li>
              <li>FAQ</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Resources</h4>
            <ul className="mt-5 leading-loose">
              <li>Downloads</li>
              <li>Desktop Application</li>
              <li>Buy Crypto</li>
              <li>Referral</li>
              <li>Listing Trading</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Learn</h4>
            <ul className="mt-5 leading-loose">
              <li>What's Trending</li>
              <li>Product News</li>
              <li>Events</li>
              <li>University</li>
              <li>Research</li>
              <li>Market Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Company</h4>
            <ul className="mt-5 leading-loose">
              <li>About us</li>
              <li>Carrers</li>
              <li>News</li>
              <li>Security</li>
              <li>Community</li>
              <li>Announcements</li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
