import { RightOutlined } from "@ant-design/icons";
export default function Cart() {
  return (
    <div className="cart">
      <div className="front"></div>
      <div className="leftside-cart">
        <div className="cart-item">
          <p>My appointment</p>
          <p>show your saved appointmen</p>
          {<RightOutlined className="icon" />}
        </div>
        <div className="cart-item">
          <p>My Client</p>
          <p>show your Client</p>
          {<RightOutlined className="icon" />}
        </div>
        <div className="cart-item">
          <p>Subscription Settings</p>
          <p>Manage your price</p>
          {<RightOutlined className="icon" />}
        </div>
        <div className="cart-item">
          <p>Security access</p>
          <p>Show you security access</p>
          {<RightOutlined className="icon" />}
        </div>
        <div className="cart-item">
          <p>Notification Access</p>
          <p>Change your notification access</p>
          {<RightOutlined className="icon" />}
        </div>
        <div className="cart-item">
          <p>Payment Settings</p>
          <p>Change your payment Settings</p>
          {<RightOutlined className="icon" />}
        </div>
        <p className="log-out">Logout</p>
      </div>
      <hr></hr>
      <div className="rightside-cart">
        <div className="cart-item2">
          <div className="rightside-first-cart">
            <li className="Settings-letter">Subscription Settings</li>
            <li className="coin">$25</li>
            <li>
              Weekly<span className="price">.2Application</span>
            </li>
          </div>
          <div className="footer-button">
            <p className="price">minimun price $2 to maximum $50</p>
            <button>save</button>
          </div>
        </div>
      </div>
      <div className="back"></div>
    </div>
  );
}
