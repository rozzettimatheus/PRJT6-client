interface UI {
  color: string;
  background: string;
}

export default function randomUI(): UI {
  const colors: UI[] = [
    {
      color: '111111',
      background: '9DC5BB',
    },
    {
      color: 'fff',
      background: '8390fa',
    },
    {
      color: '222222',
      background: 'fac748',
    },
    {
      color: '333333',
      background: 'ee9480',
    },
    {
      color: 'ffffff',
      background: '0471a6',
    },
    {
      color: 'ffffff',
      background: '558b6e',
    },
    {
      color: '000000',
      background: 'd9c5b2',
    },
    {
      color: 'ffffff',
      background: '525252',
    },
    {
      color: 'f4f4f4',
      background: 'a20021',
    },
    {
      color: 'f4ede8',
      background: '485696',
    },
    {
      color: '353535',
      background: 'f1e8b8',
    },
    {
      color: '010101',
      background: '51bbfe',
    },
  ];

  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
