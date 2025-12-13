import React from "react";

const priorities = [
  {
    title: "Local Safety",
    description:
      "Backing strong policing, well-lit streets, and safer neighbourhoods that protect families and businesses.",
  },
  {
    title: "Health & Care",
    description:
      "Championing quicker GP access, better hospital capacity, and support for carers across Bognor Regis & Littlehampton.",
  },
  {
    title: "Cost of Living",
    description:
      "Standing up for fair council taxes, value for money services, and sensible spending that keeps households secure.",
  },
  {
    title: "Cleaner Communities",
    description:
      "Tackling litter, preserving our seafront and green spaces, and investing in pride for every ward.",
  },
  {
    title: "Opportunity for Youth",
    description:
      "Creating apprenticeships, skills pathways, and positive spaces so young people can thrive locally.",
  },
];

const events = [
  {
    title: "Fundraising Evening",
    date: "Spring 2024",
    image: "assets/fundrasing-events.webp",
    description: "Enjoy an evening with supporters to fund local campaigning and community projects.",
  },
  {
    title: "Branch Committee Meeting",
    date: "Monthly",
    image: "assets/reform-committee-meeting-yapton.webp",
    description: "Join our committee discussion on priorities, events, and the next steps for our towns.",
  },
  {
    title: "Community Stall",
    date: "High Street Outreach",
    image: "assets/stall-5119.webp",
    description: "Chat with the team, pick up materials, and share what matters most to you.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00AEEF] text-white font-semibold">RU</div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Reform UK</p>
              <p className="text-lg font-semibold text-gray-900">Bognor Regis &amp; Littlehampton</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a className="hover:text-[#00AEEF]" href="#priorities">Our Priorities</a>
          </nav>
          <a
            className="hidden rounded-full bg-[#00AEEF] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-sky-500 md:inline-block"
            href="#volunteer"
          >
            Join Us
          </a>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-[url('assets/bognor-regis-and-littlehampton-ward.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-28 lg:flex-row lg:items-center lg:py-32">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-100">Local Action, Real Change</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Reform UK Bognor Regis &amp; Littlehampton
            </h1>
            <p className="mt-4 text-lg text-sky-50">
              Working with residents, businesses, and community groups to deliver a safer, fairer, and more confident future for our towns.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-[#00AEEF] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sky-500"
                href="#volunteer"
              >
                Get Involved
              </a>
              <span className="text-sm text-sky-100">Your voice keeps our movement strong.</span>
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Branch Snapshot</p>
            <div className="space-y-3 text-gray-800">
              <p className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00AEEF]" />
                <span>Active volunteers across Aldwick, Marine, Brookfield, River, and Wick wards.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00AEEF]" />
                <span>Listening surveys, street stalls, and campaigns shaped by resident feedback.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00AEEF]" />
                <span>Focused on practical solutions that keep our coastal communities thriving.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">About the Branch</h2>
            <p className="text-lg text-gray-700">
              The Reform UK Bognor Regis &amp; Littlehampton branch brings together neighbours who want honest leadership and practical action. We are rooted in the community, focused on local priorities, and determined to deliver value for residents while protecting the character of our towns.
            </p>
            <p className="text-lg text-gray-700">
              Whether you care about cleaner streets, cost of living, or opportunities for young people, we want to hear from you and work side by side to make a difference.
            </p>
          </div>
        </div>
      </section>

      <section id="priorities" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-[#00AEEF]">Our Priorities</p>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">What we are focusing on locally</h2>
            </div>
            <p className="max-w-xl text-gray-700">
              Real change starts on our streets. These priorities are shaped by the conversations we have every week with residents, community groups, and local businesses.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  <span className="text-lg font-semibold">•</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#00AEEF]">Events</p>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Meet the team and get involved</h2>
            </div>
            <a className="text-sm font-semibold text-[#00AEEF] hover:text-sky-500" href="#volunteer">
              View all events
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={event.image}
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#00AEEF]">{event.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#00AEEF] to-sky-500 px-6 py-12 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-50">Volunteer with us</p>
              <h2 className="text-2xl font-bold sm:text-3xl">Join the Reform UK team in Bognor Regis &amp; Littlehampton</h2>
              <p className="text-lg text-sky-50">
                Whether you have an hour a week or can help at key events, your support keeps our branch moving. Leafletting, canvassing, digital outreach, and community stalls all need hands-on help.
              </p>
              <p className="text-lg text-sky-50">
                Tell us what matters most to you and how you would like to be involved.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="space-y-4 text-sm text-sky-50">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">1</span>
                  <div>
                    <p className="font-semibold">Sign up</p>
                    <p>Share your contact details so we can welcome you.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">2</span>
                  <div>
                    <p className="font-semibold">Choose your role</p>
                    <p>Pick from street teams, events, data, or local liaison.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">3</span>
                  <div>
                    <p className="font-semibold">Make an impact</p>
                    <p>Help us bring Reform UK solutions to every ward.</p>
                  </div>
                </div>
              </div>
              <a
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#00AEEF] transition hover:bg-slate-100"
                href="mailto:reformuk.bognorregisandlittlehampton@proton.me"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Reform UK</p>
            <p className="text-xl font-semibold text-gray-900">Bognor Regis &amp; Littlehampton Branch</p>
            <p className="max-w-md text-sm text-gray-700">
              Together we can build a confident, secure, and prosperous future for our coastal communities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Contact</p>
              <p>Bognor Regis &amp; Littlehampton, West Sussex</p>
              <a className="text-[#00AEEF] hover:text-sky-500" href="mailto:reformuk.bognorregisandlittlehampton@proton.me">
                reformuk.bognorregisandlittlehampton@proton.me
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Connect</p>
              <a className="block text-[#00AEEF] hover:text-sky-500" href="https://reformparty.uk/" target="_blank" rel="noreferrer">
                Reform UK National
              </a>
              <a className="block text-[#00AEEF] hover:text-sky-500" href="#events">
                Upcoming Events
              </a>
              <a className="block text-[#00AEEF] hover:text-sky-500" href="#volunteer">
                Volunteer
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
          Paid for by Reform UK Bognor Regis &amp; Littlehampton. Promoted by the local branch team.
        </div>
      </footer>
    </div>
  );
};

export default Home;
