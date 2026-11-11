import { Profile } from '../types/profile';

export const profile: Profile = {
  name: 'Parth Jariwala',
  title: 'Software Engineer II',
  location: 'Surat, India · Remote',
  headline:
    'I design and run the backend systems behind programmatic job advertising: event-driven pipelines, partner integrations and bidding automation on Java, Kafka and AWS.',
  summary: [
    "I've spent 7+ years building backend systems, the last four at Joveo, where my work sits between high-volume job data and the money spent advertising it. I like problems where correctness, cost and latency all matter at once.",
    "Most of what I ship is unglamorous on purpose: idempotent consumers, locks that prevent double runs, alerts that page only when something is actually wrong. I'd rather find the mechanism behind an incident than patch the symptom.",
    'These days I also lead: setting up how a team takes on work, reviewing designs and PRs, running on-call, and mentoring the engineers and interns who join it.',
  ],
  focus: ['distributed systems', 'event-driven pipelines', 'API integrations', 'reliability'],
  stats: [
    { value: '7+', label: 'years in backend' },
    { value: '4+', label: 'years at Joveo' },
    { value: '6→25%', label: 'spend run by AutoTrader' },
    { value: '80%', label: 'faster feed-to-live' },
  ],
  experience: [
    {
      company: 'Joveo',
      monogram: 'J',
      logo: '/images/joveo-mark.svg',
      url: 'https://www.joveo.com',
      location: 'Remote',
      duration: 'Apr 2022 – Present',
      tagline: 'Backend for programmatic recruitment advertising: integrations, bidding automation and job data pipelines.',
      roles: [
        { title: 'Software Engineer II', duration: 'Jan 2024 – Present' },
        { title: 'Software Engineer', duration: 'Apr 2022 – Dec 2023' },
      ],
      areas: [
        {
          name: 'ATS Partner Integrations',
          period: '2025 – Present',
          points: [
            'Took ownership of the Partner Integration function and became its technical lead, delivering 7 production ATS integrations and ~18 integration and demo builds across platforms such as Greenhouse, Jobylon, Ashby and SAP SuccessFactors.',
            'Co-designed a unified webhook-to-Kafka event architecture with SLA/TTL handling and dead-letter queues, and moved ATS event flows off SQS onto Kafka.',
            'Consolidated six Java integration services into ats-integration-service, a single TypeScript platform deployed three ways: an API for webhooks and writes back to the ATS, Kafka stream consumers, and an AWS Batch sync worker.',
            'Rebuilt on-call around P0-only paging and tuned alert rules, cutting alert scan volume from 470 GB to 135 GB.',
          ],
          stack: ['TypeScript', 'Java', 'Kafka', 'PostgreSQL', 'Redis', 'AWS Batch', 'Webhooks'],
        },
        {
          name: 'AutoTrader & Bidding Automation',
          period: '2023 – 2025',
          points: [
            'Built core services of AutoTrader, which bids autonomously on job ads across publishers against client goals (CPC, CPA, CPAS, CPH).',
            'Shipped spend-wastage, title-expansion and monthly bid-reset algorithms, then extended AutoTrader to TCPA and Easy Apply publishers. AutoTrader-managed spend grew from 6% to 25% in one quarter.',
            'Built a Kafka consumer that resets job-level bids as job groups or publishers leave AutoTrader, and fixed a Quartz scheduling bug where one slow client could stall rule runs for every other client.',
            'Cut ~$800/month in Snowflake spend by reworking cron queries, and raised the service’s test coverage from 24% to 84%.',
          ],
          stack: ['Java', 'Kafka', 'Snowflake', 'MySQL', 'Quartz', 'Kubernetes'],
        },
        {
          name: 'Feed Ingestion & Batch Processing',
          period: '2022 – 2024',
          points: [
            'Moved feed orchestration to Kafka events so changes run immediately, cutting time from feed mapping to sponsored jobs by 80% (120 → 20 min).',
            'Merged downloader and processor microservices on AWS Batch with checkpointed retries for spot interruptions, bringing feed SLA misses close to zero.',
            'Later re-architected batch orchestration with distributed locking to stop duplicate parallel runs against 3–6 hour SLAs.',
          ],
          stack: ['AWS Batch', 'Lambda', 'S3', 'EventBridge', 'Redis', 'ScyllaDB'],
        },
      ],
    },
    {
      company: 'Jeavio',
      monogram: 'Je',
      logo: '/images/jeavio-mark.png',
      logoFit: 'cover',
      url: 'https://jeavio.com',
      location: 'Vadodara, India',
      duration: 'Dec 2018 – Mar 2022',
      tagline: 'Product engineering for SevOne NMS, a network monitoring platform.',
      roles: [
        { title: 'Software Engineer', duration: 'Jun 2020 – Mar 2022' },
        { title: 'Associate Software Engineer', duration: 'May 2019 – May 2020' },
        { title: 'Intern', duration: 'Dec 2018 – Mar 2019' },
      ],
      areas: [
        {
          name: 'SevOne NMS APIs',
          period: '2019 – 2022',
          points: [
            'Built Java Spring REST APIs to store and query network monitoring data, used by NMS operators and SevOne solutions.',
            'Grew from intern to software engineer, starting with data-structure–heavy work on the platform core.',
          ],
          stack: ['Java', 'Spring', 'REST', 'MySQL'],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Batchelo',
      url: 'https://parthjariwala.in',
      domain: 'parthjariwala.in',
      tagline: 'Multi-tenant SaaS for running coaching academies: batches, class schedules, attendance, fees and staff.',
      points: [
        'Spring Boot 3 on Java 21, running serverless on AWS Lambda behind API Gateway and deployed with SAM.',
        'DynamoDB data model with organisation-scoped indexes, optimistic locking and recurring-session edits done with bounded parallel writes.',
        'Cognito auth with Google sign-in and email invitations; the Next.js frontend runs on Cloudflare Workers.',
      ],
      stack: ['Java 21', 'Spring Boot', 'AWS Lambda', 'DynamoDB', 'Cognito', 'Next.js', 'Cloudflare'],
    },
    {
      name: 'parth.codes',
      url: 'https://parth.codes',
      domain: 'parth.codes',
      tagline:
        'A free online card maker for every occasion (birthdays, graduations, anniversaries, weddings, thank-yous and apologies), sent as one shareable link. Plus date calculators and real-time multiplayer games.',
      points: [
        'Cards open from an envelope on any phone, with a design per occasion, the sender’s photo, a countdown to the day and an optional “Will you be my Valentine?” question first; birthday cakes are blown out through the microphone.',
        'Paid custom card links through Razorpay (UPI, Indian cards and PayPal), backed by a Python API on AWS Lambda and DynamoDB that unlocks PRO designs only after the payment is verified.',
        'Live game rooms for poker, Mafia, Connect Four and tic-tac-toe on Cloudflare Durable Objects, with tested TypeScript engines and an alpha-beta computer player in a Web Worker.',
        'Next.js on Cloudflare Pages at the edge, with landing pages per occasion, publish-date–gated guides and a dynamic sitemap.',
      ],
      stack: ['TypeScript', 'Next.js', 'Cloudflare Workers', 'Durable Objects', 'Python', 'AWS Lambda', 'DynamoDB', 'Razorpay'],
    },
  ],
  skills: [
    { name: 'Languages', items: ['Java', 'SQL'] },
    { name: 'Frameworks', items: ['Spring Boot', 'Spring', 'JPA / Hibernate', 'jOOQ', 'Quartz', 'DMN rules'] },
    { name: 'Messaging', items: ['Apache Kafka', 'AWS SQS', 'AWS SNS', 'Webhooks', 'Event-driven architecture'] },
    { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ScyllaDB', 'Snowflake', 'Elasticsearch'] },
    {
      name: 'Cloud & Infra',
      items: ['AWS Batch', 'Lambda', 'EC2', 'S3', 'EventBridge', 'Secrets Manager', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Jenkins'],
    },
    { name: 'Observability', items: ['Grafana', 'Prometheus alerting', 'CloudWatch', 'Incident response & RCA'] },
    { name: 'Practice', items: ['System design', 'Sharding & partitioning', 'Concurrency', 'Code review', 'Mentoring', 'Hiring'] },
  ],
  education: [
    {
      degree: 'B.Tech, Information Technology',
      university: 'Dharmsinh Desai University',
      duration: '2015 – 2019',
    },
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/parth-jariwala/',
    github: 'https://github.com/jariwala-parth',
    instagram: 'https://www.instagram.com/theparthjariwala/',
    email: 'theparthjariwala@gmail.com',
  },
};
