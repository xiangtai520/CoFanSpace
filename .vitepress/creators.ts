export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '石恒祥太',
    avatar: '',
    username: 'xiangtai520',
    title: 'CoFan Space 原始创作者',
    desc: '开发者，专注于基础设施维护，前端网站开发与创作，数码爱好者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/xiangtai520' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/xiangtai_520' },
    ],
    nameAliases: ['xiangtai520', '祥太', '石恒祥太', 'shota', 'xiangtai'],
    emailAliases: ['cofan365@qq.com'],
  },
  {
    name: '鲁纳提',
    avatar: '',
    username: 'lunati',
    title: 'CoFan Space 特别开发者',
    desc: '开发者，专注于运行维护工程，前后端相关开发，数码爱好者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/yCySR7OTL9S' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/LunatikConfort' },
    ],
    nameAliases: ['lunati', '鲁纳提', '鲁纳提', 'lunti', 'lunati', 'lunati', 'LunatikConfort'],
    emailAliases: ['1410743049@qq.com'],
  },
  {
    name: '开心的米帝电池',
    avatar: '',
    username: 'midi',
    title: 'CoFan Space 特别开发者',
    desc: '开发者，专注于运行维护工程，资深前后端相关开发，数码爱好者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/happymidi' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/MC_73250956' },
    ],
    nameAliases: ['miti', '开心的米帝电池', '开心的米帝电池', 'kaixindemididianchi', 'midi', 'miti', 'MC_73250956'],
    emailAliases: ['3496766870@qq.com'],
  },
  {
    name: '大滑稽',
    avatar: '',
    username: 'huaji',
    title: 'CoFan Space 特别开发者',
    desc: '开发者，略懂Python，前后端相关开发，数码爱好者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/uf-fipper' },
      
    ],
    nameAliases: ['huaji', '大滑稽', '大滑稽', 'dahuaji', 'huaji'],
    emailAliases: ['139687499@qq.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
