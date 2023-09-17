import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <>
      <div className="nav">
        <header className="_title">DGSHAPE</header>
      </div>

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
              <FontAwesomeIcon icon={faShop} />
              <header className="_title">代理店</header>
            </div>
          </a>
        </div>
        <div className="_item _faq">
          <a className="_link" href="#">
            <div className="_content">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <header className="_title">FAQ</header>
            </div>
          </a>
        </div>
      </div>

      <div className="news">
        <div className="_header">
          <header className="_title">NEWS</header>
          <div className="_description">ニュース</div>
        </div>

        <div className="_items">
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/08/07/dwx-52d-value-plus/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年8月07日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">
                把持力を高めた新スピンドル仕様「DWX-52D Value Plus」
              </div>
            </a>
          </div>
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/07/26/%e5%a4%8f%e5%ad%a3%e4%bc%91%e6%a5%ad%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b-2/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年7月26日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">夏季休業のお知らせ</div>
            </a>
          </div>
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/07/11/%e4%bb%a4%e5%92%8c5%e5%b9%b46%e6%9c%8829%e6%97%a5%e5%8f%8a%e3%81%b37%e6%9c%887%e6%97%a5%e3%81%8b%e3%82%89%e3%81%ae%e5%a4%a7%e9%9b%a8%e3%81%ab%e3%82%88%e3%82%8b%e8%a2%ab%e7%81%bd%e8%80%85%e3%81%ae/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年7月11日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">
                令和5年6月29日及び7月7日からの大雨による被災者の皆様へ【掲載日：7月11日】
              </div>
            </a>
          </div>
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/06/09/%e3%83%a1%e3%83%87%e3%82%a3%e3%82%ab%e3%83%ab%e3%82%b7%e3%83%a7%e3%83%bc%e3%82%b8%e3%83%a3%e3%83%91%e3%83%b3%ef%bc%86%e3%83%93%e3%82%b8%e3%83%8d%e3%82%b9%e3%82%a8%e3%82%ad%e3%82%b9%e3%83%9d2023/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年6月09日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">
                メディカルショージャパン＆ビジネスエキスポ2023に出展します（終了しました）
              </div>
            </a>
          </div>
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/06/05/%e4%bb%a4%e5%92%8c%ef%bc%95%e5%b9%b4%e6%a2%85%e9%9b%a8%e5%89%8d%e7%b7%9a%e3%81%ab%e3%82%88%e3%82%8b%e5%a4%a7%e9%9b%a8%e5%8f%8a%e3%81%b3%e5%8f%b0%e9%a2%a8%e7%ac%ac%ef%bc%92%e5%8f%b7%e3%81%ab%e3%82%88/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年6月05日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">
                令和５年梅雨前線による大雨及び台風第２号による被災者の皆様へ【掲載日：6月5日】
              </div>
            </a>
          </div>
          <div className="_item">
            <a
              href="https://dgshape.com/ja/2023/05/23/%e3%83%ad%e3%83%bc%e3%83%a9%e3%83%b3%e3%83%89-%e3%83%87%e3%82%a3%e3%83%bc-%e3%82%b8%e3%83%bc-%e3%82%bf%e3%82%a4%e5%b7%a5%e5%a0%b4%e7%a8%bc%e5%83%8d%e9%96%8b%e5%a7%8b/"
              className="_link"
            >
              <div className="_meta">
                <div className="_date">2023年5月23日</div>
                <div className="_category">プレスリリース</div>
              </div>
              <div className="_title">
                ローランド ディー.ジー. タイ工場の新棟が稼働開始
              </div>
            </a>
          </div>

          <div className="_list">
            <div className="_button">
              <a href="#" className="_link">
                ニュース一覧
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="inquiry">
        <div className="_button">
          <a href="#" className="_link">
            お問い合わせ
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="_container">
          <div className="_nav">
            <div className="_main">
              <div className="_items">
                <div className="_item">
                  <a href="#" className="_link">
                    会社情報
                  </a>
                  <ul className="_list">
                    <li className="_item">
                      <a href="#" className="_link">
                        会社概要
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        事業拠点
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="_item">
                  <a href="#" className="_link">
                    ニュース
                  </a>
                  <ul className="_list">
                    <li className="_item">
                      <a href="#" className="_link">
                        重要なお知らせ
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        プレスリリース
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        トピックス
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="_item">
                  ポリシー
                  <ul className="_list">
                    <li className="_item">
                      <a href="#" className="_link">
                        アクセシビリティ
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        プライバシーポリシー
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        サイトご利用案内
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        クッキーポリシー
                      </a>
                    </li>
                    <li className="_item">
                      <a href="#" className="_link">
                        サイトマップ
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="_item">
                  <a href="#" className="_link">
                    お問い合わせ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sns">
          <a href="#" className="_link">
            <FontAwesomeIcon icon={faYoutube} />
            <i className="fa-brands fa-youtube fa-2xl"></i>
          </a>
          <a href="#" className="_link">
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
          <a href="#" className="_link">
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a href="#" className="_link">
            <FontAwesomeIcon icon={faFacebookF} />{" "}
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </div>

        <div className="copyright">&copy; 2023 DGSHAPE Corporation</div>
      </footer>
    </>
  );
}
