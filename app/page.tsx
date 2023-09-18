import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { News } from "@/components/news";

export default function Home() {
  return (
    <>
      <div className="hero"></div>

      <div className="news-important">
        <header className="_title">重要なお知らせ</header>
        <article className="_item">
          <a
            href="https://dgshape.com/ja/2023/07/11/%e4%bb%a4%e5%92%8c5%e5%b9%b46%e6%9c%8829%e6%97%a5%e5%8f%8a%e3%81%b37%e6%9c%887%e6%97%a5%e3%81%8b%e3%82%89%e3%81%ae%e5%a4%a7%e9%9b%a8%e3%81%ab%e3%82%88%e3%82%8b%e8%a2%ab%e7%81%bd%e8%80%85%e3%81%ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="_link"
          >
            令和5年6月29日及び7月7日からの大雨による被災者の皆様へ【掲載日:7月11日】
          </a>
        </article>
        <article className="_item">
          <a
            href="https://dgshape.com/ja/2023/06/05/%e4%bb%a4%e5%92%8c%ef%bc%95%e5%b9%b4%e6%a2%85%e9%9b%a8%e5%89%8d%e7%b7%9a%e3%81%ab%e3%82%88%e3%82%8b%e5%a4%a7%e9%9b%a8%e5%8f%8a%e3%81%b3%e5%8f%b0%e9%a2%a8%e7%ac%ac%ef%bc%92%e5%8f%b7%e3%81%ab%e3%82%88/"
            target="_blank"
            rel="noopener noreferrer"
            className="_link"
          >
            令和5年梅雨前線による大雨及び台風第2号による被災者の皆様へ【掲載日:6月5日】
          </a>
        </article>
      </div>

      <div className="category">
        <div className="_header">
          <header className="_title">CATEGORY</header>
          <div className="_description">カテゴリから選ぶ</div>
        </div>

        <div className="_items">
          <div className="_item">
            <Image
              src="https://placehold.jp/165x165.png"
              alt=""
              className="_image"
              width={165}
              height={165}
            />
            <header className="_title">カテゴリー名</header>
          </div>
          <div className="_item">
            <header className="_title">カテゴリー名</header>
            <Image
              src="https://placehold.jp/165x165.png"
              alt=""
              className="_image"
              width={165}
              height={165}
            />
          </div>
          <div className="_item">
            <header className="_title">カテゴリー名</header>
            <Image
              src="https://placehold.jp/165x165.png"
              alt=""
              className="_image"
              width={165}
              height={165}
            />
          </div>
          <div className="_item">
            <header className="_title">カテゴリー名</header>
            <Image
              src="https://placehold.jp/165x165.png"
              alt=""
              className="_image"
              width={165}
              height={165}
            />
          </div>
        </div>
      </div>

      <div className="search">
        <div className="_item _agency">
          <a className="_link" href="#">
            <div className="_content">
              <FontAwesomeIcon icon={faShop} size="2xl" />
              <header className="_title">代理店</header>
            </div>
          </a>
        </div>
        <div className="_item _faq">
          <a className="_link" href="#">
            <div className="_content">
              <FontAwesomeIcon icon={faCircleQuestion} size="2xl" />
              <header className="_title">FAQ</header>
            </div>
          </a>
        </div>
      </div>

      <News />

      <div className="inquiry">
        <div className="_button">
          <a href="#" className="_link">
            お問い合わせ
          </a>
        </div>
      </div>
    </>
  );
}
