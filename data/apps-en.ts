import type {
  AppDetailContent,
  AppFaqSection,
  AppIndexEntry,
} from '~/data/apps'
import {
  appsIndexEntries,
  duoSpendContent,
  focusOneContent,
  meetingModeContent,
  situremContent,
} from '~/data/apps'

export const appsIndexEnContent = {
  title: 'iOS and macOS apps',
  intro: [
    'Native iOS and macOS apps built to stay focused: less noise, fewer accounts, fewer unnecessary settings, more practical value.',
    'Each app starts from one clear use case and aims to stay useful over time: easy to open, quick to understand, and lightweight to use.',
  ],
  seo: {
    title: 'Focused iOS and macOS apps',
    description:
      'DuoSpend, FocusOne, Meeting Mode, and Siturem: focused native iOS and macOS apps with no mandatory account and no ads.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

const enSummaryBySlug: Record<string, string> = {
  'duo-spend':
    'iOS app to track shared expenses between two people: couples, roommates, friends, trips, or daily costs. Add an expense and instantly see who owes what.',
  'focus-one':
    'Minimal iPhone app to build one micro-habit at a time. Daily routine, streaks, local reminders, and widgets, with no account and no ads.',
  'meeting-mode':
    'Prepare your Mac for meetings in one click. Open what matters, hide the rest.',
  siturem:
    'Meditation timer for advanced practitioners. A stable structure for consistent sessions, with minimal friction and no distractions.',
}

export const appsIndexEnEntries: AppIndexEntry[] = appsIndexEntries.map((entry) => ({
  ...entry,
  image:
    entry.slug === 'focus-one'
      ? '/img/apps/focus-one/00-onboarding_en.webp'
      : entry.image,
  stage: 'Pre-release',
  summary: enSummaryBySlug[entry.slug] ?? entry.summary,
  href: `/en/apps/${entry.slug}/`,
}))

const focusOneFaqSectionsEn: AppFaqSection[] = [
  {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is FocusOne a full habits app replacement?',
        answer:
          'Not exactly. FocusOne does not try to track everything. It helps you build one routine at a time with less friction.',
      },
      {
        question: 'Why only one active habit?',
        answer:
          'Because one routine you keep beats ten goals you abandon. FocusOne favors consistency over accumulation.',
      },
      {
        question: 'What is included in the free version?',
        answer:
          'The free version includes one active habit, daily check-ins, streak tracking, simple reminders, and basic widgets.',
      },
      {
        question: 'What does Premium unlock?',
        answer:
          'Premium adds full history, advanced stats, medium and large widgets, archives, premium icons, extra colors, commitment durations, milestone celebrations, and one monthly streak shield.',
      },
      {
        question: 'How much is Premium?',
        answer: 'FocusOne Premium costs €14.99/year or €39.99 one-time.',
      },
      {
        question: 'Do I need an account?',
        answer: 'No. FocusOne does not require an account.',
      },
      {
        question: 'Do my data stay private?',
        answer:
          'Yes. Your data stay on your iPhone and can sync via iCloud if you enable it. The privacy section explains the details.',
      },
      {
        question: 'Does FocusOne include ads?',
        answer: 'No. FocusOne is ad-free.',
      },
    ],
  },
]

const duoSpendFaqSectionsEn: AppFaqSection[] = [
  {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is DuoSpend for?',
        answer:
          'DuoSpend helps two people track shared expenses. Add an expense, set who paid, choose a split, and instantly see who owes what.',
      },
      {
        question: 'Who is it for?',
        answer:
          'Couples, roommates, friends, or family sharing expenses for a project or period: travel, moving, events, home projects, or daily spending.',
      },
      {
        question: 'Why not just use a spreadsheet?',
        answer:
          'Spreadsheets can work, but they require manual upkeep. DuoSpend keeps expenses, splits, and balances in one clear flow.',
      },
      {
        question: 'Can I split differently than 50/50?',
        answer:
          'Yes. Each expense can be split evenly or with custom ratios, such as 60/40 or 70/30.',
      },
      {
        question: 'What is in the free version?',
        answer:
          'The free version lets you manage one complete project with essential features: budget, expenses, custom splits, and clear balance.',
      },
      {
        question: 'What does DuoSpend Pro unlock?',
        answer:
          'DuoSpend Pro unlocks unlimited projects, home screen widgets, and PDF export with a one-time purchase.',
      },
      {
        question: 'How much is DuoSpend Pro?',
        answer: 'DuoSpend Pro costs €6.99 one-time. No subscription.',
      },
      {
        question: 'Do I need an account?',
        answer: 'No. DuoSpend works without an account.',
      },
      {
        question: 'Do my data stay private?',
        answer:
          'Yes. In the current version, projects and expenses stay local on your iPhone. The privacy section provides full details.',
      },
      {
        question: 'Can two people use DuoSpend on two iPhones?',
        answer:
          'Not in the first version. DuoSpend starts as local tracking on one iPhone. Optional iCloud sync and shared usage are planned later.',
      },
    ],
  },
]

