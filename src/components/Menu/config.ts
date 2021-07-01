import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://exchange.pixiuswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap?outputCurrency=0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
    {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8/',
      },
      // {
        // label: 'CoinGecko',
        // href: 'https://www.coingecko.com/en/coins/pixiuswap',
      // },
      // {
        // label: 'CoinMarketCap',
        // href: 'https://coinmarketcap.com/currencies/pixiuswap/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/pixiuswap/",
      },
      {
        label: "Docs",
        href: "https://pixiuswap.gitbook.io/pixiuswap-finance/",
      },
      {
        label: "Blog",
        href: "https://pixiuswap.com/",
      },
    ],
  },
  // {
    // label: 'Info',
    // icon: 'InfoIcon',
    // href: 'https://pixiuswap.info/',
   
  // },
]

export default config
