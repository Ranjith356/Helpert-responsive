import {
  MessageOutlined,
  ArrowLeftOutlined,
  CaretDownOutlined,
  BellFilled,
} from "@ant-design/icons";
export default function Navigation() {
  return (
    <nav className="nav">
      <div className="message-settings">
        <div className="Message-icon">
          <li>{<MessageOutlined />}</li>
          <li className="Settings-letter ">Helpert</li>
        </div>
        <div className="Settings">
          <li>{<ArrowLeftOutlined />}</li>
          <li className="Settings-letter ">Settings</li>
        </div>
      </div>
      <div className="yondoicon-Bell-Down">
        <div className="yondu-icon">
          <img src="74afd0c5ac60bda0e1728e7d573f2ab7.png" alt="yonduimg"></img>
          <li className="Settings-letter ">Yondu</li>
        </div>
        <div className="Bell-Down">
          <li>{<BellFilled className="Bell" />}</li>
          <li>{<CaretDownOutlined className="Down-Earo " />}</li>
        </div>
      </div>
    </nav>
  );
}
