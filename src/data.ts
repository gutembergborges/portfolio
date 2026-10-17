// All site content lives here, so updating the portfolio never means touching layout code.
// Items in [brackets] are placeholders: replace them with real, verifiable facts.

export interface Project {
  name: string
  tagline: string
  description: string
  stack: string[]
  repo?: string // omit for private repos
  status: 'Active' | 'In progress' | 'Archived'
}

export const profile = {
  name: 'Gutemberg Borges',
  role: 'Senior Software Engineer',
  focus: 'PHP/Laravel · Vue.js/TypeScript · AI-Assisted Engineering',
  location: 'Brazil · Remote (UTC-3)',
  bio: [
    'I am a senior full-stack engineer with about 10 years of experience building web and mobile products, mostly with PHP/Laravel on the back end and Vue.js on the front end. I also code in Python and Node.js.',
    'For over five years I worked on a municipal permits platform used by the City of Feira de Santana. I went from Full-Stack Engineer to Lead, then took on Product Owner and Scrum Master roles. I led small teams, introduced Scrum, and built a compliance module that reports issued permits to the Federal Revenue Service.',
    'Today I build open-source tools in public and practice AI-assisted engineering: context engineering, agent workflows, and code review with LLMs. I am looking for a remote role with an international team.',
  ],
  links: {
    github: 'https://github.com/gutembergborges',
    linkedin: 'https://www.linkedin.com/in/gutemberg-borges',
  },
}

export const stack: { group: string; items: string[] }[] = [
  { group: 'Back end', items: ['PHP', 'Laravel', 'Lumen', 'Python', 'Flask', 'Django', 'Node.js', 'REST APIs'] },
  { group: 'Front end', items: ['Vue.js', 'TypeScript', 'Quasar', 'JavaScript', 'HTML5', 'CSS'] },
  { group: 'Data', items: ['MySQL', 'Oracle', 'SQLite'] },
  { group: 'Practice', items: ['Git / GitFlow', 'GitHub Actions', 'Unit & integration tests', 'Scrum', 'Code review', 'AI-assisted engineering'] },
]

export const projects: Project[] = [
  {
    name: 'pdf2epub',
    tagline: 'Design-heavy PDF books → reflowable EPUB 3 for Kindle',
    description:
      'Classifies lines into headings, paragraphs, lists, code and tables using a per-book TOML profile, drops page furniture, re-joins split words, and validates the EPUB output. Includes a profile generator that drafts the TOML from font statistics.',
    stack: ['Python 3.11+', 'pdfminer.six', 'EPUB 3', 'unittest'],
    repo: 'https://github.com/gutembergborges/pdf2epub',
    status: 'Active',
  },
  {
    name: 'Body Sales',
    tagline: 'Mobile ordering app for a supplements distributor',
    description:
      'Sales reps browse products, build a cart and send orders from their phones; orders report demand to distribution. Being modernized from Vue 2 to Vue 3 + TypeScript with a new API, using AI agents.',
    stack: ['Vue.js', 'Quasar', 'Vuex', 'TypeScript', 'Node.js'],
    repo: 'https://github.com/gutembergborges/body-sales',
    status: 'In progress',
  },
  {
    name: 'bad-and-good-prompt',
    tagline: 'How prompt quality changes AI-generated code',
    description:
      'Paired examples of weak and strong prompts for AI coding assistants, each with the code it produced, to show the difference side by side.',
    stack: ['Prompt engineering', 'LLMs'],
    repo: 'https://github.com/gutembergborges/bad-and-good-prompt',
    status: 'Active',
  },
  {
    name: 'yt2mp3',
    tagline: 'Single-video audio converter for personal offline use',
    description:
      'CLI and small local web UI that converts one video link to an MP3. Playlists are refused on purpose, errors are friendly, and the tests mock the network.',
    stack: ['Python', 'yt-dlp', 'ffmpeg', 'http.server', 'unittest'],
    status: 'Active',
  },
]
