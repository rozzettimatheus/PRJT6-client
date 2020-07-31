interface INameOpt {
  first: string;
  second: string;
}
export default function formatName(name: string): INameOpt {
  const container = name.split(' ');
  const [first, second] = container;

  switch (container.length) {
    case 0:
      return {
        first: 'unamed',
        second: 'playlist',
      };
    case 1:
      return {
        first: first.substring(0, 1),
        second: first.substring(1, 2),
      };
    default: {
      return {
        first,
        second,
      };
    }
  }
}
