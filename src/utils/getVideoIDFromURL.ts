export default function getVideoIDFromURL(url: string): string {
  return url.split('=')[1];
}
