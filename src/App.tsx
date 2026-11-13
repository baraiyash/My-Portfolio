import { useEffect, useRef, useState } from 'react'
import { links, projects, skills, edu, interests, coursework, certs, type Cert } from './data'
import portrait from './assets/portrait.webp'
import { Analytics } from '@vercel/analytics/react'

const A = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) =>
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
const Roll = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) =>
  <a className="roll" data-t={label} href={href} onClick={onClick}><span>{label}</span></a>

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    els.forEach(e => io.observe(e)); return () => io.disconnect()
  }, [])
}

const name = (c: Cert) => (c.level ? `${c.t} (${c.level})` : c.t)

function Lightbox({ c, onClose }: { c: Cert; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={name(c) + ' certificate'} onClick={onClose}>
      <figure onClick={e => e.stopPropagation()}>
        <img src={c.img} alt={`${name(c)} certificate awarded to Yash Barai`} />
        <figcaption><span>{name(c)} · {c.o}</span>{c.href && <A href={c.href}>Verify on Credly ↗</A>}<button autoFocus onClick={onClose}>Close ✕</button></figcaption>
      </figure>
    </div>
  )
}

const nav = [['Projects', '#projects'], ['About', '#about'], ['Education', '#education'], ['Skills', '#skills'], ['Certifications', '#certifications']]
const mq = ['Java', 'Spring Boot', 'ASP.NET Core', 'System design']

