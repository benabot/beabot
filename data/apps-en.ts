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
  heroTitle: 'Useful apps for keeping track.',
  heroSubtitle:
    'A habit to keep. Shared expenses to clarify. A session to start. A meeting to prepare. Short, direct apps built to do one thing without holding your attention.',
  proofLine: [
    'No unnecessary account',
    'No social feed',
    'No noisy dashboard',
  ],
  manifestoTitle: 'Open. Act. Move on.',
  manifestoBody:
    'These apps are not built to keep you scrolling. They make one action clearer, then get out of the way.',
  principles: [
    'one clear main action',
    'fewer screens',
    'no mandatory account when it is not needed',
    'no social feed',
    'no aggressive gamification',
    'data limited to the real use',
  ],
  ctaTitle: 'Where should you start?',
  ctaBody:
    'Each app answers one specific moment. Choose the one that matches what you want to track, clarify or prepare now.',
  intro: [
    'Native iOS and macOS apps built to stay focused: less noise, fewer accounts, fewer unnecessary settings, more practical value.',
    'Each app starts from one clear use case and aims to stay useful over time: easy to open, quick to understand, and lightweight to use.',
  ],
  seo: {
    title: 'Private, focused iPhone apps — BeAbot Apps',
    description:
      'Discover BeAbot apps: FocusOne, DuoSpend and Siturem. Quiet iOS apps built to do one thing clearly, without unnecessary accounts, feeds or dashboards.',
    image: '/img/apps/duo-spend/en/duospend-en-hero.webp',
  },
}

const enSummaryBySlug: Record<string, string> = {
  'duo-spend':
    'Add the expenses for a shared project, see who paid what, and settle the balance simply.',
  'focus-one':
    'A private counter to choose one routine, mark it done today and keep the streak visible.',
  'meeting-mode':
    'Open what matters, hide the rest, and return to your usual workspace after the call.',
  siturem:
    'Start a structured session with a clear frame, few settings, and a progressive return.',
}

const enTaglineBySlug: Record<string, string> = {
  'duo-spend': 'Clarify shared expenses.',
  'focus-one': 'Keep one habit.',
  'meeting-mode': 'Prepare your Mac before a meeting.',
  siturem: 'A stable frame for meditation.',
}

export const appsIndexEnEntries: AppIndexEntry[] = appsIndexEntries.map(
  (entry) => ({
    ...entry,
    image:
      entry.slug === 'focus-one'
        ? '/img/apps/focus-one/00-onboarding_en.webp'
        : entry.slug === 'duo-spend'
          ? '/img/apps/duo-spend/en/duospend-en-hero.webp'
          : entry.slug === 'meeting-mode'
            ? '/img/apps/meeting-mode_vignette-apps_en.webp'
            : entry.slug === 'siturem'
              ? '/img/siturem/siturem-landing_en.webp'
              : entry.image,
    preview:
      entry.slug === 'focus-one'
        ? {
            ...entry.preview,
            src: '/img/apps/focus-one/00-onboarding_en.webp',
          }
        : entry.slug === 'duo-spend'
          ? {
              ...entry.preview,
              src: '/img/apps/duo-spend/en/duospend-en-hero.webp',
              alt: 'DuoSpend welcome screen on iPhone',
            }
          : entry.slug === 'meeting-mode'
            ? {
                ...entry.preview,
                src: '/img/apps/meeting-mode_vignette-apps_en.webp',
              }
            : entry.slug === 'siturem'
              ? {
                  ...entry.preview,
                  src: '/img/siturem/siturem-landing_en.webp',
                }
              : entry.preview,
    stage:
      entry.slug === 'duo-spend' ? 'Available on the App Store' : 'Pre-release',
    tagline: enTaglineBySlug[entry.slug] ?? entry.tagline,
    summary: enSummaryBySlug[entry.slug] ?? entry.summary,
    href: `/en/apps/${entry.slug}/`,
  }),
)