const situremFaqSectionsEn: AppFaqSection[] = [
  {
    title: 'Positioning',
    items: [
      {
        question: 'Who is Siturem designed for?',
        answer:
          'Siturem is designed for experienced practitioners looking for a stable and repeatable meditation frame. It is not positioned as a beginner discovery app.',
      },
      {
        question: 'Is it a guided meditation app?',
        answer:
          'Not in the usual sense. Siturem does not provide a content library or progressive programs. It structures sessions with minimal options.',
      },
      {
        question: 'Why not just use the iPhone timer?',
        answer:
          'A timer gives you duration, but not a session structure. Siturem provides a stable frame with entry, practice, and exit phases, while staying lightweight.',
      },
    ],
  },
  {
    title: 'How it works',
    items: [
      {
        question: 'How does a session work?',
        answer:
          'Each session has three phases: a 2m30 introduction, a practice phase based on selected total time, and a 1m32 cooldown to exit progressively.',
      },
      {
        question: 'What is the minimum duration?',
        answer:
          'The minimum session length is 6 minutes, so the three-phase structure stays meaningful.',
      },
      {
        question: 'Which options are available?',
        answer:
          'Siturem intentionally stays limited: total duration, guidance mode, final gong, optional ambient sound, subtle reminders, and lightweight practice tracking.',
      },
      {
        question: 'Does it write sessions to Apple Health?',
        answer:
          'Yes, HealthKit integration is planned as an option. It lets sessions appear in Apple Health without being required for core usage.',
      },
    ],
  },
  {
    title: 'Privacy and release',
    items: [
      {
        question: 'Do I need an account?',
        answer:
          'No. Siturem is designed as a native app with no mandatory account, no ads, and no platform lock-in.',
      },
      {
        question: 'Does it include tracking or third-party SDKs?',
        answer:
          'The product page follows a restrained policy: no invasive tracking, no marketing profiling, and data processing limited to what is needed for app behavior and user-enabled Apple integrations.',
      },
      {
        question: 'Is Siturem already published?',
        answer:
          'Not yet. This page presents the product, principles, and privacy policy. You can leave your email to be notified at release.',
      },
    ],
  },
]