export default function App() {
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [menu, setMenu] = useState(false)
  const [cert, setCert] = useState<Cert | null>(null)
  const [solid, setSolid] = useState(false)
  const hero = useRef<HTMLElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  useReveal()
  useEffect(() => { document.documentElement.dataset.motion = motion ? 'on' : 'off' }, [motion])
  useEffect(() => {
    const s = () => {
      setSolid(window.scrollY > 24)
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`
    }
    s(); window.addEventListener('scroll', s, { passive: true }); window.addEventListener('resize', s)
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('resize', s) }
  }, [])
  useEffect(() => {
    const el = hero.current; if (!el || !motion) return
    const m = (e: PointerEvent) => { el.style.setProperty('--px', String(e.clientX / window.innerWidth - 0.5)); el.style.setProperty('--py', String(e.clientY / window.innerHeight - 0.5)) }
    window.addEventListener('pointermove', m); return () => window.removeEventListener('pointermove', m)
  }, [motion])
  return (<>
    <div className="prog" ref={bar} aria-hidden="true" />
    <button className="mo" onClick={() => setMotion(m => !m)} aria-pressed={motion}>{motion ? <span className="pause" aria-hidden="true"><i /><i /></span> : <span className="play" aria-hidden="true" />}Motion {motion ? 'on' : 'off'}</button>
    <a className="skip" href="#main">Skip to content</a>
    <header className={'nav' + (solid || menu ? ' solid' : '')}><a className="mark" href="#top">Yash Barai</a>
      <nav className={menu ? 'open' : ''} aria-label="Primary">
        {nav.map(([l, h]) => <Roll key={l} href={h} label={l} onClick={() => setMenu(false)} />)}
        <a className="talk" href="#contact" onClick={() => setMenu(false)}>Let’s talk</a></nav>
      <button className="menu" aria-expanded={menu} onClick={() => setMenu(m => !m)}>{menu ? 'Close' : 'Menu'}</button></header>

    <main id="main">
      <section id="top" className="hero" ref={hero}>
        <div className="pw"><img className="ph" src={portrait} width={1024} height={1024} alt="Black-and-white halftone portrait of Yash Barai wearing glasses" fetchPriority="high" /></div>
        <div className="hin">
          <p className="kick">Java developer · Backend focused<br />Ahmedabad, Gujarat, India</p>
          <div className="mqw" aria-hidden="true"><div className="mqt">{[...mq, ...mq, ...mq].map((m, i) => <span key={i}>{m}</span>)}</div></div>
          <h1>Yash <em>Barai</em></h1>
          <p className="lead">I develop applications, explore system design, and engineer solutions.</p>
          <div className="cta"><a className="btn" href="#projects">Explore my work</a><a className="btn ghost" href="#contact">Start a conversation</a></div>
          
        </div>
        <a className="scrl" href="#about">Scroll to discover ↓</a>
      </section>

      <section id="about" className="sec"><p className="lab">01 / The person behind the code</p>
        <h2 className="rv">About <em>Me</em></h2>
        <div className="two">
          <div><p className="lab mu">Introduction</p><p className="rv big">Currently pursuing my MCA at Dharmsinh Desai University, Nadiad (2025–2027). Previously completed BCA from Saurashtra University, Jamnagar (2022–2025).</p></div>
          <div><p className="lab mu">Interests</p><p className="rv">I’m interested in the engineering behind software—not just writing code, but understanding the systems, decisions, and structures that make applications work. I’m focused on deepening my knowledge of backend development and software design.</p></div></div></section>

      <section id="projects" className="sec"><p className="lab">02 / Projects</p><h2 className="rv">Things I’ve <em>built.</em></h2>
        <div className="pg">{projects.map(p => (<article className="pc rv" key={p.title}>
          <h3>{p.title}</h3><p className="sub">{p.sub}</p><p>{p.blurb}</p>
          <ul className="chips">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
          <p className="lk"><A href={p.repo}>Source</A>{p.demo && <A href={p.demo}>Live Demo</A>}</p></article>))}</div>
        </section>

      <section id="education" className="sec"><p className="lab">03 / Education</p><h2 className="rv">Where I’ve <em>studied.</em></h2>
        <div className="eg">
          <div className="pc rv"><p className="lab mu">Education</p>{edu.map(e => (<div className="ec" key={e.s}><span className="dp">{e.y}</span><h3>{e.s}</h3><p className="sub">{e.deg}</p><p className="sub">{e.n}</p><div className="ef"><b>{e.c}</b>{e.rank && <span className="rk">★ {e.rank}</span>}</div></div>))}</div>
          <div className="pc rv"><p className="lab mu">Profile Highlights</p>
            <h4 className="hh">Technical interests</h4><ul className="tg">{interests.map(x => <li key={x}>{x}</li>)}</ul>
            <h4 className="hh">Relevant coursework</h4><ul className="tg">{coursework.map(x => <li key={x}>{x}</li>)}</ul></div></div></section>

      <section id="skills" className="sec"><p className="lab">04 / Skills</p><h2 className="rv">What I <em>work with.</em></h2>
        <div className="sg">{skills.map(s => <div className="pc rv" key={s.g}><h3>{s.g}</h3>
          <ul className="chips">{s.i.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div></section>

      <section id="certifications" className="sec"><p className="lab">05 / Certifications</p><h2 className="rv">12 <em>credentials.</em></h2>
                <ul className="certs">{certs.map(c => (<li key={c.img} className="rv"><button onClick={() => setCert(c)} aria-label={`View ${name(c)} certificate`}><b>{c.t}</b><span>{c.o}</span><time>{c.d} · view ↗</time></button></li>))}</ul></section>

      <section id="contact" className="sec cx"><p className="lab">06 / Let’s connect</p><p className="kick">Open to technical discussions &amp; opportunities</p>
        <h2 className="rv big2">Let’s talk <em>technology.</em></h2>
        <p className="rv">I enjoy conversations about how software works beneath the surface—from backend logic and database design to the decisions that shape an application.</p>
        <p className="rv">If you’re building something interesting, have a technical question, or want to discuss an opportunity, my inbox is open.</p>
        <p className="rv find"><a href="mailto:yashhbarai@gmail.com">yashhbarai@gmail.com</a></p>
        <a className="btn" href="mailto:yashhbarai@gmail.com">Get in touch ↗</a></section>
    </main>

    <footer><p className="flab">Yash Barai</p>
      <ul className="fl">{([['LinkedIn', links.linkedin], ['GitHub', links.github], ['LeetCode', links.leetcode], ['HackerRank', links.hackerrank], ['CodeChef', links.codechef], ['Codeforces', links.codeforces]] as const).map(([n, h]) => <li key={n}><A href={h}>{n}</A></li>)}<li><a href="mailto:yashhbarai@gmail.com">Email</a></li></ul>
      <div className="fb"><span>© 2026 Yash Barai</span><span className="fc">Understanding the system. Improving the solution.</span>
        <span className="fr"><span>Ahmedabad, India</span><a className="up" href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: motion ? 'smooth' : 'auto' }) }}>↑ Back to top</a></span></div></footer>
    {cert && <Lightbox c={cert} onClose={() => setCert(null)} />}
    <Analytics />
  </>)
}