const focusOneFaqSectionsEn: AppFaqSection[] = [
  {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is FocusOne a full habits app replacement?',
        answer:
          'Not exactly. FocusOne does not try to track everything. It helps you build one routine at a time with one clear daily gesture.',
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
        answer:
          'DuoSpend Pro is a one-time in-app purchase. It is $5.99 in the US and €6.99 in France; pricing is localized by country. No subscription.',
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
          'Not yet. This page presents the product, principles, support, and privacy policy.',
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
  overview: [
    'Meeting Mode stays focused on a short, reliable, understandable flow.',
  ],
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
      value:
        'Select a preset, launch the session, and the essentials are executed immediately.',
      description:
        'No repeated setup. A preset stores your apps, links, and files. Start Session opens them, hides the rest, and shows a clean screen in one action.',
      featured: true,
    },
    {
      label: 'Built for screen sharing',
      value:
        'The goal is not generic productivity. The goal is a clean, readable, presentation-ready screen.',
      description:
        'The session prepares the expected context and removes what gets in the way.',
    },
    {
      label: 'Clear restore, no magic',
      value:
        'Meeting Mode attempts to restore only what it actually changed during the session.',
      description:
        'The return stays understandable: the app does not promise to rebuild a desktop it did not touch.',
    },
    {
      label: 'Local first',
      value:
        'Presets and session state are stored locally. No mandatory cloud, no mandatory account.',
      description:
        'Useful information stays on the Mac to keep the flow simple.',
    },
  ],
  gallery: [
    {
      src: '/img/apps/meeting-mode_avant.webp',
      alt: 'Standard macOS desktop before launching a Meeting Mode session',
      title: 'Before',
      subtitle: 'Standard desktop',
    },
    {
      src: '/img/apps/meeting-mode_preset_1.webp',
      alt: 'Preset setup screen in Meeting Mode',
      title: 'Preset',
      subtitle: 'Session configuration',
    },
    {
      src: '/img/apps/meeting-mode_actif.webp',
      alt: 'Active Meeting Mode session on macOS',
      title: 'Active session',
      subtitle: 'Clean screen overlay',
    },
    {
      src: '/img/apps/meeting-mode_reglages.webp',
      alt: 'Meeting Mode settings',
      title: 'Settings',
      subtitle: 'Local preferences',
    },
    {
      src: '/img/apps/meeting-mode_apres.webp',
      alt: 'Desktop after Meeting Mode restore',
      title: 'After',
      subtitle: 'Session restore',
    },
  ],
  beforeAfter: meetingModeContent.beforeAfter
    ? {
        ...meetingModeContent.beforeAfter,
        before: { ...meetingModeContent.beforeAfter.before, label: 'Before' },
        after: { ...meetingModeContent.beforeAfter.after, label: 'After' },
        caption:
          'In one click, Meeting Mode opens what you need and hides the rest. Your screen is ready to share.',
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
      question:
        'Does it need sensitive permissions such as Accessibility or Screen Recording?',
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
    title: 'Practical information',
    description:
      'Screenshots, support and privacy details are gathered on this page.',
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
  intro: 'One promise to keep.',
  summary:
    'Choose one habit, mark it done today, and keep your streak visible. FocusOne helps you keep one thing at a time, with no account, no social feed, and no unnecessary screen.',
  heroLines: [
    'Choose one habit, mark it done today, and keep your streak visible.',
    'One thing at a time, with no account, no social feed, and no unnecessary screen.',
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
      value: 'Pick one routine, mark today, keep the streak visible.',
      description:
        'The first decision stays intentionally simple: one thing to keep, visible enough to come back tomorrow without opening a full dashboard.',
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
      description:
        'Enough not to forget, without turning your phone into noise.',
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
      title: 'Mark today as done',
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
            description: 'Start a routine with one clear gesture.',
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
            description:
              'Unlock medium and large widgets for better visibility.',
          },
          {
            title: 'Archives',
            description:
              'Complete one routine, archive it, then move to the next.',
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
            description:
              'Visual moments at 7, 14, 30, 60, 100, 200, and 365 days.',
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
    title: 'Practical information',
    description:
      'Screenshots, pricing, support and privacy details are gathered on this page.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=focus-one&type=support',
  },
  seo: {
    title: 'FocusOne — Private Habit and Streak Tracker',
    description:
      'FocusOne helps you keep one personal promise at a time. Pick a habit, mark it done every day and track your streak without accounts, feeds or noisy dashboards.',
    image: focusOneContent.seo.image,
  },
}