export const meetingModeEnContent: AppDetailContent = {
  ...meetingModeContent,
  href: '/en/apps/meeting-mode/',
  stage: 'Pre-release',
  intro:
    'Meeting Mode prepares your Mac for a meeting, demo, interview, or screen share in one click: open what is needed, hide what is not, show a clean screen, then offer a clear restore flow.',
  summary: 'Prepare, present, restore from the menu bar.',
  overview: ['Meeting Mode stays focused on a short, reliable, understandable flow.'],
  capabilities: [
    'open the apps, links, and files included in your preset',
    'hide visible apps that are outside the session scope',
    'show a clean screen before screen sharing',
    'restore only what the app actually changed during the session',
  ],
  useCases: [
    'product demos',
    'client calls',
    'interviews',
    'screen sharing and support calls',
    'internal presentations',
    'any recurring call where you launch the same context',
  ],
  detailPoints: [
    {
      label: 'A true one-click flow',
      value: 'Select a preset, launch the session, and the essentials are executed immediately.',
      description:
        'No repeated setup. A preset stores your apps, links, and files. Start Session opens them, hides the rest, and shows a clean screen in one action.',
      featured: true,
    },
    {
      label: 'Built for screen sharing',
      value:
        'The goal is not generic productivity. The goal is a clean, readable, presentation-ready screen.',
    },
    {
      label: 'Clear restore, no magic',
      value: 'Meeting Mode attempts to restore only what it actually changed during the session.',
    },
    {
      label: 'Local first',
      value: 'Presets and session state are stored locally. No mandatory cloud, no mandatory account.',
    },
  ],
  beforeAfter: meetingModeContent.beforeAfter
    ? {
        ...meetingModeContent.beforeAfter,
        before: { ...meetingModeContent.beforeAfter.before, label: 'Before' },
        after: { ...meetingModeContent.beforeAfter.after, label: 'After' },
        caption: 'In one click, Meeting Mode opens what you need and hides the rest. Your screen is ready to share.',
      }
    : undefined,
  faq: [
    {
      question: 'What is Meeting Mode for?',
      answer:
        'Meeting Mode helps you prepare your Mac quickly before meetings, demos, interviews, or screen sharing. It can open relevant apps, links, and files, hide selected visible apps, show a clean screen, then offer a simple restore.',
    },
    {
      question: 'Which system does it run on?',
      answer: 'Meeting Mode is a macOS app designed for menu bar usage.',
    },
    {
      question: 'What is a preset?',
      answer:
        'A preset is a reusable setup. It can include apps to open, links, local files, a checklist, and optional clean screen mode.',
    },
    {
      question: 'What does Start Session do exactly?',
      answer:
        'Start Session launches preset items, hides visible out-of-scope apps on a best-effort basis, enables clean screen if requested, then marks the session active.',
    },
    {
      question: 'What does Restore Session do?',
      answer:
        'Restore Session removes the overlay and attempts to restore only what Meeting Mode actually changed.',
    },
    {
      question: 'Does the app close everything automatically at the end?',
      answer:
        'No. Meeting Mode stays intentionally conservative. Restore is best-effort and limited to actual session scope.',
    },
    {
      question: 'Does it manage windows, Spaces, or browser tabs?',
      answer:
        'No. That is not the product goal. Meeting Mode is not meant to be an advanced desktop/window manager.',
    },
    {
      question: 'Do my data leave my Mac?',
      answer:
        'Planned behavior is mostly local: presets, preferences, and session state are stored locally. If this changes, privacy policy and App Store disclosures will be updated.',
    },
    {
      question: 'Does it require an account?',
      answer: 'No. Planned usage does not require an account.',
    },
    {
      question: 'Does it need sensitive permissions such as Accessibility or Screen Recording?',
      answer:
        'In the documented project state, the main flow does not rely on mandatory Accessibility, Automation, or Screen Recording permissions.',
    },
    {
      question: 'Can I create multiple presets?',
      answer: 'Yes. You can create, edit, and delete multiple presets.',
    },
    {
      question: 'Does it work offline?',
      answer:
        'Yes for core local behavior. URLs in presets naturally depend on network availability and target services.',
    },
    {
      question: 'Is there cloud sync?',
      answer: 'No. It is outside the current product scope.',
    },
    {
      question: 'Why not promise a perfect restore?',
      answer:
        'Because that would be misleading. Some cross-app macOS behaviors are inherently limited, so Meeting Mode prefers a clear and honest restore model.',
    },
  ],
  cta: {
    ...meetingModeContent.cta,
    title: 'Be the first to know.',
    description: 'Meeting Mode is coming soon. Leave your email and I will let you know at launch.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=meeting-mode&type=support',
  },
  seo: {
    title: 'Meeting Mode — macOS app for meetings and screen sharing',
    description:
      'Meeting Mode prepares your Mac in one click: open key apps, hide distractions, and present a clean screen before sharing.',
    image: meetingModeContent.seo.image,
  },
}

