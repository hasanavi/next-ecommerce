import type { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cart from "../../features/cart/Cart";
import styles from "./Layout.module.css";

const siteTitle = "Harvey Nicholas";

type LayoutProps = {
  children: React.ReactNode;
  isHome?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              priority
              src="/logo.svg"
              height={80}
              width={300}
              alt={siteTitle}
            />
          </a>
        </Link>
        <Cart />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
