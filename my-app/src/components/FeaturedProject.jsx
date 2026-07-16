const VIDEO = '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character (1).mp4'

const technologies = ['React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'REST API', 'AI Integration', 'Socket.IO', 'GitHub']

const details = [
  ['Role', 'Full-Stack Web Developer'],
  ['Location', 'Lahore, Pakistan'],
  ['Availability', 'Open for Opportunities'],
  ['Email', 'huzaifaraoooo@gmail.com'],
]

export default function FeaturedProject() {
  return <section className="featured" aria-labelledby="featured-title">
    <div className="featured-media" data-media>
      <video autoPlay loop muted playsInline preload="metadata" poster="/images/project-poster.png"><source src={VIDEO} type="video/mp4" /></video>
      <span className="frame frame-a" /><span className="frame frame-b" />
      <p className="vertical">Portfolio introduction / Full-stack / 2026</p>
    </div>
    <div className="featured-copy">
      <div className="section-label">03 / Introduction</div>
      <div className="featured-intro" data-reveal>
        <p className="eyebrow">Full-Stack Web Developer</p>
        <h2 id="featured-title">Rao<br /><i>Huzaifa.</i></h2>
        <p className="project-description">I build modern, scalable and high-performance web applications with a strong focus on clean UI, reliable backend architecture and exceptional user experience. My goal is to create digital products that are fast, secure and built for real-world impact.</p>
        <div className="tag-list" aria-label="Technologies">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
      </div>
      <dl className="featured-details" data-reveal>
        {details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </div>
  </section>
}
