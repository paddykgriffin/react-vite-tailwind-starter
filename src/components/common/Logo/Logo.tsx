import useCurrentTheme from '@/hooks/useCurrentTheme';

export default function Logo() {
  const { currentTheme } = useCurrentTheme();
  return <a href="/">{currentTheme === 'dark' ? <img src={LogoDark} /> : <img src={Logo} />}</a>;
}
