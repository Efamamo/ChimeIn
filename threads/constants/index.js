export const sidebarLinks = [
  {
    imgURL: '/assets/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/messages.svg',
    route: '/messages',
    label: 'Messages',
  },
  {
    imgURL: '/assets/search.svg',
    route: '/search',
    label: 'Search',
  },
  {
    imgURL: '/assets/heart.svg',
    route: '/activity',
    label: 'Activities',
  },
  {
    imgURL: '/assets/create.svg',
    route: '/create-thread',
    label: 'Create Thread',
  },
  {
    imgURL: '/assets/community.svg',
    route: '/communities',
    label: 'Communities',
  },
  {
    imgURL: '/assets/user.svg',
    route: '/profile',
    label: 'Profile',
  },
];

export const profileTabs = [
  { value: 'threads', label: 'Threads', icon: '/assets/reply.svg' },
  { value: 'replies', label: 'Replies', icon: '/assets/members.svg' },
  { value: 'tagged', label: 'Tagged', icon: '/assets/tag.svg' },
];

export const communityTabs = [
  { value: 'threads', label: 'Threads', icon: '/assets/reply.svg' },
  { value: 'members', label: 'Members', icon: '/assets/members.svg' },
  { value: 'requests', label: 'Requests', icon: '/assets/request.svg' },
];