export const focusOneEnContent: AppDetailContent = {
  ...focusOneContent,
  href: '/en/apps/focus-one/',
  stage: 'Pre-release',
  intro: 'One habit. Every day.',
  summary:
    'The iPhone app that helps you build one routine at a time without drowning in dashboards, goals, and settings.',
  heroLines: [
    'The iPhone app that helps you build one routine at a time without drowning in dashboards, goals, and settings.',
    'Choose one micro-habit, check it off in one tap, keep your streak. Nothing more than what helps you stay consistent.',
  ],
  overview: [
    'Many habit apps start simple, then become dashboards: many routines, many charts, stacked goals, and notification overload.',
    'When you try to track everything, you often stop tracking anything.',
    'FocusOne takes the opposite path: one active habit, one clear action, immediate feedback.',
    'Pick a simple routine and validate it daily in one gesture. The app helps you keep momentum without taking over your day.',
  ],
  detailPoints: [
    {
      label: 'One active habit',
      value: 'Less distraction, higher consistency.',
      description: 'FocusOne helps you direct your energy to one routine at a time.',
      featured: true,
    },
    {
      label: 'One daily gesture',
      value: 'Open, check, move on.',
      description: 'Tracking stays quick, even on busy days.',
    },
    {
      label: 'A motivating streak',
      value: 'A simple signal to keep your momentum.',
      description: 'See your consistency and recover quickly when needed.',
    },
    {
      label: 'Light reminders',
      value: 'One or two reminders, not a notification storm.',
      description: 'Enough not to forget, without turning your phone into noise.',
    },
    {
      label: 'Day boundary adapted to your rhythm',
      value: 'Your day does not always end at midnight.',
      description: 'Define your day start so your streak reflects real life.',
    },
    {
      label: 'Useful widgets',
      value: 'Keep your routine visible at a glance.',
      description: 'Track your goal from home or lock screen.',
    },
  ],
  preview: {
    ...focusOneContent.preview,
    src: '/img/apps/focus-one/03-aujourd-hui_en.webp',
    alt: 'FocusOne main screen with daily check-in',
  },
  gallery: [
    {
      src: '/img/apps/focus-one/02-creation_en.webp',
      alt: 'FocusOne routine creation screen',
      title: 'Create a routine',
      subtitle: 'Pick a name, icon, color, and cadence',
    },
    {
      src: '/img/apps/focus-one/03-serie-active_en.webp',
      alt: 'FocusOne main screen with daily check-in',
      title: 'Check in without friction',
      subtitle: 'The key action is visible right away',
    },
    {
      src: '/img/apps/focus-one/04-streak_en.webp',
      alt: 'FocusOne streak and progress overview',
      title: 'Keep your streak',
      subtitle: 'Current streak, best streak, and progress at a glance',
    },
    {
      src: '/img/apps/focus-one/05-statistique_en.webp',
      alt: 'FocusOne monthly stats and progress calendar',
      title: 'Track consistency',
      subtitle: 'Calendar, history, and useful progress signals',
    },
    {
      src: '/img/apps/focus-one/08-widget_en.webp',
      alt: 'FocusOne iOS widget showing active routine',
      title: 'See progress without opening',
      subtitle: 'Home screen widget for daily visibility',
    },
    {
      src: '/img/apps/focus-one/07-milestone_en.webp',
      alt: 'FocusOne milestone celebration screen',
      title: 'Celebrate milestones',
      subtitle: 'Light visual moments when streak grows',
    },
  ],
  faqSections: focusOneFaqSectionsEn,
  faq: focusOneFaqSectionsEn.flatMap((section) => section.items),
  pricing: focusOneContent.pricing
    ? {
        ...focusOneContent.pricing,
        title: 'Pricing',
        intro:
          'FocusOne keeps its core free and simple. Premium adds depth when you want to track progress over time.',
        plans: [
          {
            name: 'Free',
            price: '€0',
            description: 'Start a routine with no friction.',
            items: [
              'One active habit',
              'Daily check-in',
              'Current streak',
              'Simple reminders',
              'Basic widgets',
              'Essential stats',
            ],
          },
          {
            name: 'Premium',
            price: '€14.99 / year or €39.99 one-time',
            description:
              'Keep your full history, personalize your app, and support long-term consistency.',
            items: [
              'Full history beyond 30 days',
              'Advanced stats',
              'Medium and large widgets',
              'Archives and next routine',
              'Premium icons, colors, and commitments',
              'Streak milestone celebrations',
              'Monthly streak shield',
            ],
          },
        ],
        premiumBenefits: [
          {
            title: 'Advanced stats',
            description: 'Richer insights without making the app heavy.',
          },
          {
            title: 'Full history',
            description: 'Keep past months beyond the 30-day free window.',
          },
          {
            title: 'Advanced widgets',
            description: 'Unlock medium and large widgets for better visibility.',
          },
          {
            title: 'Archives',
            description: 'Complete one routine, archive it, then move to the next.',
          },
          {
            title: 'Premium icons',
            description: 'More symbols to identify routines faster.',
          },
          {
            title: 'Commitment durations',
            description: 'Set 7, 10, 15, or 30-day commitments.',
          },
          {
            title: 'Extended colors',
            description: 'Personalize without adding complexity.',
          },
          {
            title: 'Milestones',
            description: 'Visual moments at 7, 14, 30, 60, 100, 200, and 365 days.',
          },
          {
            title: 'Streak protection',
            description: 'One monthly shield when life gets in the way.',
          },
        ],
      }
    : undefined,
  cta: {
    ...focusOneContent.cta,
    title: 'Be the first to know.',
    description: 'FocusOne is coming soon. Leave your email and I will let you know at launch.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=focus-one&type=support',
  },
  seo: {
    title: 'FocusOne — iPhone app to build one habit at a time',
    description:
      'FocusOne is a minimal iPhone app built for one daily micro-habit: streaks, useful widgets, and lightweight reminders.',
    image: focusOneContent.seo.image,
  },
}

