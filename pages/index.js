import React, { useEffect, useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import Product from "../components/Product";
import HeadComponent from '../components/Head';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Constants
const AUTHOR_TWITTER_HANDLE = "AffirmedVision";
const AUTHOR_TWITTER_LINK = `https://twitter.com/${AUTHOR_TWITTER_HANDLE}`;

const App = () => {

// This will fetch the users' public key (wallet address) from any wallet we support
const { publicKey } = useWallet();
const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
const [creating, setCreating] = useState(false);
const [products, setProducts] = useState([]);

const renderNotConnectedContainer = () => (
  <div>
    <div className="button-container">
      <WalletMultiButton className="cta-button connect-wallet-button" />
    </div>
  </div>
);

useEffect(() => {
  if (publicKey) {
    fetch(`/api/fetchProducts`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log("Products", data);
      });
  }
}, [publicKey]);

const renderItemBuyContainer = () => (
  <div className="products-container">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">

        <header className="header-container">
          <p className="header"> Visionary Stationary </p>
          <p className="sub-text">All the Planner templates you need!</p>
          {/* We only render the connect button if public key doesn't exist */}
          {isOwner && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
          )}
        </header>

        <main>
        {creating && <CreateProduct />}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
          <img src="https://media.giphy.com/media/4vtJplhBkGK3y68Zw3/giphy.gif" alt="planner" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={AUTHOR_TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Built by @${AUTHOR_TWITTER_HANDLE} `}</a>
        </div>

      </div>
    </div>
  );
};

export default App;
