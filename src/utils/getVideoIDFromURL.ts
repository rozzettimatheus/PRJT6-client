export default function getVideoIDFromURL(url: string): string {
  const [, id] = url.split('=');

  return id;
}
