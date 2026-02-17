
export type User = {
  id: number
  name: string
  username: string
  email: string
  avatar?: string
  about: string
  followers: number
  following: number
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
  image?: string
  likes: number
  comments: string[]
}

export const users: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    avatar: 'https://i.pravatar.cc/150?img=47',
    about: 'Writer focused on building better creative habits and practical systems.',
    followers: 1240,
    following: 312,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    avatar: 'https://i.pravatar.cc/150?img=12',
    about: 'Product designer sharing notes on clarity, UX decisions, and shipping fast.',
    followers: 930,
    following: 268,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    avatar: 'https://i.pravatar.cc/150?img=32',
    about: 'Frontend engineer documenting debugging workflows and side project lessons.',
    followers: 1580,
    following: 401,
  },
]

export const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: 'How I Built a Better Writing Habit in 30 Days',
    body:
      'At the start of the month, I promised myself I would write every day for twenty minutes.\n' +
      'Most days were not perfect, but consistency mattered more than quality in the beginning.\n' +
      'By the third week, ideas came faster and editing became easier because I had real drafts to work with.\n' +
      'If you are stuck, make the goal smaller and keep showing up until momentum takes over.',
    likes: 128,
    comments: [
      'This was exactly the motivation I needed today.',
      'Small daily goals really do work.',
      'Great breakdown, especially the momentum point.',
    ],
  },
  {
    userId: 1,
    id: 2,
    title: 'Why Simplicity Wins in Product Design',
    body:
      'Complex interfaces usually come from trying to solve every edge case on day one.\n' +
      'The strongest products reduce decisions and guide users toward one clear next step.\n' +
      'When we removed three optional settings from onboarding, completion improved immediately.\n' +
      'Simplicity is not about fewer features, it is about fewer points of confusion.',
    image: '/writing.jpg',
    likes: 94,
    comments: [
      'I agree, clear flows beat fancy dashboards.',
      'Would love to see before and after screenshots.',
    ],
  },
  {
    userId: 2,
    id: 3,
    title: 'A Practical Guide to Debugging Faster',
    body:
      'Start by reproducing the bug with the smallest possible input before touching any code.\n' +
      'Then add logs around assumptions, not around everything, so the signal stays clear.\n' +
      'Once you find the first wrong value, move one step earlier in the flow and repeat.\n' +
      'Fast debugging is mostly a process discipline, not a memorized set of tricks.',
    image: '/file.svg',
    likes: 76,
    comments: [
      'The smallest input trick saves so much time.',
      'This should be required reading for junior devs.',
      'Clear and practical advice.',
    ],
  },
  {
    userId: 3,
    id: 4,
    title: 'What I Learned After Shipping My First Side Project',
    body:
      'Shipping taught me that feedback arrives faster than confidence.\n' +
      'Some users ignored features I spent weeks building and loved the simplest part instead.\n' +
      'I stopped chasing a perfect launch and started releasing smaller improvements every Friday.\n' +
      'Progress became easier once I treated the project like a conversation, not a final exam.',
    image: '/window.svg',
    likes: 151,
    comments: [
      'The Friday release cadence is a smart idea.',
      'This felt very honest and relatable.',
      'Perfect launch mindset is so hard to drop.',
    ],
  },
]
