import Head from 'next/head'
import {CodeHighlightScripts} from "./code-highlight"
import {InlineSignup} from "./newsletter-signup";

export const Layout = ({children}) => {
  return (
    <>
      <HeadAdditions/>
      <div id="outer-wrapper">
        <Header/>
        <div id="content-wrapper" className="outer-section">
            <div id="inner-content" className="inner-section">
              {children}
            </div>
        </div>
        <Footer/>
      </div>
      <CodeHighlightScripts/>
    </>
  );
};

const HeadAdditions = ({}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>

      <script dangerouslySetInnerHTML={{ __html: `
      var WebFontConfig = {
        google: {
            families: [
                'Source Sans Pro:300,400,400italic,700,900:greek,latin',
                // 'Roboto Slab:200,300,400,400italic,700,900:greek,latin',
                // Read https://github.com/typekit/webfontloader/issues/409 about the 'display=swap'
                'Source Code Pro:400&display=swap',
            ]
        }
      };
      (function() {
          var wf = document.createElement('script');
          wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
          wf.type = 'text/javascript';
          wf.async = 'true';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(wf, s);
      })();
      `}}/>

      <noscript>
        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,400italic,700,900|Source+Code+Pro|Open+Sans:400,300,400italic,700,800&subset=latin,greek&display=swap' rel='stylesheet' type='text/css'/>
      </noscript>

      <meta name="keywords" content="Lambros,Petrou,amazon,codeguru,profiler,facebook,portfolio,programming,developer,coder,software engineer,ucy,oxford" />
      <meta name="author" content="Lambros Petrou" />
      <meta name="owner" content="Lambros Petrou" />
      <meta name="copyright" content={`${new Date().getFullYear()} Lambros Petrou`} />
      <meta name="robots" content="all" />

      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />
      <meta property="article:author" content="https://www.lambrospetrou.com" />
      <meta property="article:publisher" content="https://www.lambrospetrou.com" />
      <meta property="og:site_name" content="Lambros Petrou blog"/>

      <link id="page_favicon" href="data:image/x-icon;base64,R0lGODlhEAAQAPEAAAAAAJYeHgAAAAAAACH5BAkeAAIAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAAC55QkIiIiIoQQQgghhBBCCCEIgiAIQhAEgiAIghAEgSAIgSAEgSAIQhAQCAICQUAgEAQCAkEgIBAIAgJBICAQCAICQUAgEAQCAoEgEBAIBIGAQCAIBAQCgUAQCAgEgYBAEBAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQIAAAQIKAAAh+QQJHgACACwAAAAAEAAQAAAC55QkIiIiIoQQQgghhBBCCCEIgiAIgiAIgiAIgiAIgiAIQhAEgiAIghAIBAQCQUAgCAQEAoEgEBAIAgJBQCAQBAICQSAgEAgCAkEgIBAIAgJBQCAQBAICgSAQEAgEgYBAIBAQICAgICAQECAgEBAgIBAQICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgICAgICAgQIAAAQIKAAAh+QQJHgACACwAAAAAEAAQAAAC55QkIiIiIoQQQgghhBBCCCEIgiAIQhAEgiAIghAEgSAIgSAEgSAIQhAQCAICQUAgEAQCAkEgIBAIAgJBICAQCAICQUAgEAQCAoEgEBAIBIGAQCAIBAQCgUAQCAgEgYBAEBAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQIAAAQIKAAAh+QQJHgACACwAAAAAEAAQAAAC55QkIiIiIoQQQogQghBCCBEEgSAIgSAEgSAIQhAIQiAIgSAIQSAIQSAQCAICQSAgEAgCAkFAIBAEAgKBIBAQCASBgEAgCAQEAoFAEAgIBIGAQBAICAQCgUAgEAgEgYBAICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQIAAAQIKAAAh+QQJHgACACwAAAAAEAAQAAAC55QkIiIiIoQQQgghhBBCCCEIgiAIQhAEgiAIghAEgSAIgSAEgSAIQhAQCAICQUAgEAQCAkEgIBAIAgJBICAQCAICQUAgEAQCAoEgEBAIBIGAQCAIBAQCgUAQCAgEgYBAEBAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgEBAgICAgICAgICAgICAgIBAQICAgICAgICAgICAgICAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQIAAAQIKAAA7" rel="icon" type="image/x-icon"/>
    </Head>
  )
};

