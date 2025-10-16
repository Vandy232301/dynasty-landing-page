// Site Configuration
export const SITE_CONFIG = {
  name: 'DYNASTY',
  title: 'DYNASTY - Cea mai puternică comunitate de Trading',
  description: 'Ecosistem complet de educație, informație și semnale — construit să-ți crească disciplina, claritatea și capitalul.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  locale: 'ro_RO',
}

// Social Media Links
export const SOCIAL_LINKS = {
  discord: process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/dynasty',
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/dynasty',
}

// CTA Links
export const CTA_LINKS = {
  dynastySignup: process.env.NEXT_PUBLIC_DYNASTY_SIGNUP_URL || '#cta',
  vandyFree: process.env.NEXT_PUBLIC_VANDY_FREE_URL || '#',
}

// Analytics
export const ANALYTICS = {
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
}

// Features List
export const FEATURES = [
  'Structură premium pe Discord',
  'Educație aplicată, nu teorie',
  'Echipa DYNASTY (calleri, analiști, mentori)',
  'Tool-uri & trackere proprii',
  'Suport rapid, uman',
  'Rezultate verificate (PNL-uri & recenzii)',
]

// Trading Pillars
export const TRADING_PILLARS = {
  memecoin: {
    id: 'memecoin',
    title: 'MEMECOIN TRADING',
    description: [
      'Call-uri zilnice pe monede cu potențial exploziv.',
      'Boți și alerte pentru proiecte timpurii.',
      'CT Tracker – monitorizează trendurile virale.',
      'Suport și explicații clare, pas cu pas.',
    ],
    note: '(Printre ultimele semnale a generat +163.000% – adică peste 1630X profit real)',
    image: '/images/trading-result-3.png',
  },
  futures: {
    id: 'futures',
    title: 'FUTURES TRADING',
    description: [
      'Intrări și ieșiri precise, zilnic.',
      'Strategia profitului compus 2%/zi.',
      'Obiectiv: 1.000.000$ prin disciplină.',
      'Suport pentru risk și execuție corectă.',
    ],
    note: '(Winrate constant între 90% și 100% pe semnale validate)',
    image: '/images/trading-result-2.png',
  },
  wealth: {
    id: 'wealth',
    title: 'WEALTH PORTFOLIO',
    description: [
      'Strategii pe termen scurt, mediu, lung.',
      'Spot trading organizat și planificat.',
      'Analize macro și trenduri fundamentale.',
      'Ghidaj pentru stabilitate financiară reală.',
    ],
    note: '(Construiește un portofoliu solid și diversificat pe termen lung)',
    image: '/images/trading-result-1.png',
  },
}

// Result Screenshots
export const RESULT_SCREENSHOTS = {
  row1: [1, 2, 3],
  row2: [4, 6, 5],
  row3: [7, 8, 9],
  row4: [10, 11, 12],
  row5: [13, 14, 15],
  row6: [16, 17, 18],
}

