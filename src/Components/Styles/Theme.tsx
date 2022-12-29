import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: '#FFFF00',
    Secondary: '#6511BA',
    TitleColor: '#262522',
    TextColor: '#4B4944',
    Grey: '#D3D3D3',
    White: '#ffffff',
    Bg: '##B8B8AB',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