export const duoSpendEnContent: AppDetailContent = {
  ...duoSpendContent,
  href: '/en/apps/duo-spend/',
  stage: 'Available on the App Store',
  intro: 'Who owes what?',
  summary:
    'DuoSpend helps couples track expenses for a shared project: a trip, a move, a wedding or home improvements. Each person adds what they paid, and the app shows what remains to be balanced.',
  heroLines: [
    'DuoSpend helps couples track expenses for a shared project: a trip, a move, a wedding or home improvements.',
    'Each person adds what they paid, and the app shows what remains to be balanced, without a connected bank or spreadsheet.',
  ],
  overview: [
    'Shared project expenses add up quickly: a trip, a move, a wedding, home improvements, a weekend or holidays.',
    'At first everything seems obvious, then who-paid-what gets fuzzy and manual calculations pile up.',
    'DuoSpend keeps the flow simple: add expenses in seconds and keep balances readable at all times.',
  ],
  preview: {
    ...duoSpendContent.preview,
    src: '/img/apps/duo-spend/en/duospend-en-intro-2.webp',
    alt: 'DuoSpend onboarding screen explaining shared expense tracking',
  },
  detailPoints: [
    {
      label: 'Shared expenses',
      value: 'One shared project, two people, one readable balance.',
      description:
        'Each payment joins the same thread: a trip, a wedding, home improvements or a move. The app keeps who paid what and what remains to settle.',
      featured: true,
    },
    {
      label: 'Clear balances',
      value: 'Who paid what, who owes what.',
      description:
        'DuoSpend computes who advanced money and what remains to settle.',
    },
    {
      label: 'Made for two',
      value: 'Couples and shared projects.',
      description:
        'A lightweight flow to keep balances clear without accounting complexity.',
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
      label: 'Available',
      value: 'The app is published on the App Store.',
      description:
        'DuoSpend is free to download, with DuoSpend Pro available as a one-time in-app purchase.',
    },
  ],
  gallery: [
    {
      src: '/img/apps/duo-spend/en/duospend-en-intro-2.webp',
      alt: 'DuoSpend onboarding screen with the promise to manage shared expenses together',
      title: 'Better managed together',
      subtitle: 'The product promise before starting',
    },
    {
      src: '/img/apps/duo-spend/en/duospend-en-add-expense.webp',
      alt: 'DuoSpend new expense form with amount, title, payer, and custom split',
      title: 'Add an expense',
      subtitle: 'Amount, payer, and split in one flow',
    },
    {
      src: '/img/apps/duo-spend/en/duospend-en-balance.webp',
      alt: 'DuoSpend Italy Trip balance showing who owes money and the project expenses',
      title: 'Track the balance',
      subtitle: 'Who paid, who owes, and what remains',
    },
    {
      src: '/img/apps/duo-spend/en/duospend-en-project-list.webp',
      alt: 'DuoSpend project list with shared budgets for trips, renovations, and events',
      title: 'Shared projects',
      subtitle: 'Several projects with clear balances',
    },
    {
      src: '/img/apps/duo-spend/en/duospend-en-export-pdf.webp',
      alt: 'DuoSpend PDF export sheet for sharing a project recap',
      title: 'PDF export',
      subtitle: 'Shareable recap',
    },
    {
      src: '/img/apps/duo-spend/en/duospend-en-settings-pro.webp',
      alt: 'DuoSpend settings screen showing Pro access, PDF export, privacy, and support',
      title: 'Pro and settings',
      subtitle: 'Export, support, and local preferences',
    },
  ],
  faqSections: duoSpendFaqSectionsEn,
  faq: duoSpendFaqSectionsEn.flatMap((section) => section.items),
  pricing: duoSpendContent.pricing
    ? {
        ...duoSpendContent.pricing,
        title: 'Pricing',
        intro:
          'Free to download · DuoSpend Pro: $5.99 in the US / €6.99 in France.',
        plans: [
          {
            name: 'Free',
            price: 'Free',
            description:
              'Download DuoSpend and track your first shared project.',
            items: ['1 full project', 'Essential features included'],
          },
          {
            name: 'DuoSpend Pro',
            price: '$5.99 US / €6.99 France',
            description:
              'One-time in-app purchase through the App Store. Pricing is localized by country.',
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
    title: 'Practical information',
    description:
      'Screenshots, pricing, support and privacy details are gathered on this page.',
    secondaryLabel: 'Need help? Contact support',
    secondaryTo: '/en/contact/?app=duo-spend&type=support',
  },
  seo: {
    title: 'DuoSpend — Shared expenses app for couples',
    description:
      'DuoSpend helps couples track expenses for a trip, move, wedding or home project, with clear balances and no connected bank or spreadsheet.',
    image: '/img/apps/duo-spend/en/duospend-en-hero.webp',
  },
}

export const situremEnContent: AppDetailContent = {
  ...situremContent,
  href: '/en/apps/siturem/',
  stage: 'Pre-release',
  intro: 'A structured session, without the noise.',
  summary:
    'Structured meditation for autonomous practitioners, with a stable frame and minimal options.',
  overview: [
    'Most meditation apps prioritize guided content, programs, frequent notifications, and gamification. For autonomous practitioners, that often adds noise.',
    'Siturem takes the opposite path: a ready-to-use three-phase session, limited options, and no content overload.',
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
      description:
        'The frame avoids sessions that are too short to preserve entry, practice, and return.',
    },
    {
      label: 'Guidance options',
      value:
        'Silent, structured, or light guidance with gong and subtle reminders.',
      description:
        'Settings support the session without turning Siturem into a content catalog.',
    },
    {
      label: 'Tracking',
      value:
        'Total time, 7/30-day history, and discreet streak without aggressive gamification.',
      description:
        'A few markers are enough to review consistency without adding pressure.',
    },
    {
      label: 'Data',
      value:
        'Local-first approach, no mandatory account, optional HealthKit integration.',
      description:
        'Data stays limited to the real use and the integrations you enable.',
    },
  ],
  gallery: [
    {
      src: '/img/siturem/siturem-meditation-screen.webp',
      alt: 'Meditation session running in Siturem',
      title: 'Session',
      subtitle: 'The timer fades behind practice',
    },
    {
      src: '/img/siturem/siturem-interface.webp',
      alt: 'Session settings screen in Siturem',
      title: 'Settings',
      subtitle: 'Duration, ambiance, gong, and reminders',
    },
    {
      src: '/img/siturem/siturem-intro-1.webp',
      alt: 'First intro step in Siturem',
      title: 'Introduction',
      subtitle: 'Enter the session without extra noise',
    },
    {
      src: '/img/siturem/siturem-intro-2.webp',
      alt: 'Second intro step in Siturem',
      title: 'Structure',
      subtitle: 'A stable frame without overload',
    },
    {
      src: '/img/siturem/siturem-intro-3.webp',
      alt: 'Third intro step in Siturem',
      title: 'Return',
      subtitle: 'Exit practice progressively',
    },
  ],
  faqSections: situremFaqSectionsEn,
  faq: situremFaqSectionsEn.flatMap((section) => section.items),
  cta: {
    ...situremContent.cta,
    title: 'Practical information',
    description:
      'Screenshots, support and privacy details are gathered on this page.',
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
