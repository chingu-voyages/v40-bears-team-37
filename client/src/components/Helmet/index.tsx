import { Helmet, HelmetProvider } from "react-helmet-async";

interface IProps {
    title: string,
    children: JSX.Element | JSX.Element[]
}

export default function HelmetWrapper ({ title, children }: IProps) {
 return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </HelmetProvider>)
}