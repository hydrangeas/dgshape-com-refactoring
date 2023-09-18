import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const Footer: FunctionComponent = () => {
  return (
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
  );
};