export const duoSpendEnContent: AppDetailContent = {
  ...duoSpendContent,
  href: '/en/apps/duo-spend/',
  stage: 'Pre-release',
  intro: 'Track shared expenses together, clearly',
  summary:
    'DuoSpend helps you track shared expenses without spreadsheets, mental math, or endless conversations.',
  heroLines: [
    'DuoSpend helps you track shared expenses without spreadsheets, mental math, or endless conversations.',
    'Add an expense, set who paid, and see the balance instantly. Everyone stays aligned.',
  ],
  overview: [
    'Shared costs add up quickly: groceries, restaurants, fuel, subscriptions, trips, moving, or project expenses.',
    'At first everything seems obvious, then who-paid-what gets fuzzy and manual calculations pile up.',
    'DuoSpend keeps the flow simple: add expenses in seconds and keep balances readable at all times.',
  ],
  detailPoints: [
    {
      label: 'Shared expenses',
      value: 'Groceries, outings, transport, subscriptions, trips.',
      description: 'Add everyday or project expenses in a few taps.',
      featured: true,
    },
    {
      label: 'Clear balances',
      value: 'Who paid what, who owes what.',
      description: 'DuoSpend computes who advanced money and what remains to settle.',
    },
    {
      label: 'Made for two',
      value: 'Couples, roommates, friends, or family.',
      description: 'A lightweight flow to keep accounts clear without accounting complexity.',
    },
    {
      label: 'No spreadsheet',
      value: 'No scattered notes, no manual math.',
      description: 'The app keeps the thread for you, project after project.',
    },
    {
      label: 'Fast readability',
      value: 'Understand the situation in seconds.',
      description: 'A focused interface for quick financial clarity.',
    },
    {
      label: 'Pre-release',
      value: 'The app is currently in preparation.',
      description: 'This page presents the product and lets you join the release list.',
    },
  ],
  faqSections: duoSpendFaqSectionsEn,
  faq: duoSpendFaqSectionsEn.flatMap((section) => section.items),
  pricing: duoSpendContent.pricing
    ? {
        ...duoSpendContent.pricing,
        title: 'Pricing',
        intro:
          'DuoSpend keeps essential features free for one real project. Pro unlocks unlimited projects, widgets, and PDF export.',
        plans: [
          {
            name: 'Free',
            price: '€0',
            description: 'Track your first shared project with no friction.',
            items: ['1 full project', 'Essential features included'],
          },
          {
            name: 'DuoSpend Pro',
            price: '€6.99',
            description: 'One-time purchase. Lifetime access. No subscription.',
            items: [
              'Unlimited projects',
              'Home screen widgets',
              'PDF export',
              'No subscription',
            ],
          },
        ],
      }
    : undefined,
  cta: {
    ...duoSpendContent.cta,
    title: 'Be the first to know.',
    description: 'DuoSpend is coming soon. Leave your email and I will let you know at launch.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=duo-spend&type=support',
  },
  seo: {
    title: 'DuoSpend — shared expenses app for couples and roommates',
    description:
      'DuoSpend is an iOS app to track shared expenses between two people and keep balances clear without spreadsheets.',
    image: duoSpendContent.seo.image,
  },
}

export const situremEnContent: AppDetailContent = {
  ...situremContent,
  href: '/en/apps/siturem/',
  stage: 'Pre-release',
  intro: 'Designed for a stable, regular, distraction-free practice frame.',
  summary:
    'An iOS meditation timer for advanced practitioners, with a clear session structure and lightweight tracking.',
  overview: [
    'Most meditation apps prioritize guided content, programs, frequent notifications, and gamification. For autonomous practitioners, that often adds noise.',
    'Siturem takes the opposite path: a ready-to-use three-phase session, limited options, minimal friction, and no content overload.',
  ],
  detailPoints: [
    {
      label: 'Structure',
      value: '3 fixed phases: entry, practice, return.',
      description: 'Siturem relies on a stable and repeatable session frame.',
      featured: true,
    },
    {
      label: 'Minimum duration',
      value: '6 minutes to keep session coherence.',
    },
    {
      label: 'Guidance options',
      value: 'Silent, structured, or light guidance with gong and subtle reminders.',
    },
    {
      label: 'Tracking',
      value: 'Total time, 7/30-day history, and discreet streak without aggressive gamification.',
    },
    {
      label: 'Data',
      value: 'Local-first approach, no mandatory account, optional HealthKit integration.',
    },
  ],
  faqSections: situremFaqSectionsEn,
  faq: situremFaqSectionsEn.flatMap((section) => section.items),
  cta: {
    ...situremContent.cta,
    title: 'Be the first to know.',
    description: 'Siturem is in pre-release. Leave your email and I will let you know at launch.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=siturem&type=support',
  },
  seo: {
    title: 'Siturem — iOS meditation timer for advanced practitioners',
    description:
      'Siturem is an iOS meditation timer built for advanced practitioners who want a stable and distraction-free practice frame.',
    image: situremContent.seo.image,
  },
}