const Header = ({}) => {
  return (
    <header id="header-wrapper" className="outer-section">
      <div className="header-signup-strip">
        <small><a href="/newsletter">Subscribe to my newsletter</a> and don't miss new articles.</small>
      </div>
      <div id="inner-header" className="inner-section">
        <div id="header-logo">
          <a href="/" title="Aries Ram - Click to vew all posts">
            <img alt="Aries logo" title="Go to homepage" width="60px" height="60px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADrCAMAAABzTasMAAABF1BMVEUAAAD78vL36+vy5OSSAACTAwOVBweVCAiWCgqXDAyYDg6YDw+aExOcFxecGBieGxueHByfHh6gICChIyOhJCSiJiajKCikKiqmLy+nMDCoMzOpNTWrOjqsPDysPT2tPz+tQECvRUWwR0eyS0uyTEy0T0+1U1O2VFS3Vla4WFi4WVm6Xl67YGC8YmK+Zma/amrAa2vBbW3DcnLDc3PEdHTFd3fGenrIf3/JgIDKg4PLhobMiIjOjIzPjo7QkJDQkZHSlpbTmJjTmZnWn5/WoKDYo6PYpKTZpaXaqKjcrq7dr6/fs7PftbXgtrbhuLjjvr7kv7/kwcHlwsLnx8foysrpzMzr0dHs09Pt1tbu2Njw29vw3Nzx3t4r+oMvAAAABHRSTlMAeKna8LJjGAAACgZJREFUeNrt3GlbG8kRB/C/okIZk3EkWwFERCxssBQsDkMMWo4sGORF5jTmkmJ9/8+RvEh2s1T1HH1gPzX8XvnxrgXD9FFdVQ0yuOlvdZrTtZiiP9WmF9b2zvBjGX7qdefqf47pj/HLxqvl3dMR3F1vtyrETHWP8WMY7SzExMSdw7HTp36IySRa6ON7G/caZNQ8gKVBi5LFGyN8R2cLlCzq3tt87Cxl8O67PfrxDKWb6OYd8bctymi5DFf+XgtXWUceuxXKLOrhsZU6lF31LPv20KRcZm/wqPYnKZf3WWdPRDlN7D7m656nvBrfMv08Jyi/+RIeyUWV8ouvkWqZrFQfabhvkZVogBSLRPYfHV6HbKWEW0tkr4fg5sjewNc45zZCR6h1clA5hdE/yM06QvpXjZxEX437GLlaRTijKpnFb3pHJ1dXp7/02i/MC3AJoruIEkT1xlyjWrEY7cGfu7px87twe9s0NOYgMs+gF+9Pxv+L6vqriRtpsFBmyhidfBbGbiPHiOyYwrL2w93/fCnhxR8hiFmSTQ0g2pGH7wmYE1NMNgQ37pLRBQJ4TbJNmAzFIRKDkQdwfGz6XGPEHI/g3XvD604MFxfEUzQeWCXJTMJD7Eckm4FvhyRayB2F8gF5Kw9zJBk2SPYWfl1HCcM87zufyTAsWraB/Q58KsmzcB/pZog7/t3PVNwnkGqDRJVreLQgfolDZDCcFBYG/B9ppYrHSLdrWHXgj/wljpHJEXGH7IXbbEt7JFqCLzdizHCAjFrETONXXTnIcXnyQdCIbQtZDSvE/HZYiYipOuZEYjgzryJdZCTv0+9+3ZHt55A5efF3PzuZfNbIocxfeYT/ajgGIa8MYbEzeT+Ky8hj1bgTjp2/6xoJqoFSi5VL5HJHzGvjSJ+2WHkDnM2HEz6io6ZprL9OiIqclvYhHM1bhJPcR9OAlmZ/Xm051HczIG6yjNwm5DPaKTEd5FazCK9sPrOP/FpyZNnz8unnJKh5X9nanoJe+QwwAQsrvo9ppchuoHM3xFyKqZdX3gZmDHvL4lHUSiTlREvSCd/Gud8tbUjcLOy0pFXsgphTfwW9aOzzFH7rLeBviidW2ClPErcCO1fErcHSR2kO/uRvYu6QYORrdNJkCZa+ECOtIXPOZ2f3V37ptUhTkt7HGzms8ba+VcbOL9w9KJD2M16b2XYteLi/8ivPYeBzeuizMDwPYO1WeuVl2xfuvpWZMw6/oOY1g7DkZS+/Ju7U7zHvI2IhF2fvW0VYjX2c9eY8p+b3hHDuBg7WPSzHI+812LbwPRFzB89HixrgmiV75btLbAeRU8jBrbsfoiNp93HS5UNdmONjuChHxDSRx7Y4wz0P9QPU3IY6t0bktmxU/aeq3wiDcNp5ceMZfKdgcJCY9PUV+Z9g1u98ktemyC146ftvHToXtrgzuBlNELPnkoCowVVdmM+r/gudiy4F8zWLn5rFPiGtoT/D0Vci+3CQZzOewZn0mf0ApZ85++Wtb3GlxCLN2pCO/G3AfwnkmX3VaBTg+1kAykK44axu2+o5lrrZnO1Ko5qHbs89fCXbYl+PhI2HcY9YP4mDC+4isouEXwRpoJoRo9PNEG24K3blpC9h+sArYkDVD/G1bolpWAV9lSCNNLNyq0QH7uas+gTiIN/LvqGXLQ4xrfo217POiLkMclnt2PD38CC2WKa6/N+E+VZKhsrSMdytW+S0JoMsbbemY+5IiC/d3ecf6yd8aSvB3a6x+vgyRIsamrnX9a7/qE2OggfGTWQIdx9zxzBxkDmHyNjqciG1XLh7lvNgfRGmE5jfn3xj/lHPASEi5FbO5XAFHrxNOC910weln5Jnzu6hL35HOv8uTsNcp+FP0s+169QRJJKaT9pAG/BgM9eNjW35HoL/BOBB4uHgLkjk8DxXdH8Ld6VK4rHnJsx96EaeYkUlyEjfSbk6MRtkJ+GjdztHXmwTHrxMyTbsCy0D7sY58nnLNqUsi/NeNW3Rb4S59Z29VFgLs4n/lPoDvwoyw04guw+yyvyBmHLqCtyGO14IW8+cJfka5NbaO15CDrKjTWedQe0gq+tk6sIhVVQ6QWKYUsaTWTfIrvIq00I0RICq1SBjrDMIknM6zXR8WwoRr69C8k9+Zna3nzGFVw/xyt9n+9qL/CThrpYxODkK8cseeENztkG5B2cHmVsrZkIUk6Is0+w+xGCr8gxE5nB5JsBvePiQJT/3MkTwVM8RYR7C1c9Z0lorLAEcYknv55iQMVyNspQBp3gfvautXFWZnc2tzd/8589b1/67I4SPDFDE2t586BKP6336gn3Cy7gKnKXHRVs8B6FBJXVxfc23UQ3mUidwzNY/FXpp73PM41UVLtMyjgP+P+gQpRwBNnnyRYf5lLPCvMIpLidCUta2FpT4mtzKVOa7uBaTibHbmdC9qnSSd5PPj1CjlxiKv2P/VY2LxGV7mtUc9KAH7pNi+QH0aCS0cd3xkoMe6wk9jscsvFGDP1wnIbxpQ5FywmXRJda3q0nNvKzPKj2hyFXgofnsBlV2jY0RZa3hi3y9aMcY3KxCF+NVgANWu1GEFyT/ZmxTGUKXZdbbKVfGI6jCR7Qpmp2DJrwZZuLWsJutQZuKfAQrsdq9Nk15P7tmrdrarMjXTfosllW+us3LZ7NZqHMtl0xXWdymjjym37D7IrrwnGJZ3Mavoc8SP3bzWgMU2hXzjWzm63MhbeR3LN+mkLR+n7HsqzK8t3RRahwegFFXOmxKBcMRNNoQ7n+tsc1doSNh5+rwgFV90Cr0wHWhk3C7q846JTSq8za/iP2VRm95roXF7yptsdBtbP71hnqLxessBdmEUvcsLj9njew6sf7FT2zw61R/eATd0x+p8ztoEVvuhmBU9gCxUB1qHTx8we3Ue2Ea7ypU6/WI/fI2ncqUZBN6TVKCj9Drr5TgEnotUYIy9OqRWQWK9clsGopdk9kiFCuR2To0e0ZG+9CsQUZn0GyRjEbQbJOMoNoBmdSg2gWZtKDaNzJ5B90KcijlYjI4gG5N/du4rE0G99Btgwyg3B7JYih3QrIGlLspyGmcI9katKuQqAft6iQ6gnYtEp1Duw6JbqHdOolK0G7XInBTXFOoIowfPgczC/WGBQncOJIsA8UM3bagX5UEu9CvIUes+s0bMm7FjFmvgWLGrN+gX48EKIB9ufFHv4EcqhczWJ9BAdwQ10QBjIlbQBEQ1ynqg68CxTyefUARxMRsowimiPkZRdAkpg8U81z6GUXQJuYCRbBEzBWKYFmunOm3Zmx5Kl7j0xhF0DPUSotYL0Uh7BX1wQ+L+uC8Qh6hED7RQ89QCMdFffCB3MGr38nTg7N6gm5nTw/OLtsVrYZUf3rwgj34X54eXLVLemiqqG/8ZUEe/OmNF2xVv3zazgo/1J/28acHD+/fg32CoJySwx0AAAAASUVORK5CYII=" />
          </a>
        </div>
        <div id="header-name">Lambros Petrou</div>
        <div id="header-quote">"We are what we repeatedly do. Excellence then, is not an act, but a habit!"&#x2009;&mdash;&#x2009;Aristotle</div>
        <div id="nav-buttons">
          <a href="/" title="All Articles - Lambros Petrou">Articles</a>
          <a href="/cv/" title="Lambros Petrou Resume - CV" rel="noopener" target="_blank">CV</a>
          <a href="https://www.linkedin.com/in/lambrospetrou/" title="Lambros Petrou on LinkedIn " target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/lambrospetrou" title="Public code" target="_blank" rel="noopener">Github</a>
          <a href="https://twitter.com/lambrospetrou" title="Tweets" target="_blank" rel="noopener">Tweets</a>
          <a href="/feed/rss.xml" title="Subscribe to my RSS Feed" target="_blank" rel="noopener">RSS Feed</a>
        </div>
      </div>
    </header>
  );
};

const Footer = ({}) => {
  return (
    <footer id="footer-wrapper" className="outer-section">
      <div id="inner-footer" className="inner-section clearfix">
        <InlineSignup/>
        {/* <div id="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Lambros Petrou</p>
        </div>
        <div id="footer-links">
          <p><a href="https://lambrospetrou.com" title="Lambros Petrou homepage">lambrospetrou.com</a></p>
        </div> */}
      </div>
    </footer>
  )
};
