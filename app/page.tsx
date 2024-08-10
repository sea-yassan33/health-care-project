import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

const classStyles ={
  
};

export default function Home() {
  return (
    <>
      <section className={`${styles.pdTopMain} ${styles.pdTopTitle} `}>
          <div className='container'>
              <div className='row'>
                  <div className='col-3'>
                  </div>
                  <div className='col-9'>
                      <h1 className={`${styles.pdFontRoboto}`}>TITLE_NAME</h1>
                      <p className='opacity-50'>
                        Next.jsを使用したモダンなWeb開発の入門ページです。
                        <br/>迅速で効率的な開発をサポートするためのサポートします。
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
